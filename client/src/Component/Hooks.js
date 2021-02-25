import React, { useState } from "react";
import { useQuery } from "react-apollo";
import { getAuthor } from "../Queries/queries";
import AuthorList from "./AuthorList";
function Hooks() {
  const [id, setId] = useState(null);
  const { data, loading, error } = useQuery(getAuthor, {
    variables: { id: id },
  });
  return (
    <>
      <div id="display">
        <div id="displaygetbookdetail">
          <h1>Get Author details here</h1>
          <input
            onChange={(event) => {
              setId(event.target.value);
            }}
          />
        </div>

        <div>
          {console.log(data)}
          <AuthorList data={data} loading={loading} />
        </div>
      </div>
    </>
  );
}
export default Hooks;
