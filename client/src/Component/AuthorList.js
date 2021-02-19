import React from "react";

export default class AuthorList extends React.Component {
  render() {
    return (
      <div id="authordetail">
        <div>
          <h1>Details of Author</h1>
          <li>
            Name:
            {this.props.loading == false
              ? this.props.data.author !== null
                ? this.props.data.author.name
                : "data not available"
              : "Loading the data"}
          </li>
          <li>
            Age:
            {this.props.loading == false
              ? this.props.data.author !== null
                ? this.props.data.author.age
                : "data not available"
              : "Loading the data"}
          </li>
        </div>

        <div>
          <h4>Books written by given author</h4>
          <ul>
            {this.props.loading == false
              ? this.props.data.author !== null
                ? this.props.data.author.books.map((val, index) => {
                    return <li key={index}>{val.name}</li>;
                  })
                : "data not available"
              : "Loading the data"}
          </ul>
        </div>
      </div>
    );
  }
}
