import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import linkHttp from './links/linkHttp'

let apolloHTTPClient = () => {
    return linkHttp
}

let client = new ApolloClient({
    link: apolloHTTPClient(),
    cache: new InMemoryCache()
})

export default client