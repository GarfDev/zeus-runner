import { HUNT_COMMAND } from './constants'
import { HuntPayload } from './types'

export const getHuntUrl = (channelId: string) =>
  `https://discord.com/api/v8/channels/${channelId}/messages`

export const getHuntPayload = (nonce: string): HuntPayload => ({
    nonce: nonce,
    content: HUNT_COMMAND,
    tss: false,
})
