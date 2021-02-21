import { createSelector } from 'reselect'
import { ApplicationState } from './types'

export const rootSelector = (state: ApplicationState) => state

export const usernameSelector = createSelector(
  rootSelector,
  (state) => state.username
)

export const resumeTokenSelector = createSelector(
  rootSelector,
  (state) => state.resumeToken
)

export const sequenceNumberSelector = createSelector(
  rootSelector,
  (state) => state.sequenceNumber
)

export const tokenSelector = createSelector(
  rootSelector,
  (state) => state.token
)

export const urlSelector = createSelector(rootSelector, (state) => state.url)

export const isCaptchaRequiredSelector = createSelector(
  rootSelector,
  (state) => state.isCaptchaRequired
)

export const channelIdSelector = createSelector(
  rootSelector,
  (state) => state.channelId
)

export const idSelector = createSelector(rootSelector, (state) => state.id)

export const owoChannelSelector = createSelector(
  rootSelector,
  (state) => state.owoChannelId
)

export const selectPreviousCaptcha = createSelector(
  rootSelector,
  (state) => state.previousCaptcha
)
