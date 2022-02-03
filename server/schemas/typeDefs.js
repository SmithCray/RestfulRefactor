const { gql } = require("apollo-server-express");

// creating a Class object
// graphQl is a strictly typed language

// datatypes - scalar types

const typeDefs = gql`

  type Book {
    bookId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type User {
    id: ID
    username: String
    email: String
    bookCount: Int
    svaedBooks: [Book]
  }
  type Auth {
    token: ID!
    user:user
  }
  input bookInput {
    boodId:String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type query {
    me:user
  }
  type Mutation {
    login(email: String!, password: String!); Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;

// router.route("/").post(createUser).put(authMiddleware, saveBook);

// router.route("/login").post(login);

// router.route("/me").get(authMiddleware, getSingleUser);

// router.route("/books/:bookId").delete(authMiddleware, deleteBook);
