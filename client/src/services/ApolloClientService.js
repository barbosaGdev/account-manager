let _client
function setApolloProvider(client) {
  _client = client
}
function clearCache() {
  _client.clearStore()
}
export default {
  setApolloProvider,
  clearCache
}