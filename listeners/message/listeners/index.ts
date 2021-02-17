import MESSAGE_TYPE from 'constants/messageTypes'
import { connection } from 'websocket'
import { Message } from '../types'
//
import createHeartbeatListener from 'listeners/heartbeat'
import onReady from './ready'
import { useSelector } from 'utils/hooks'
import { usernameSelector } from 'core/store/selector'
import messageCreate from './messageCreate'

const createMessageListener = (conn: connection) => (message: Message<any>) => {
  switch (message.t) {
    //
    case MESSAGE_TYPE.READY: {
      onReady(message)
      break;
    }
    //
    case MESSAGE_TYPE.READY_SUPPLEMENTAL: {
      const username = useSelector(usernameSelector);
      console.log('Logged in as', username)
      setInterval(createHeartbeatListener(conn), 41250)
      break;
    }
    //
    case MESSAGE_TYPE.MESSAGE_CREATE: {
      messageCreate(message);
      break;
    }
    //
  }
}

export default createMessageListener
