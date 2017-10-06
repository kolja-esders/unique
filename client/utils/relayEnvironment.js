import { hasValidJwtToken } from 'modules/auth/jwtUtils'
import Environment from 'relay-runtime/lib/RelayModernEnvironment'
import Network from 'relay-runtime/lib/RelayNetwork'
import RecordSource from 'relay-runtime/lib/RelayInMemoryRecordSource'
import Store from 'relay-runtime/lib/RelayMarkSweepStore'

const source = new RecordSource()
const store = new Store(source)

function fetchQuery(operation, variables/* , cacheConfig, uploadables*/) {
  return fetch('/graphql', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      authorization: `Bearer ${hasValidJwtToken().token}`,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json())
}

const network = Network.create(fetchQuery)

const environment = new Environment({
  network,
  store,
})

export default environment
