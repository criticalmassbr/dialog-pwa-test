const app = require("express")();
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const db = require("./db.json");
const cors = require('cors');
const { format } = require('date-fns');

// ALLOW CORS
app.use(cors());


const getActualRequestDurationInMilliseconds = start => {
  const NS_PER_SEC = 1e9; //  convert to nanoseconds
  const NS_TO_MS = 1e6; // convert to milliseconds
  const diff = process.hrtime(start);
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS;
};


app.use(function (req, res, next) {
  const start = process.hrtime();
  const durationInMilliseconds = getActualRequestDurationInMilliseconds(start);

  console.log('Time:', format(new Date(), 'yyyy-MM-dd HH:mm'), req.method, decodeURI(req.url), res.statusCode, durationInMilliseconds);
  next();
});

// CONSTANTS
const PORT = 4000;

const schema = buildSchema(`
  type User {
    _id: ID
    index: Int
    picture: String
    age: Int
    eyeColor: String
    name: String
    company: String
    email: String
    phone: String
    friends: [User]
    greeting: String
    
  }
  type Query {
    user(_id: ID): User
    users: [User]
    list(name: String): [User]
  }
  type Mutation {
    createUser(name: String!, repo: String!, age: Int!): User
  }
`);

const providers = {
  users: db
};

let id = 0;

const resolvers = {
  user({ _id }) {
    return providers.users.find(item => item._id === _id);
  },
  users() {
    return providers.users;
  },
  list({ name }) {
    let regexValidator = new RegExp(`${name.toLowerCase()}`, 'g')
    return name ? providers.users.filter((user) => regexValidator.test(user.name.toLowerCase())) : providers.users;
  },

};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`GraphQL server up and running at port: ${PORT}`);
});