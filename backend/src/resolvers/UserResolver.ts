import { Arg, Query, Resolver } from "type-graphql";

import User from "../models/User";
import Controllers from '../controllers/User';
import UsersDatabase from '../database/users.json';

@Resolver()
export class UserResolver {
  private data: User[] =  UsersDatabase;

  @Query(() => [User])
  async list(@Arg('name', { nullable: true }) name: string) {
    return name ? Controllers.findByName(name) : this.data;
  }

  @Query(() => [User])
  async detail(@Arg('_id') _id: string) {
    return _id ? Controllers.findById(_id) : this.data;
  }
}