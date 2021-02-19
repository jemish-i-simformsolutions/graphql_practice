import React from "react";
import { graphql, useQuery } from "react-apollo";
import { getBookDetail } from "../Queries/queries";
import BookDetail from "./BookDetail";
function Xyz() {
  const { data, loading, error } = useQuery(getBookDetail, {
    variables: { id: 2 },
  });
  if (loading === false) {
    return <>{console.log(data)}</>;
  } else {
    return <>Loading.....</>;
  }
}

class GetBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: null };
  }

  render() {
    return (
      <>
        <div id="display">
          <div id="displaygetbookdetail">
            <h1>Get Book here</h1>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td>ID:</td>
                    <td>
                      <input
                        id="id"
                        type="number"
                        onChange={(event) =>
                          this.setState({ id: event.target.value })
                        }
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div id="detailrandom">
            <Xyz />
            <BookDetail id={this.state.id} />
          </div>
        </div>
      </>
    );
  }
}
export default GetBook;
