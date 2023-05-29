const typeDefs = gql`
    type User {
        username: String
        email: String
        password: String
        savedBooks: [Book]
    }

    type Book {
        author: String
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type Query {
        users: [User]
        books: [Book]
        user(id: ID!): User
    }
    type Mutations {
        addUser(username: String!, email: String!, password: String!): User
        addBook(authors: String, description: String!, bookId: String!, image: String, link: String, title: String!): Book
    }
`;

module.exports = typeDefs