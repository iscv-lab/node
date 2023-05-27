import { useEmployee } from "~contracts/index";
import { Context } from "../context";
import { employee } from "./employee";
import { business } from "./business";

export const resolvers = {
  Query: {
    books: async (parent, args, contextValue: Context) => {
      return books;
    },
    book: async (parent, { title }) => books[0],

    employees: async (
      parent: any,
      args: string[],
      contextValue: Context,
      info: any
    ) => {
      const provider = contextValue.provider;
      const employeeContract = useEmployee(provider);
      return employeeContract
        .getAllProfile()
        .then((success) => {
          return success.map((value, index) => ({
            ...value,
            id: value.id.toNumber(),
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    },

    employee: async (parent, args, contextValue: Context, info) => {
      const id = args.id;

      if (id === undefined || id === null) return;
      const provider = contextValue.provider;
      const employeeContract = useEmployee(provider);

      return await employeeContract.getProfile(id).then((data) => ({
        ...data,
        id: data!.id.toNumber(),
      }));
    },
    employeeByUser: async (parent, args, contextValue: Context, info) => {
      const user: string = args.user;
      if (!user) return;
      info.cacheControl.setCacheHint({ maxAge: 600, scope: "PRIVATE" });
      const provider = contextValue.provider;
      const employeeContract = useEmployee(provider);
      return await employeeContract
        .getAllProfile({})
        .then((success) => {
          const data = success.find((value, index) => {
            return value.user.toLowerCase() === user.toLowerCase();
          });
          if (!data) return;
          return {
            id: data.id.toNumber(),
            user: data.user,
            name: data.name,
            phone: data.phone,
            professional: data.professional,
            email: data.email,
            github: data.github,
            linkedin: data.linkedin,
            sourceImage: data.sourceImage,
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
    ...employee,
    ...business,
  },
  // Mutation: {
  //   uploadAvatar: async (parent, args, contextValue: Context) => {
  //     // console.log(args);
  //   },
  // },
};

const books = [
  {
    id: 0,
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    id: 1,
    title: "City of Glass",
    author: "Paul Auster",
  },
];
