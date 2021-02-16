import MESSAGE_TYPE from 'constants/messageTypes'
import { Message } from '../types'
//
import onReady from './ready'

function messageListener(message: Message<any>) {
  switch (message.t) {
    //
    case MESSAGE_TYPE.READY: {
      onReady(message)
      break;
    }
    //
  }
}

export default messageListener
