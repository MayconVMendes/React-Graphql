const { gql, ApolloServer } = require( "apollo-server");

/**
 * =>Schema
 * =>Schema Difinition Language ou linguagem de Definição de Esquema
 * =>SDL
 */

const produtos = [
    {
        id: 10,
        nome: 'Intel i9',
        valor: 5000.99
    },
    {
        id: 11,
        nome: 'Teclado ',
        valor: 50.99
    }
]

const usuarios = [
    {
        id: 1,
        nome: 'Maycon',
        salario: 1500.69,
        ativo: true,
        idade: 19
    },
    {
        id: 2,
        nome: 'Jailton',
        salario: 3500.69,
        ativo: true,
        idade: 40
    }
]

const typeDefs = gql`

    type Produto {
        id: ID
        nome: String
        valor: Float
    }

    type Usuario {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
    }
`;

const resolvers = {
    Query: {
        usuarios() {
            return usuarios
        },
        produtos() {
            return produtos
        }
    }
};

const server = new ApolloServer({
    typeDefs, 
    resolvers
});

server.listen();