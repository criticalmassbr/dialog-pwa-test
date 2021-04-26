import { Resolver, Query, Args } from "type-graphql";

import User from "../entities/User";
import UserService from "../service/UserService";
import UserArgs from "../types/UserArgs";

@Resolver()
export class UsersResolver {
  private readonly service: UserService;

  constructor() {
    this.service = new UserService();
  }

  @Query(returns => [User])
  async list(@Args() args: UserArgs): Promise<User[]> {
    const users = await this.service.list(args);
    return users;
  };

  @Query(returns => User)
  async profile(@Args() args: UserArgs): Promise<User> {
    const users = await this.service.profile(args);
    return users;
  };
}