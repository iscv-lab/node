import { useEmployee } from "~contracts/index";
import { Context } from "./context";
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
            category: value.category.toNumber(),
            id: value.id.toNumber(),
          }));
        })
        .catch((error) => {
          console.log(error);
        });
    },

    employee: async (parent, args, contextValue: Context, info) => {
      const id = args.id;
      if (!id) return;
      const provider = contextValue.provider;
      const employeeContract = useEmployee(provider);
      return await employeeContract
        .getAllProfile({})
        .then((success) => {
          const data = success.find((value, index) => value.id.eq(id));

          return {
            ...data,
            category: data.category.toNumber(),
            id: data.id.toNumber(),
          };
        })
        .catch((error) => {
          console.log(error);
        });
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
            ...data,
            category: data.category.toNumber(),
            id: data.id.toNumber(),
          };
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
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
