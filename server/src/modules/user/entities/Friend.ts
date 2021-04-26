import { Field, ID, ObjectType } from "type-graphql";

@ObjectType({ description: "The friends model" })
export default class Friend {
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
}