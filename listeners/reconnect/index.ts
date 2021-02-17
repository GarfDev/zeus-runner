import { getClient } from 'core/client'

function createReconnectListener(url: string) {
  return () => {
    console.log('Closed, reconnecting..')
    const client = getClient()
    client.connect(url)
  }
}

export default createReconnectListener;