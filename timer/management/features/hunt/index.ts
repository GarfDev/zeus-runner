import axios from 'axios'
import {
  channelIdSelector,
  isCaptchaRequiredSelector,
  tokenSelector,
} from 'core/store/selector'
import { getListNumber } from 'utils'
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
}

export default huntEmDown
