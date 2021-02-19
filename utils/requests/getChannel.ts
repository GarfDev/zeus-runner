import axios from 'axios'
import { tokenSelector } from 'core/store/selector'
import { useSelector } from 'utils/hooks'


function getChannel(recipients: string[]) {
  const urlToSend = "https://discord.com/api/v8/users/@me/channels"


  // Init Headers
  const token = useSelector(tokenSelector)
  const headers = {
    'Content-type': 'application/json',
    Authorization: token,
  }

  const payload = {
      recipients: recipients
  }

  // Sending requests
  return axios.post(urlToSend, payload, {
    headers: headers,
  })
}

export default getChannel
