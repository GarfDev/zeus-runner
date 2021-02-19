import { action } from 'typesafe-actions'
import ActionTypes from './actionTypes'

export const updateResumeToken = (token?: string) =>
  action(ActionTypes.UPDATE_RESUME_TOKEN, { token })

export const updateId = (id: string) => action(ActionTypes.UPDATE_ID, { id })

export const updateUsername = (username: string) =>
  action(ActionTypes.UPDATE_USERNAME, { username })

export const updateSequenceNumber = (sequence: number) =>
  action(ActionTypes.UPDATE_SEQUENCE_NUMBER, { sequence })

export const updateToken = (token: string) =>
  action(ActionTypes.UPDATE_TOKEN, { token })

export const updateUrl = (url: string) =>
  action(ActionTypes.UPDATE_URL, { url })

export const updateCaptchaRequired = (required: boolean) =>
  action(ActionTypes.UPDATE_CAPTCHA_REQUIRED, { required })

export const updateChannelId = (channelId: string) =>
  action(ActionTypes.UPDATE_CHANNEL_ID, { channelId })

export const updateOwOChannelId = (id: string) =>
  action(ActionTypes.UPDATE_OWO_CHANNEL_ID, { id })
