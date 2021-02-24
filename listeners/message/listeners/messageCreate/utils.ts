import { usernameSelector } from 'core/store/selector'
import { Message } from 'listeners/message/types'
import { getPrefix } from 'utils'
import { useSelector } from 'utils/hooks'
import {
  CAPTCHA,
  CAPTCHA_TYPES,
  CAPTCHA_TYPE_MAP,
  OWO_BOT_ID,
  OWO_MESSAGE_TYPES,
} from './constants'
import { PayloadMessage } from './types'

export function getCaptchaMessage() {
  return Object.values(CAPTCHA)
}

export function checkCaptchaByType(type: CAPTCHA[]) {
  return (captcha: CAPTCHA) => type.indexOf(captcha) > -1
}

export const checkImageCaptcha = (message: Message<PayloadMessage>) => {
  if (!message.d.attachments.length) return
  const isCaptchaImage = Array.from(
    message.d.attachments
  )[0]?.filename?.includes('captcha')
  return isCaptchaImage
}

export const checkLinkCaptcha = checkCaptchaByType(
  CAPTCHA_TYPE_MAP[CAPTCHA_TYPES.LINK]
)

export const checkRetryCaptcha = checkCaptchaByType(
  CAPTCHA_TYPE_MAP[CAPTCHA_TYPES.RETRY]
)

export function checkFromOwOBot(message: Message<PayloadMessage>) {
  return message.d.author.id === OWO_BOT_ID
}

export function checkDirectMessage(message: Message<PayloadMessage>) {
  return !message.d.guild_id
}

export function checkCaptchaMessage(
  message: Message<PayloadMessage>
): [boolean, CAPTCHA_TYPES] {
  // Then Check other case
  const captchaMessages = getCaptchaMessage()

  const matchingCaptcha = captchaMessages.filter((captchaMessage) =>
    message.d.content.includes(captchaMessage)
  )

  if (checkDirectMessage(message)) {
    if (checkImageCaptcha(message)) {
      return [true, CAPTCHA_TYPES.IMAGE]
    }
    // Guard for matching other case
    if (!matchingCaptcha.length) return [false, CAPTCHA_TYPES.NONE]
    // Check other cases
    if (checkLinkCaptcha(matchingCaptcha[0])) {
      return [true, CAPTCHA_TYPES.LINK]
    } else {
      return [false, CAPTCHA_TYPES.NONE]
    }
  } else {
    // When Captcha message is send in guild channel
    const username = useSelector(usernameSelector)
    if (!username) return [false, CAPTCHA_TYPES.NONE]
    const isForCurrentUser = message.d.content.includes(username)
    if (!isForCurrentUser) return [false, CAPTCHA_TYPES.NONE]
    
    if (checkImageCaptcha(message)) {
      return [true, CAPTCHA_TYPES.IMAGE]
    }
    // Guard for matching other case
    if (!matchingCaptcha.length) return [false, CAPTCHA_TYPES.NONE]
    // Check other cases
    if (checkLinkCaptcha(matchingCaptcha[0])) {
      return [true, CAPTCHA_TYPES.LINK]
    } else if (checkRetryCaptcha(matchingCaptcha[0])) {
      return [true, CAPTCHA_TYPES.RETRY]
    } else {
      return [false, CAPTCHA_TYPES.NONE]
    }
  }
}

export const includesCheck = (message: Message<PayloadMessage>, str: string) =>
  message.d.content.includes(str)

export const checkOWOMessage = (message: Message<PayloadMessage>) => {
  if (checkDirectMessage(message)) {
    switch (true) {
      default: {
        return undefined
      }
    }
  } else {
    const username = useSelector(usernameSelector)
    if (!username) return undefined
    const isForCurrentUser = message.d.content.includes(username)
    if (!isForCurrentUser) return undefined
    switch (true) {
      case includesCheck(message, OWO_MESSAGE_TYPES.MONEY): {
        return OWO_MESSAGE_TYPES.MONEY
      }
      //
      default: {
        return undefined
      }
    }
  }
}

export const checkIsCommand = (str: string) => {
  const prefix = getPrefix()
  if (!prefix) return false
  return str.startsWith(prefix)
}
