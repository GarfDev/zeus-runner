import { usernameSelector } from 'core/store/selector'
import { Message } from 'listeners/message/types'
import { useSelector } from 'utils/hooks'
import { CAPTCHA_TYPES, OWO_BOT_ID } from './constants'
import { PayloadMessage } from './types'

export function getCaptchaMessage() {
  return Object.values(CAPTCHA_TYPES)
}

export function checkFromOwOBot(message: Message<PayloadMessage>) {
  return message.d.author.id === OWO_BOT_ID
}

export function checkDirectMessage(message: Message<PayloadMessage>) {
  return !message.d.guild_id
}

export function checkCaptchaMessage(message: Message<PayloadMessage>) {
  const captchaMessages = getCaptchaMessage()

  const matchingCaptcha = captchaMessages.filter((captchaMessage) =>
    message.d.content.includes(captchaMessage)
  )

  if (!matchingCaptcha.length) return false
  const captchaMessage = captchaMessages[0]

  if (checkDirectMessage(message)) {
    switch (captchaMessage) {
      //
      case CAPTCHA_TYPES.FIRST: {
        console.log('First type captcha')
        return true
      }
      //
      case CAPTCHA_TYPES.SEC: {
        console.log('Sec type captcha')
        return true
      }
      //
      case CAPTCHA_TYPES.THIRD: {
        console.log('Third type captcha')
        return true
      }
      //
      default: {
        return false
      }
    }
  } else {
    // When Captcha message is send in guild channel
    const username = useSelector(usernameSelector)
    if (!username) return
    const isForCurrentUser = message.d.content.includes(username)
    if (!isForCurrentUser) return
    switch (captchaMessages[0]) {
      //
      case CAPTCHA_TYPES.FIRST: {
        console.log('First type captcha')
        return true
      }
      //
      case CAPTCHA_TYPES.SEC: {
        console.log('Sec type captcha')
        return true
      }
      //
      case CAPTCHA_TYPES.THIRD: {
        console.log('Third type captcha')
        return true
      }
      //
      default: {
        return false
      }
    }
  }
}
