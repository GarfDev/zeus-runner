import axios from 'axios'
import { tokenSelector } from 'core/store/selector'
import { useSelector } from 'utils/hooks'
import { getListNumber } from '..'

export const discordChannelURL = (channelId: string) =>
  `https://discord.com/api/v8/channels/${channelId}/messages`

function sendMessage(channelId: string, payload: any) {
  const urlToSend = discordChannelURL(channelId)
  const nonce = getListNumber(18).join('')

  //
  payload.nonce = nonce

  // Init Headers
  const token = useSelector(tokenSelector)
  const headers = {
    'Content-type': 'application/json',
    Authorization: token,
  }

  // Sending requests
  return axios.post(urlToSend, payload, {
    headers: headers,
  })
}

export default sendMessage
