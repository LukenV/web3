import { useQuery } from "@apollo/client";
import { ALL_AUTHORS } from "../../utils/queries";
import EditAuthor from "./EditAuthor";

const Authors = ({show}) => {

  const result = useQuery(ALL_AUTHORS);
  
  if (result.loading) {
    return <p>Loading...</p>;
  }

  if (result.error) {
    return <p>{result.error.message}</p>;
  }

  if (!show) {
    return null;
  }
  
  const authors = result.data.allAuthors;

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              <td>{a.born}</td>
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditAuthor authors={authors}/>
    </div>
  );
}

export default Authors;
