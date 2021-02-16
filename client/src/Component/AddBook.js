import React from "react";
import { graphql } from "react-apollo";
import { addBookQuery, getBooksQuery } from "../Queries/queries";

// const addBook=gql`
// mutation{
//  addBook(name:)
// }`
class AddBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookName: null,
      genre: null,
      id: null,
    };
  }
  addBookfun(event) {
    event.preventDefault();
    this.props.addBookQuery({
      variables: {
        name: this.state.bookName,
        genre: this.state.genre,
        id: this.state.id,
      },
      refetchQueries: [{ query: getBooksQuery }],
    });
  }

  render() {
    return (
      <>
        <div id="displayaddbook">
          <h1>Add Book here</h1>
          <form onSubmit={this.addBookfun.bind(this)}>
            <table>
              <tbody>
                <tr>
                  <td>Book name:</td>

                  <td>
                    <input
                      id="name"
                      onChange={(event) =>
                        this.setState({ bookName: event.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>Genre:</td>
                  <td>
                    <input
                      id="genre"
                      onChange={(event) =>
                        this.setState({ genre: event.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td>ID:</td>
                  <td>
                    <input
                      id="id"
                      onChange={(event) =>
                        this.setState({ id: event.target.value })
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td colSpan="2">
                    <center>
                      {" "}
                      <button type="submit">Submit</button>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </>
    );
  }
}
export default graphql(addBookQuery, { name: "addBookQuery" })(AddBook);
