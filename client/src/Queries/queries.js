import { gql } from "apollo-boost";

const getBooksQuery = gql`
  query {
    allbooks {
      name
      genre
      id
      author {
        name
      }
    }
  }
`;
//$xyz is query variables
const addBookQuery = gql`
  mutation($name: String!, $genre: String!, $id: String!) {
    addBook(name: $name, genre: $genre, id: $id) {
      name
      genre
      id
    }
  }
`;

const getBookDetail = gql`
  query($id: ID) {
    book(id: $id) {
      name
      genre
      author {
        name
        age
      }
    }
  }
`;
export { getBooksQuery, addBookQuery, getBookDetail };
