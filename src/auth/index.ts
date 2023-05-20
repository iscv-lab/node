import bcrypt from 'bcrypt';
import { Token } from '~models/Token';
import { ERole, User } from '~models/User';
import { generateAccessToken, generateRefreshToken } from './utils.js';
import { FastifyReply, FastifyRequest } from 'fastify';
import { EError } from '~constants/code.js';

export const register = async (
  request: FastifyRequest<{
    Body: {
      name: string;
      username: string;
      phone: string;
      email?: string;
      password: string;
    };
  }>,
  reply: FastifyReply,
) => {
  const username = request.body.username;
  const password = request.body.password;
  const name = request.body.name;
  const role = ERole.CLIENT;
  const email = request.body.email;
  const phone = request.body.phone;
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  const newUser = new User({
    username,
    email,
    name,
    password: hashed,
    phone,
    role: role,
    valid: true,
  });
  const user = await newUser.save();

  reply.code(200).send({ ...user.toObject(), password: '' });

  return;
};

export const login = async (
  request: FastifyRequest<{
    Body: {
      username: string;
      password: string;
    };
  }>,
  reply: FastifyReply,
) => {
  const username = request.body.username;
  const password = request.body.password;
  console.log(username);
  if (!password) {
    reply.code(403).send(EError.WRONG_PASSWORD);
    return;
  }
  const user = await User.findOne({ username: username, valid: true });
  if (!user) {
    reply.code(403).send(EError.WRONG_USERNAME);
    return;
  }
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    reply.code(400).send(EError.WRONG_PASSWORD);
    return;
  }
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);
  await new Token({ data: refreshToken, user: user._id }).save();
  reply
    .code(200)
    .setCookie('refreshToken', refreshToken, {
      sameSite: true,
      httpOnly: true,
      secure: true,
      signed: true,
    })
    .send({ user: { ...user.toObject(), password: '' }, accessToken });

  return;
};

// export const refresh = async (request: FastifyRequest<{ Body: { refreshToken: string } }>, reply: FastifyReply) => {
//   const refreshToken = request.body.refreshToken;
//   const user = res.locals.user;
//   if (!user || !refreshToken) {
//     reply.code(401).send('Token không chính xác.');
//     return;
//   }
//   const refreshTokenData = await Token.findOne({ data: refreshToken });
//   if (!refreshTokenData) {
//     reply.code(401).send('Hết hạn phiên đăng nhập.');
//     return;
//   }
//   const newAccessToken = generateAccessToken(user);
//   let newRefreshToken: any = undefined;
//   await Promise.all([
//     Token.findByIdAndRemove(refreshTokenData._id),
//     (async () => {
//       newRefreshToken = generateRefreshToken(user);
//       await new Token({ data: newRefreshToken, user: user._id }).save();
//     })(),
//   ]);
//   reply.code(200).send({ accessToken: newAccessToken, refreshToken: newRefreshToken });

//   return;
// };

export const auto = async (request: FastifyRequest, reply: FastifyReply) => {
  const refreshToken = request.cookies.refreshToken;
  const user = request.user;
  // if (!user || !refreshToken) {
  //   reply.code(401).send('Token không chính xác.');
  //   return;
  // }
  const [refreshTokenData, userData] = await Promise.all([
    Token.findOne({ data: refreshToken }),
    User.findOne({ _id: user._id, valid: true }),
  ]);
  if (!refreshTokenData) {
    reply.code(401).send('Hết hạn phiên đăng nhập.');
    return;
  }
  if (!userData) {
  }
  const newAccessToken = generateAccessToken(userData!);

  const [, newRefreshToken] = await Promise.all([
    Token.findByIdAndRemove(refreshTokenData._id),
    (async () => {
      const temp = generateRefreshToken(userData!);
      await new Token({ data: temp, user: user._id }).save();
      return temp;
    })(),
  ]);

  reply
    .code(200)
    .setCookie('refreshToken', newRefreshToken, {
      sameSite: true,
      httpOnly: true,
      secure: true,
      signed: true,
    })
    .send({
      accessToken: newAccessToken,
      user: { ...userData?.toObject(), password: '' },
    });

  return;
};

export const logout = async (request: FastifyRequest, reply: FastifyReply) => {
  await Token.deleteOne({ data: request.cookies.refreshToken });
  reply.code(200).clearCookie('refreshToken').send('success');
};

// export const changePassword = async (req, res) => {
//   const salt = await bcrypt.genSalt(10);
//   const id = req.params.id;
//   const hashed = await bcrypt.hash('123456789', salt);
//   await User.findByIdAndUpdate(id, { password: hashed });
//   reply.code(200).send('success');

//   return;
// };
