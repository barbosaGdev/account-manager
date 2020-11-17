import React, { useEffect } from 'react'
import BaseRoutes from './routes/BaseRoutes'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/react-hooks'
import apolloClient from './graphql/apolloClient'
import ApolloClientService from './services/ApolloClientService'


const App = () => {

    useEffect(() => {
        ApolloClientService.setApolloProvider(apolloClient)
    }, [])

    return (
        <ApolloProvider client={apolloClient}>
                <BrowserRouter>
                    <BaseRoutes />
                </BrowserRouter>
        </ApolloProvider>
    )
}

export default App
