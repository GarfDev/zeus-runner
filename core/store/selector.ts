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
