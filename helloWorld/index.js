const {gql,ApolloServer} = require("apollo-server")

const resolvers={
  Query:{
    hello() {
      return "Hello World"
    }
  }
}

const typeDefs = gql`
  type Query{
    hello:String
  }
`;

const server = new ApolloServer({
  typeDefs,
  resolvers
})

server.listen() // por default porta 4k