import gql from "graphql-tag";

export const LOGIN_USER = gql`
mutation login($email:String!,$password:String!) {
    login($email, password:: $password) {
        token
        user {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
}
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String, password: $password) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            bookCount
            savedBooks {
                bookId
                authors
                description
                title
                image
                link
            }
        }
    }
}

`;

export const SAVE_BOOK = gql`
  mutation saveBook($input: bookInput!) {
    saveBook(input: $input) {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation reamoveBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      _id
      username
      email
      bookcount
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;
