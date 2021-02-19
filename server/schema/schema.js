const graphql = require("graphql");
const _ = require("lodash");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
} = graphql;
var books = [
  { name: "good", genre: "real", id: "1", authorId: "3" },
  { name: "bad", genre: "fantasy", id: "2", authorId: "1" },
  { name: "neutral", genre: "sci-fic", id: "3", authorId: "2" },
  { name: "history", genre: "real", id: "4", authorId: "3" },
  { name: "novel", genre: "fantasy", id: "5", authorId: "1" },
  { name: "nicest", genre: "sci-fic", id: "6", authorId: "2" },
];
var author = [
  { id: "1", name: "rohan", age: 30 },
  { id: "2", name: "amish", age: 40 },
  { id: "3", name: "mohan", age: 50 },
];

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () =>
    //we wrap the field beacause here we can use the authortype after its execution
    //es-6 function that will return object
    ({
      id: { type: GraphQLString },
      name: { type: GraphQLString },
      genre: { type: GraphQLString },
      authorId: { type: GraphQLString },
      author: {
        type: AuthorType,
        resolve(parent, args) {
          return _.find(author, { id: parent.authorId });
        },
      },
    }),
});
const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return _.filter(books, { authorId: parent.id });
      },
    },
  }),
});
const Mutation = new GraphQLObjectType({
  name: "mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt },
        id: { type: GraphQLString },
      },
      resolve(parents, args) {
        author = [...author, { name: args.name, age: args.age, id: args.id }];
        return _.find(author, { id: args.id });
      },
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        id: { type: GraphQLString },
        authorId: { type: GraphQLString },
      },
      resolve(parents, args) {
        books = [
          ...books,
          {
            name: args.name,
            genre: args.genre,
            id: args.id,
            authorId: args.authorId,
          },
        ];
        return _.find(books, { id: args.id });
      },
    },
  },
});
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return _.find(author, { id: args.id });
      },
    },
    allbooks: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return books;
      },
    },
    allauthors: {
      type: new GraphQLList(AuthorType),
      resolve(parent, args) {
        return author;
      },
    },
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
