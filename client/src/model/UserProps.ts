export default interface IUser {
    _id: string;
    index: string;
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    friends?: IUser[];
}