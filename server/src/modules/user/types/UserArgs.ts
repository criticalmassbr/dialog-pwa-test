import { ArgsType, Field } from "type-graphql";

@ArgsType()
export default class UserArgs {
  @Field(type => String)
  name: string = "";

  @Field(type => String)
  _id: string = "";

}