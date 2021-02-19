import React from "react";
import { graphql } from "react-apollo";
import { getBookDetail, getBooksQuery } from "../Queries/queries";
import { flowRight } from "lodash";
import BookDetail from "./BookDetail";

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
    };
  }
  displayBooks = () => {
    const dataElement = this.props.getBooksQuery;
    if (!dataElement.loading) {
      return dataElement.allbooks.map((val, index) => {
        return (
          <div
            id="bookname"
            key={index}
            onClick={(e) => {
              this.setState({ id: val.id });
            }}
          >
            {}
            {val.name}
            {/* Id:{val.id}<br/>
                     Author Name:{val.author.name} */}
          </div>
        );
      });
    }
  };
  render() {
    return (
      <div id="display">
        {/* <button onClick={this.displayBooks}>Hello</button> */}

        <div id="booklist">
          <h1>BookList</h1>

          {this.displayBooks()}
          {/* {console.log(this.props)} */}
        </div>

        <BookDetail id={this.state.id} />
      </div>
    );
  }
}
export default graphql(getBooksQuery, { name: "getBooksQuery" })(
  // graphql(getBookDetail, { name: "getBookDetail" })
  BookList
);
