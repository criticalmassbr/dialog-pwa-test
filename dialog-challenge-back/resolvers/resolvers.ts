import db from "../db.json";
import { findBestMatch } from "string-similarity";

export const resolvers = {
  Query: {
    list: (_: any, args: { name?: string }) => {
      const { name } = args;
      if (name) {
        const term = name.trim().replace(/\s/g, "\\s.*");
        const regex = new RegExp(term, "i");

        const matches = findBestMatch(
          term,
          db.map((user) => user.name)
        );
        const similarNames = matches.ratings
          .filter((rating) => rating.rating >= 0.5)
          .map((rating) => rating.target);

        return db.filter(
          (user) => regex.test(user.name) || similarNames.includes(user.name)
        );
      }
      return db;
    },
  },
};
