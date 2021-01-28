import { IResolvers } from 'graphql-tools';
import db from "./dbMock/db"

const resolvers: IResolvers = {
  Query: {
    list: async (_, args, { }) => {
      let { name } = await args;
      const result = name ? db.find(name) : db.find();
      return result ? result : [];
    }
  },
  Person: {
    id: (person) => person._id
  }
};
export default resolvers;