import { useDispatch } from 'utils/hooks'
import { updateResumeToken } from 'core/store/actions'
import { Message } from '../types'

function onSessionReplace(message: Message<any>) {
  const dispatch = useDispatch()
  console.log(message)
  dispatch(updateResumeToken(message.d[1].session_id))
}

export default onSessionReplace
