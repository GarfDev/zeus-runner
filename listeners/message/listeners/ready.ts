import { useDispatch } from 'utils/hooks'
import { updateResumeToken } from 'core/store/actions'
import { Message } from '../types'

function onReady(message: Message<any>) {
  const dispatch = useDispatch()
  dispatch(updateResumeToken(message.d.session_id))
}

export default onReady;