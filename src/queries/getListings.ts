import gql from "graphql-tag"

export const GRAPHQL = gql`
    query getListings($sequelizeString: String!) {
        getListings(sequelizeQueryString: $sequelizeString) {
            id
        }
    }
`
