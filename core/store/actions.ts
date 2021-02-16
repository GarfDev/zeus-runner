import { action } from 'typesafe-actions'
import ActionTypes from './actionTypes'

export const updateResumeToken = (token: string) =>
  action(ActionTypes.UPDATE_RESUME_TOKEN, { token })

export const updateUsername = (username: string) =>
  action(ActionTypes.UPDATE_USERNAME, { username })

export const updateSequenceNumber = (sequence: number) =>
  action(ActionTypes.UPDATE_SEQUENCE_NUMBER, { sequence })

export const updateToken = (token: string) =>
  action(ActionTypes.UPDATE_TOKEN, { token })

export const updateUrl = (url: string) =>
  action(ActionTypes.UPDATE_URL, { url })
