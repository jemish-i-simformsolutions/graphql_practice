import React, { useState } from "react";
import { useMutation } from "react-apollo";
import { addAuthor, getAuthor } from "../Queries/queries";
export default function AddAuthor(props) {
  const [addAuthorDetails, { data }] = useMutation(addAuthor, {
    // refetchQueries: () => [{ query: null }],
  });
  const [name, setName] = useState(null);
  const [age, setAge] = useState(null);
  const [id, setId] = useState(null);

  return (
    <div id="displaygetbookdetail">
      <h1>Add Author Here</h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                id="name"
                onChange={(event) => {
                  setName(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>
              <input
                type="number"
                id="age"
                onChange={(event) => {
                  setAge(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td>Id</td>
            <td>
              <input
                id="id"
                onChange={(event) => {
                  setId(event.target.value);
                }}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <center>
                <button
                  onClick={() =>
                    addAuthorDetails({
                      variables: {
                        name: name !== null ? name : "",
                        age: age !== null ? Number(age) : 21,
                        id: id !== null ? id : "",
                      },
                    })
                  }
                >
                  {console.log(data)}
                  Submit
                </button>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
