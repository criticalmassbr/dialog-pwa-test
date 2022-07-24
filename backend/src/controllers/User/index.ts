import users from "../../database/users.json";

export default {
  findByName (name?: string) {
    const hasName = new RegExp("[a-zA-Z]+", "i");

    if (!name) return users;
    if (!hasName.test(name)) return [];
    
    const result = users.filter((user) => (
      user.name && user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    ));

    return result;
  },

  findById (_id: string) {    
    const result = users.filter((user) => (
      user._id && user._id.includes(_id)
    ));

    return result;
  }
}