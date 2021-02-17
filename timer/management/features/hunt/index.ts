import getTimerManagement from '@timer/management'
import { TIME_TYPE } from '@timer/management/constants'
import axios from 'axios'
import {
  channelIdSelector,
  isCaptchaRequiredSelector,
  tokenSelector,
} from 'core/store/selector'
import { getListNumber, getNaturalNumber } from 'utils'
import { useSelector } from 'utils/hooks'
import { HuntHeaderPayload } from './types'
import { getHuntPayload, getHuntUrl } from './utils'

function huntEmDown() {
  const isCaptchaRequired = useSelector(isCaptchaRequiredSelector)
  const channelId = useSelector(channelIdSelector)
  if (isCaptchaRequired || !channelId) return // Skip if values í not there
  // Continue process characters
  const urlToSend = getHuntUrl(channelId)
  const nonce = getListNumber(18).join('')
  const payload = getHuntPayload(nonce)

  // Init Headers
  const token = useSelector(tokenSelector)
  const headers: HuntHeaderPayload = {
    'Content-type': 'application/json',
    Authorization: token,
  }

  // Sending requests
  axios
    .post(urlToSend, payload, {
      headers: headers,
    })
    .then(() => {})
    .catch(() => {})

  // Re-initialize interval
  // Can change to setTimeout, but use
  // Interval for faster clear out state
  const timerManagement = getTimerManagement()
  clearInterval(timerManagement[TIME_TYPE.HUNT]) // Remove old Interval
  timerManagement[TIME_TYPE.HUNT] = setInterval(
    // Add new Interval
    huntEmDown,
    (11 + getNaturalNumber()) * 1000
  )
}

export default huntEmDown
