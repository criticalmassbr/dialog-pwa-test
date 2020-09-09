import users from "./users";

function find(name?: string) {
  const checkName = new RegExp("[a-zA-Z]+", "i");
  if(!name) 
    return users;
  if(name && !checkName.test(name))
    return [];
  if(name)
    return users.filter(user => 
      (user.name && user.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
    )); 
}

export default { find };