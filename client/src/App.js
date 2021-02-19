import React from "react";
import BookList from "./Component/BookList";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { HttpLink, InMemoryCache, split } from "apollo-boost";
import AddBook from "./Component/AddBook";
import BookDetail from "./Component/BookDetail";
import GetBook from "./Component/GetBook";
import Hooks from "./Component/Hooks";
import AddAuthor from "./Component/AddAuthor";

const httpLink = new HttpLink({
  uri: "http://localhost:4001/graphql",
});

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
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
