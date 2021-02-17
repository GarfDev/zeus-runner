import { getClient } from 'core/client'
import getTimerManagement from '@timer/management'

function createReconnectListener(url: string) {
  return () => {
    const timerManagement = getTimerManagement()

    // Clear all timer running
    Object.keys(timerManagement).forEach((key) => {
      clearTimeout(timerManagement[key])
    })

    console.log('Closed, reconnecting..')
    const client = getClient()
    client.connect(url)
  }
}

export default createReconnectListener
