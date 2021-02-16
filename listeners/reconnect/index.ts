import { getClient } from 'core/client'

function createReconnectListener(url: string) {
  return () => {
    const client = getClient()
    client.connect(url)
  }
}

export default createReconnectListener;