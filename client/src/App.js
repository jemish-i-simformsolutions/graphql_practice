import React from "react";
import BookList from "./Component/BookList";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { HttpLink, InMemoryCache, split } from "apollo-boost";
import AddBook from "./Component/AddBook";
import BookDetail from "./Component/BookDetail";
import GetBook from "./Component/GetBook";
import Hooks from "./Component/Hooks";
import AddAuthor from "./Component/AddAuthor";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const httpLink = new HttpLink({
  uri: "http://localhost:4001/graphql",
});
const wsLink = new WebSocketLink({
  uri: "ws://localhost:4001/graphql",
  options: {
    reconnect: true,
  },
});
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);
const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
  splitLink,
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BookList />
        <GetBook />
        <Hooks />
        <AddBook />

        <AddAuthor />
      </ApolloProvider>
    </div>
  );
}

export default App;
