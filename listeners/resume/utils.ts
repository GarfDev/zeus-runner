import OP_CODE from 'constants/op'
import { ResumePayload } from './types'

export const getResumePayload = (
  token: string,
  resumeToken: string,
  seq: number
): ResumePayload => ({
  op: OP_CODE.IDENTIFY,
  d: {
    token: token,
    session_id: resumeToken,
    seq: seq,
  },
})
