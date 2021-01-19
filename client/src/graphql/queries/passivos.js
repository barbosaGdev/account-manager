import gql from 'graphql-tag'


export const GET_PASSIVOS = gql`
    query listaPassivos {
        listaPassivos {
            nome
            valor
        }
    }
`