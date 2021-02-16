import { action } from 'typesafe-actions'
import ActionTypes from './actionTypes'

export const updateResumeToken = (token: string) =>
  action(ActionTypes.UPDATE_RESUME_TOKEN, { token })
