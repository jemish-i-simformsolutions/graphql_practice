import { gql } from "apollo-boost";

const getBooksQuery = gql`
  query {
    allbooks {
      name
      genre
      id
      authorId
      author {
        name
      }
    }
  }
`;
//$xyz is query variables
const addBookQuery = gql`
  mutation($name: String!, $genre: String!, $id: String!, $authorId: String!) {
    addBook(name: $name, genre: $genre, id: $id, authorId: $authorId) {
      name
      genre
      id
      authorId
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
