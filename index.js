const { gql, ApolloServer } = require( "apollo-server");

/**
 * Sacalar Types
 * Int
 * Float
 * String
 * Boolean
 * ID
 */


const resolvers = {
    Query: {
        idade() {
            return 18;
        },
        salario() {
            return 3213.33
        },
        nome() {
            return 'Maycon'
        },
        ativo() {
            return false
        },
        id() {
            return 321333
        }
    }
};

const typeDefs = gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
    }
`;

const server = new ApolloServer({
    typeDefs, 
    resolvers
});

server.listen();