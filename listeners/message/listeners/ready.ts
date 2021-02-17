import { useDispatch } from 'utils/hooks'
import { updateResumeToken, updateUsername } from 'core/store/actions'
import { Message } from '../types'

function onReady(message: Message<any>) {
  const dispatch = useDispatch()
  // Update Resume token
  dispatch(updateResumeToken(message.d.session_id))
  // Update username
  dispatch(updateUsername(message.d.user.username))
}

export default onReady
