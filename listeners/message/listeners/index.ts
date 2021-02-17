import { connection } from 'websocket'
import MESSAGE_TYPE from 'constants/messageTypes'
import getTimerManagement from '@timer/management'
import { Message } from '../types'
//
import onReady from './ready'
import { useSelector } from 'utils/hooks'
import createHeartbeatListener from 'listeners/heartbeat'
import { usernameSelector } from 'core/store/selector'
import { TIME_TYPE } from 'timer/management/constants'
import huntEmDown from 'timer/management/features/hunt'
import messageCreate from './messageCreate'
import { getNaturalNumber } from 'utils'


const createMessageListener = (conn: connection) => (message: Message<any>) => {

  switch (message.t) {
    //
    case MESSAGE_TYPE.READY: {
      onReady(message)
      break
    }
    //
    case MESSAGE_TYPE.READY_SUPPLEMENTAL: {
      const username = useSelector(usernameSelector)
      console.log('Logged in as', username)
      // Timer Management init
      const timerManagement = getTimerManagement()
      // Initialize Time management
      timerManagement[TIME_TYPE.HEARTBEAT] = setInterval(
        createHeartbeatListener(conn),
        41250
      )
      timerManagement[TIME_TYPE.HUNT] = setInterval(
        huntEmDown,
        (11 + getNaturalNumber()) * 1000
      )
      break
    }
    //
    case MESSAGE_TYPE.MESSAGE_CREATE: {
      messageCreate(message)
      break
    }
    //
    default: {
      // console.log(message)
    }
    //
  }
}

export default createMessageListener
