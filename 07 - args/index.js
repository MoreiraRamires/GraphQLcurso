const {gql, ApolloServer} = require("apollo-server");

/* 
==> Schema 
==> SDL
==>
 */


//  Tagged template


const product =  [
  {
    id:11,
    name:"Macbook Pro",
    price: 3000.00
  },
  {
    id:22,
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
    id:2,
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
    user: [User!]! ,
    product:[Product!]!,
    users(id:Int, name:String): User,
    products(id:Int, price:Float): Product,
  }

`;

const resolvers = {
  Query:{
    users(_,args){
      const {id,name} =args
      
      if(id){return user.find(user => user.id === id)}
      return user.find(user => user.name === name)
    },

    products(_,args){
      const {id,name} = args
      if(id){return product.find(product => product.id === id)}
      return product.find(product => product.price === price)
    },

    user(){
      return user
    },
    product(){
      return product
    },
  }
};

 const server = new ApolloServer({
   typeDefs,
   resolvers
 })

 server.listen() 