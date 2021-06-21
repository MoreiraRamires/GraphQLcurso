const {gql, ApolloServer} = require("apollo-server");

/*
*Scalar Types
 * - Int
 * -Float
 * -String 
 * -Boolean
 * -ID 
 */


//  Tagged template
const typeDefs = gql`
  type Query{
    age:Int
    wage: Float
    name:String
    active:Boolean
    id:ID
    tecnology:[String] 
  }

`;

const resolvers = {
  Query:{
    age(){
      return 18
    },
    wage(){
      return 1800.00
    },
    name(){
      return "Rafael"
    },
    active(){
      return true
    },
    id(){
      return 17051996
    },
    tecnology(){
      return ["GraphQL","React"]
    },
  }
};

 const server = new ApolloServer({
   typeDefs,
   resolvers
 })

 server.listen()