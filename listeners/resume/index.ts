import { connection } from 'websocket'
import { useSelector } from 'utils/hooks'
import {
  resumeTokenSelector,
  sequenceNumberSelector,
  tokenSelector,
} from 'core/store/selector'
import { getResumePayload } from './utils'

function createResumeListener(conn: connection) {
  return () => {
    const token = useSelector(tokenSelector)
    const resumeToken = useSelector(resumeTokenSelector)
    const sequenceNumber = useSelector(sequenceNumberSelector)

    if (!resumeToken || sequenceNumber === undefined) {
      console.log(
        'Cannot resume connection since there no previous session_id stored'
      )
    } else {
      console.log('Resuming from previous session..')
      const payload = getResumePayload(token, resumeToken, sequenceNumber)
      conn.send(JSON.stringify(payload))
    }
  }
}

export default createResumeListener
