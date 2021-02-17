import { connection, IMessage } from 'websocket'
import simdjson from 'simdjson'
import { Message } from './types'
import OP_CODE from 'constants/op'
import { getInitialAuthenticationParams } from 'features/authentication'
import { useDispatch, useSelector } from 'utils/hooks'
import { resumeTokenSelector, tokenSelector } from 'core/store/selector'
import { updateResumeToken, updateSequenceNumber } from 'core/store/actions'
import messageListener from './listeners'

const createMessageListener = (conn: connection) => (message: IMessage) => {
  if (!message.utf8Data) return
  const data: Message<any> = simdjson.parse(message.utf8Data)

  //
  switch (data.op) {
    //
    case OP_CODE.HELLO: {
      const resumeToken = useSelector(resumeTokenSelector)
      if (resumeToken) break
      const token = useSelector(tokenSelector)
      const authenticationPayload = getInitialAuthenticationParams(token)
      conn.send(JSON.stringify(authenticationPayload))
      console.log('Authentication Message Sent with token', token)
      break
    }
    //
    case OP_CODE.DISPATCH: {
      messageListener(conn)(data)
      break
    }
    //
    case OP_CODE.INVALID_SESSION: {
      const dispatch = useDispatch()
      console.log('Failed to restore session from previous session_id')
      dispatch(updateResumeToken(undefined))
      //
      setTimeout(() => {
        const token = useSelector(tokenSelector)
        const authenticationPayload = getInitialAuthenticationParams(token)
        conn.send(JSON.stringify(authenticationPayload))
        console.log('Re-authentication Message Sent with token', token)
      }, 200)
      break
    }
    //

  }

  // Debug message
  // console.log(data)

  // Update Sequence Number
  if (data.s) {
    const dispatch = useDispatch()
    dispatch(updateSequenceNumber(data.s))
  }
}

export default createMessageListener
