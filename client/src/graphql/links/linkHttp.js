import { createHttpLink } from 'apollo-link-http'

const { REACT_APP_API_BASE_URL } = process.env
const httpLink = createHttpLink({
  uri: `${REACT_APP_API_BASE_URL}/graphql`
})

export default httpLink
