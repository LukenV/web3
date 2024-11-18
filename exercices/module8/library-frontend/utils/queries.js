import { gql } from "@apollo/client";

const ALL_AUTHORS = gql`
  query {
    allAuthors {
      bookCount
      born
      id
      name
    }
  }
`;

const ALL_BOOKS_WITHOUT_GENRE = gql`
  query {
    allBooks {
      title
      published
      id
      author
    }
  }
`;

const CREATE_BOOK = gql`
  mutation createBook(
    $title: String!
    $author: String!
    $published: Int!
    $genres: [String!]!
  ) {
    addBook(
      title: $title
      author: $author
      published: $published
      genres: $genres
    ) {
      title
      published
      id
      genres
      author
    }
  }
`;

const EDIT_AUTHOR = gql`
mutation editAuthor($name: String!, $setBornTo: Int!) {
  editAuthor(name: $name, setBornTo: $setBornTo) {
    name
    id
    born
    bookCount
  }
}
`;

export { ALL_AUTHORS, ALL_BOOKS_WITHOUT_GENRE, CREATE_BOOK, EDIT_AUTHOR };
