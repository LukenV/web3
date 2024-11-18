import { useQuery } from "@apollo/client";
import { ALL_BOOKS_WITHOUT_GENRE } from "../../utils/queries";

const Books = ({ show }) => {
  const result = useQuery(ALL_BOOKS_WITHOUT_GENRE);

  if (result.loading) {
    return <p>Loading...</p>;
  }

  if (!show) {
    return null;
  }

  const books = result.data.allBooks;

  return (
    <div>
      <h2>books</h2>

      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map((a) => (
            <tr key={a.title}>
              <td>{a.title}</td>
              <td>{a.author}</td>
              <td>{a.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
