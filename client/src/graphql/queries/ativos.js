import gql from 'graphql-tag'

export const GET_ATIVOS = gql`
    query listaAtivos {
        listaAtivos {
            nome
            valor
        }
    }
`

