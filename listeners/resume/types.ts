import { Message } from 'listeners/message/types'

export interface ResumeDispatchPayload {
  token: string
  session_id: string
  seq: number
}

export type ResumePayload = Message<ResumeDispatchPayload>
