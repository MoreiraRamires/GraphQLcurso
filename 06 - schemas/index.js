const {gql, ApolloServer} = require("apollo-server");

/* 
==> Schema 
==> SDL
==>
 */


//  Tagged template


const product =  [
  {
    id:1,
    name:"Macbook Pro",
    price: 3000.00
  },
  {
    id:2,
    name:"Dell Vostro",
    price: 2000.00
  }
]

const user =  [
  {
    id:1,
    name:"Marcos",
    wage: 3400,
    active:true,
    age: 31,
  },
  {
    id:1,
    name:"Paulo",
    wage: 5400,
    active:true,
    age: 33,
  }
]


const typeDefs = gql`

  type Product {
    id:ID
    name: String
    price: Float
  }
  type User{
    age:Int
    wage: Float
    name:String
    active:Boolean
    id:ID
  }

  type Query{
    user: [User!]! 
    product:[Product!]!
  }

`;

const resolvers = {
  Query:{
    user(){
      return user
    },
    product(){
      return product
    }
  }
};

 const server = new ApolloServer({
   typeDefs,
   resolvers
 })

 server.listen() 