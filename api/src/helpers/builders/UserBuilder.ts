import { UserDTO } from '~/domain/User/UserDTO';

export default class UserBuilder {
  private userData: UserDTO;

  constructor(id: string) {
    this.userData = {
      _id: id,
      index: 0,
      picture: 'any_picture',
      age: 0,
      eyeColor: 'any_color',
      name: 'any_name',
      company: 'any_company',
      email: 'any_email',
      phone: 'any_phone',
      greeting: 'any_greeting',
      friends: [],
    };
  }

  public setIndex(index: number) {
    this.userData.index = index;
    return this;
  }

  public setPicture(picture: string) {
    this.userData.picture = picture;
    return this;
  }

  public setAge(age: number) {
    this.userData.age = age;
    return this;
  }

  public setEyeColor(eyeColor: string) {
    this.userData.eyeColor = eyeColor;
    return this;
  }

  public setName(name: string) {
    this.userData.name = name;
    return this;
  }

  public setCompany(company: string) {
    this.userData.company = company;
    return this;
  }

  public setEmail(email: string) {
    this.userData.email = email;
    return this;
  }

  public setPhone(phone: string) {
    this.userData.phone = phone;
    return this;
  }

  public setGreeting(greeting: string) {
    this.userData.greeting = greeting;
    return this;
  }

  public setFriends(fiends: any[]) {
    this.userData.friends = fiends;
    return this;
  }

  public build() {
    return this.userData;
  }
}
