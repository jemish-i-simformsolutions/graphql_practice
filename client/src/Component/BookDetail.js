import React from "react";
import { graphql } from "react-apollo";
import { getBookDetail } from "../Queries/queries";
class BookDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  showBookDetail() {
    if (this.props.id) {
      if (this.props.data.loading === false) {
        const element = this.props.data.book;
        if (element !== null) {
          return (
            <div>
              {console.log(this.props.data)}
              <li>Book Name: {element.name}</li>
              <li>Genere: {element.genre}</li>
              <li>
                Author Name:
                {element.author ? element.author.name : "Not available"}
              </li>
              <li>
                Author Age:
                {element.author ? element.author.age : "Not available"}
              </li>
            </div>
          );
        } else {
          return (
            <h3 style={{ color: "silver" }}>
              Book not available with given Book id...
            </h3>
          );
        }
      }
    }
  }
  render() {
    return (
      <div id="bookdetail">
        <h1>Book details of selected book</h1>
        <ul>
          {this.showBookDetail()}
          {/* {console.log(this.props)} */}
        </ul>
      </div>
    );
  }
}

export default graphql(getBookDetail, {
  options: (props) => {
    return { variables: { id: props.id } };
  },
})(BookDetail);
