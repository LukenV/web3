import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ALL_AUTHORS, EDIT_AUTHOR } from "../../utils/queries";

const EditAuthor = ({authors}) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("2024");

  const [editAuthor] = useMutation(EDIT_AUTHOR, {
    refetchQueries: [{ query: ALL_AUTHORS }]
  });

  const submit = (e) => {
    e.preventDefault();

    editAuthor({
        variables: {
            name,
            setBornTo: Number(born)
        }
    });

    setName("");
    setBorn("");
  };

  return (
    <div>
      <h2>Set birthyear</h2>
      <form onSubmit={submit}>
        <div>
          name
          <select onChange={({ target }) => setName(target.value)}>
            {authors.map(a => {
                return <option key={a.name} value={a.name}>{a.name}</option>
            })}
          </select>
        </div>
        <div>
          born
          <input
            type="number"
            min="1900"
            max="2024"
            value={born}
            onChange={({ target }) => setBorn(target.value)}
          />
        </div>

        <button type="submit">Edit author</button>
      </form>
    </div>
  );
};

export default EditAuthor;
