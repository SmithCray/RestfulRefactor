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
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }
  type Auth {
    token: ID!
    user: User
  }
  input bookInput {
    boodId: String
    authors: [String]
    description: String
    title: String
    image: String
    link: String
  }
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: bookInput): User
    removeBook(bookId: String!): User
  }
`;

//  await Book.findOneAndDelete({ savedBooks, bookId: context.user.bookId });
//   return { success: true, message: "got'em" };

module.exports = typeDefs;

// router.route("/").post(createUser).put(authMiddleware, saveBook);

// router.route("/login").post(login);

// router.route("/me").get(authMiddleware, getSingleUser);

// router.route("/books/:bookId").delete(authMiddleware, deleteBook);
