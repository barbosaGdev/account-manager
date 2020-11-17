import gql from 'graphql-tag'

export const GET_ATIVOS = gql`
    query {
        listaAtivos {
            nome
            valor
        }
    }
`