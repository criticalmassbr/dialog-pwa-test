import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
class User {
  @Field(_type => ID)
  _id: string;

  @Field()
  index:     number;

  @Field()
  picture:   string;

  @Field()
  age:       number;

  @Field()
  eyeColor:  string;

  @Field()
  name: string;

  @Field()
  company:   string;

  @Field()
  email:     string;

  @Field()
  phone:     string;

  @Field(_type => [User])
  friends?:  User[];

  @Field()
  greeting?: string;
}

export default User;