import axios from 'axios'
import { tokenSelector } from 'core/store/selector'
import { useSelector } from 'utils/hooks'

export const discordInviteLink = (inviteCode: string) =>
  `https://discord.com/api/v8/invites/${inviteCode}?inputValue=https://discord.gg/${inviteCode}&with_counts=true
  `

function joinFarm(inviteCode: string) {
  const urlToSend = discordInviteLink(inviteCode)
  // Init Headers
  const token = useSelector(tokenSelector)
  const headers = {
    'Content-type': 'application/json',
    Authorization: token,
  }

  // Sending requests
  return axios.get(urlToSend, {
    headers: headers,
  })
}

export default joinFarm
