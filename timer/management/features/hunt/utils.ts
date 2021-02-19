import { HuntPayload } from './types'

export const getHuntUrl = (channelId: string) =>
  `https://discord.com/api/v8/channels/${channelId}/messages`

export const getMessagePayload = (
  nonce: string,
  content: string
): HuntPayload => ({
  nonce: nonce,
  content: content,
  tss: false,
})
