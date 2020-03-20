import { createHttpLink } from 'apollo-link-http'
import { ApolloLink } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'

const httpLink = createHttpLink({
  uri: process.env.VUE_APP_GRAPHQL_SERVER
})

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  const token = localStorage.getItem('auth._token.local')
  operation.setContext({
    headers: {
      authorization: token ? `${token}` : null
    }
  })

  return forward(operation)
})

export default () => ({
  link: authMiddleware.concat(httpLink),
  cache: new InMemoryCache(),
  defaultHttpLink: false
})
