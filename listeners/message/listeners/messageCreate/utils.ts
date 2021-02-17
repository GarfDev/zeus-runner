import { usernameSelector } from 'core/store/selector'
import { Message } from 'listeners/message/types'
import { useSelector } from 'utils/hooks'
import { OWO_BOT_ID } from './constants'
import { PayloadMessage } from './types'

export function getCaptchaMessage() {
  const username = useSelector(usernameSelector)
  return `**${username}**, please DM me with only the following word to check that you are a human!`
}

export function checkFromOwOBot(message: Message<PayloadMessage>) {
  return message.d.author.id === OWO_BOT_ID
}

export function checkCaptchaMessage(message: Message<PayloadMessage>) {
  return message.d.content.includes(getCaptchaMessage())
}
