import React from 'react'
import Typography from '@material-ui/core/Typography'
import { ativosQueries } from '../graphql/queries'
import { useQuery } from '@apollo/react-hooks'

const Home = () => {

    const { data, loading } = useQuery(ativosQueries.GET_ATIVOS)


    return (
        <div>
            {(data || {}).listaAtivos.map(row => (
                <><Typography>{row.nome}</Typography>
                    <Typography>{row.valor}</Typography>
                </>
            ))}

        </div>

    )
}

export default Home
