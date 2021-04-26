import User from "../entities/User";
import db from "../../../../db.json";
import UserArgs from "../types/UserArgs";

export default class UserService {
  private users: User[] = db;
  async list(args: UserArgs): Promise<User[]> {
    return args.name ? this.users.filter(user =>  {
      let reg = "";
      const searchedName = args.name.toLocaleLowerCase();
      searchedName.split(" ").forEach(word => reg += (reg ? " " : "") + `[a-z]?${word}[a-z]?`);
      return new RegExp(reg).test(user.name.toLocaleLowerCase());
    }) : this.users;
  }

  async profile(args: UserArgs): Promise<User> {
    return this.users.find(user => user._id === args._id);
  }
}