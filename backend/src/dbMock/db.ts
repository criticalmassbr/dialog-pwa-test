import people from "./people";

function find(name?: string) {
  const hasName = new RegExp("[a-zA-Z]+", "i");
  if (!name) {
    return people;
  }
  else {
    if (!hasName.test(name)) {
      return [];
    }
    else
      return people.filter(person =>
      (person.name && person.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      ));
  }
}

export default { find };