const { gql, ApolloServer } = require( "apollo-server");

/**
 * Sacalar Types
 * Int
 * Float
 * String
 * Boolean
 * ID
 */

const typeDefs = gql`
    type Query {
        idade: Int
        salario: Float
        nome: String
        ativo: Boolean
        id: ID
        tecnologias: [String!]!
    }
`;

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
        },
        tecnologias() {
            return ['GraphQL', 'ReactJS', 'CSS']
        }
    }
};

const server = new ApolloServer({
    typeDefs, 
    resolvers
});

server.listen();