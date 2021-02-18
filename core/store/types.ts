import * as actions from './actions'
import { ActionType } from 'typesafe-actions'

export type ApplicationActions = ActionType<typeof actions>

export interface ApplicationState {
  url: string
  token: string
  resumeToken?: string
  sequenceNumber?: number
  // Client State
  id?: string;
  username?: string
  isCaptchaRequired: boolean;
  channelId?: string;
}
