import { connection } from 'websocket'
import { getClient } from 'core/client'
// Features
import createMessageListener from 'listeners/message'
import createReconnectListener from 'listeners/reconnect'
import createResumeListener from 'listeners/resume'
import { useSelector } from 'utils/hooks'
import { urlSelector } from 'core/store/selector'

const onConnect = (conn: connection) => {
  const url = useSelector(urlSelector)

  conn.on('message', createMessageListener(conn))
  conn.on('resume', createResumeListener(conn))
  conn.on('close', createReconnectListener(url))
}

export default onConnect
