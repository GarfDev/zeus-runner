import { usernameSelector } from 'core/store/selector'
import { Message } from 'listeners/message/types'
import { getPrefix } from 'utils'
import { useSelector } from 'utils/hooks'
import {
  CAPTCHA,
  CAPTCHA_TYPES,
  CAPTCHA_TYPE_MAP,
  OWO_BOT_ID,
} from './constants'
import { PayloadMessage } from './types'

export function getCaptchaMessage() {
  return Object.values(CAPTCHA)
}

export function checkCaptchaByType(type: CAPTCHA[]) {
  return (captcha: CAPTCHA) => type.indexOf(captcha) > -1
}

export const checkImageCaptcha = checkCaptchaByType(
  CAPTCHA_TYPE_MAP[CAPTCHA_TYPES.IMAGE]
)

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
  const captchaMessages = getCaptchaMessage()

  const matchingCaptcha = captchaMessages.filter((captchaMessage) =>
    message.d.content.includes(captchaMessage)
  )
  if (!matchingCaptcha.length) return [false, CAPTCHA_TYPES.NONE]

  if (checkDirectMessage(message)) {
    if (checkImageCaptcha(matchingCaptcha[0])) {
      return [true, CAPTCHA_TYPES.IMAGE]
    } else if (checkLinkCaptcha(matchingCaptcha[0])) {
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
    if (checkImageCaptcha(matchingCaptcha[0])) {
      return [true, CAPTCHA_TYPES.IMAGE]
    } else if (checkLinkCaptcha(matchingCaptcha[0])) {
      return [true, CAPTCHA_TYPES.LINK]
    } else if (checkRetryCaptcha(matchingCaptcha[0])) {
      return [true, CAPTCHA_TYPES.RETRY]
    } else {
      return [false, CAPTCHA_TYPES.NONE]
    }
  }
}

export const checkIsCommand = (str: string) => {
  const prefix = getPrefix()
  if (!prefix) return false
  return str.startsWith(prefix)
}
