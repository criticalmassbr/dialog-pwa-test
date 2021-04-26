import { Field, ID, ObjectType } from "type-graphql";
import Friend from "./Friend";

@ObjectType({ description: "The users model" })
export default class User {
    @Field(type => ID)
    _id: string;

    @Field()
    index: number;

    @Field()
    picture: string;

    @Field()
    age: number;

    @Field()
    eyeColor: string;

    @Field()
    name: string;

    @Field()
    company: string;

    @Field()
    email: string;

    @Field()
    phone: string;

    @Field(type => [User])
    friends: Friend[];
}