import * as actions from './actions'
import { ActionType } from 'typesafe-actions'
import { CAPTCHA_TYPES } from 'listeners/message/listeners/messageCreate/constants'

export type ApplicationActions = ActionType<typeof actions>

export interface PreviousCaptcha {
  type: CAPTCHA_TYPES
  link: string
}
export interface ApplicationState {
  url: string
  token: string
  resumeToken?: string
  sequenceNumber?: number
  // Client State
  id?: string
  username?: string
  owoChannelId?: string
  isCaptchaRequired: boolean
  previousCaptcha?: PreviousCaptcha
  channelId?: string
}
