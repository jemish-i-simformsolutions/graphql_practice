import React from "react";
import BookList from "./Component/BookList";
import { ApolloProvider } from "react-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import AddBook from "./Component/AddBook";
import BookDetail from "./Component/BookDetail";

const client = new ApolloClient({
  uri: "http://localhost:4001/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div>
      <ApolloProvider client={client}>
        <BookList />
        <AddBook />
      </ApolloProvider>
    </div>
  );
}

export default App;
