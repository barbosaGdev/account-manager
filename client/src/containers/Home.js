import React, { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress'
import TableContainer from '@material-ui/core/TableContainer'
import { ativosQueries, passivosQueries } from '../graphql/queries'
import { useQuery } from '@apollo/react-hooks'
import {
    Table,
    TableCell,
    TableBody,
    TableRow,
    TableHead,
    Paper
} from '@material-ui/core'


const Home = () => {

    const { data: dataAtivos, loading: loadingAtivos } = useQuery(ativosQueries.GET_ATIVOS)

    const { data: dataPassivos, loading: loadingPassivos } = useQuery(passivosQueries.GET_PASSIVOS)



    return (
        <TableContainer>
            <Paper variant="outlined" style={{ height: '3em', alignItems: 'center', display: 'flex' }}>
                <Typography style={{marginLeft: '24px'}}>Ativos</Typography>
            </Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell>Valor</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {loadingAtivos ? <CircularProgress /> :

                        dataAtivos.listaAtivos.map(row => {
                            return (
                                <TableRow key={row.nome}>
                                    <TableCell>{row.nome}</TableCell>
                                    <TableCell>{row.valor}</TableCell>
                                </TableRow>
                            )
                        })

                    }
                </TableBody>
            </Table>




        </TableContainer >

    )
}

export default Home
