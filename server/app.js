const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { ApolloServer } = require("apollo-server-express");
const schema = require("./schema/schema");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
); //whenever /graphql request occured graphHTTP() going to be called

app.listen(4001);
