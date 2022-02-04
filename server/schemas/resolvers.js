// const { deleteBook } = require("../controllers/user-controller");
const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const UserData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }
      throw new AuthenticationError("Please log in first!");
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      // Create and return the new School object
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Wrong username or password");
      }

      const correctPw = await user.isCorrectPassword(pasword);

      if (!correctPw) {
        throw new AuthenticationError("Wrong username or password");
      }

      const token = signToken(user);
      return { token, user };
    },
    saveBook: async (parent, { input }, { user }) => {
      if (user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: user._id },
          { $addToSet: { savedBooks: input } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please login or make an account!");
    },
    removeBook: async (parent, { bookId }, { user }) => {
      if (user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: user._id },
          { $pull: { savedBooks: { bookId: bookId } } },
          { new: true, runValidators: true }
        );
        return updatedUser;
      }
      throw new AuthenticationError("Please log-in!");
    },
  },
};

//  await Book.findOneAndDelete({ savedBooks, bookId: context.user.bookId });
//   return { success: true, message: "got'em" };

// router.route("/").post(createUser).put(authMiddleware, saveBook);

// router.route("/login").post(login);

// router.route("/me").get(authMiddleware, getSingleUser);

// router.route("/books/:bookId").delete(authMiddleware, deleteBook);

module.exports = resolvers;
