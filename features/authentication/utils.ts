import produce from 'immer'
import { initialAuthenticationParams } from './constants'

export const getInitialAuthenticationParams = (token: string) => {
  return produce(initialAuthenticationParams, nextParams => {
      nextParams.d.token = token
  })
}
