import { usernameSelector } from 'core/store/selector'
import { Message } from 'listeners/message/types'
import { useSelector } from 'utils/hooks'
import { PayloadMessage } from './types'
import {
  checkCaptchaMessage,
  checkFromOwOBot,
  checkIsCommand,
  checkOWOMessage,
} from './utils'
import commandHandler from './features/commands'
import captchaHandler from './features/captcha'
import { OWO_MESSAGE_TYPES } from './constants'
import moneyHandler from './features/money'

function messageCreate(message: Message<PayloadMessage>) {
  // Check if from self
  const currentUsername = useSelector(usernameSelector)
  if (message.d.author.username === currentUsername) return
  // Is a command
  const isACommand = checkIsCommand(message.d.content)
  if (isACommand) {
    return commandHandler(message)
  }
  // Check if message from OwO Bot
  const isFromOwOBot = checkFromOwOBot(message)
  if (!isFromOwOBot) return
  // Check if message is Captcha Required
  const [isCaptcha, captchaType] = checkCaptchaMessage(message)
  if (isCaptcha) return captchaHandler(message, captchaType)

  // Check if it is OwO Functional Message
  const owoMessageType = checkOWOMessage(message)
  if (owoMessageType) {
    switch (owoMessageType) {
      case OWO_MESSAGE_TYPES.MONEY: {
        return moneyHandler(message)
      }
    }
  }
}

export default messageCreate
