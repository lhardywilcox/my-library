const { User, Book } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate ('book');
        },
        books: async () => {
            return await Book.find({});
        }
    },
    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            return await User.create({ username, email, password });
        },
        addBook: async (parent, { authors, description, bookId, image, link, title }) => {
            return await Book.create({ authors, description, bookId, image, link, title });
        },
    }
};

module.exports = resolvers;