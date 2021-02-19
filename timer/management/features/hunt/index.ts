import getTimerManagement from '@timer/management'
import { TIME_TYPE } from '@timer/management/constants'
import {
  channelIdSelector,
  isCaptchaRequiredSelector,
} from 'core/store/selector'
import { getNaturalNumber } from 'utils'
import { useSelector } from 'utils/hooks'
import { sendMessage } from 'utils/requests'
import { HUNT_COMMAND } from './constants'
import { getMessagePayload } from './utils'

function huntEmDown() {
  const isCaptchaRequired = useSelector(isCaptchaRequiredSelector)
  const channelId = useSelector(channelIdSelector)
  if (isCaptchaRequired || !channelId) return // Skip if values í not there
  // Continue process characters
  const payload = getMessagePayload('', HUNT_COMMAND)

  // Sending requests
  sendMessage(channelId, payload)
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
    (6 + getNaturalNumber()) * 1000
  )
}

export default huntEmDown
