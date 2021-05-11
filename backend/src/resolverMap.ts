import { GraphQLResolveInfo } from 'graphql';
import { IResolvers } from 'graphql-tools';
import database from '../src/database/db.json';

interface ListArgs {
  name?: String;
}

interface GetByIdArgs {
  id: String;
}

function matchWords(subject: String, words: String[]): boolean {
  const regex = new RegExp('(?:' + words.join('|') + ')', 'gi');

  if (subject.match(regex) == null) {
    return false;
  }

  return true;
}

const resolverMap: IResolvers = {
  Query: {
    list(_: void, { name }: ListArgs, ctx: any, info: GraphQLResolveInfo): object | undefined {
      if (name) {
        return database.filter((item) => matchWords(item.name, name.split(' ')));
      }
      return database;
    },
    getById(_: void, { id }: GetByIdArgs, ctx: any, info: GraphQLResolveInfo): object | undefined {
      if (id) {
        return database.filter((item) => item._id === id);
      }
    },
  },
};

export default resolverMap;
