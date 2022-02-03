const { deleteBook } = require("../controllers/user-controller");
const { User } = require("../models");
const { AuthenticationError } = require("../utils/auth");

// const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("books");
      }
    },
  },
  Mutation: {
    createUser: async (parent, { userName, email, password }) => {
      // Create and return the new School object
      return await User.create({ userName, email, password });
    },
    deleteBook: async (parent, { bookId }, context) => {
      await Book.findOneAndDelete({ savedBooks, bookId: context.user.bookId });
      return { success: true, message: "got'em" };
    },
  },
};

// router.route("/").post(createUser).put(authMiddleware, saveBook);

// router.route("/login").post(login);

// router.route("/me").get(authMiddleware, getSingleUser);

// router.route("/books/:bookId").delete(authMiddleware, deleteBook);

module.exports = resolvers;
