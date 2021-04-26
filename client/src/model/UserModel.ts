export default class UserModel {
    _id: string;
    index: string;
    picture: string;
    age: number;
    eyeColor: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    friends: UserModel[];

    constructor() {
        this._id = "";
        this.index = "0";
        this.picture = "";
        this.age = 0;
        this.eyeColor = "";
        this.name = "";
        this.company = "";
        this.email = "";
        this.phone = "";
        this.friends = [];
    }
}