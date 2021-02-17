import MESSAGE_TYPE from 'constants/messageTypes'
import { connection } from 'websocket'
import { Message } from '../types'
//
import createHeartbeatListener from 'listeners/heartbeat'
import onReady from './ready'

const createMessageListener = (conn: connection) => (message: Message<any>) => {
  switch (message.t) {
    //
    case MESSAGE_TYPE.READY: {
      onReady(message)
      break;
    }
    //
    case MESSAGE_TYPE.READY_SUPPLEMENTAL: {
      // console.log('Logged in as')
      setInterval(createHeartbeatListener(conn), 41250)
    }
    //
  }
}

export default createMessageListener
