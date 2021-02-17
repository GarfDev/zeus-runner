import { updateCaptchaRequired } from 'core/store/actions'
import { Message } from 'listeners/message/types'
import { useDispatch } from 'utils/hooks'
import { PayloadMessage } from './types'
import { checkCaptchaMessage, checkFromOwOBot } from './utils'

function messageCreate(message: Message<PayloadMessage>) {
  // Check if message from OwO Bot
  const isFromOwOBot = checkFromOwOBot(message)
  if (!isFromOwOBot) return
  // Check if message is Captcha Required
  const isCaptchaMessage = checkCaptchaMessage(message)
  if (isCaptchaMessage) {
    const dispatch = useDispatch()
    dispatch(updateCaptchaRequired(true))
    console.log('Captcha required')
    console.log(message.d.attachments)
  }
}

export default messageCreate
