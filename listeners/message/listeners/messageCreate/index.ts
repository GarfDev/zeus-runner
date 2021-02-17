import { updateCaptchaRequired } from 'core/store/actions'
import { usernameSelector } from 'core/store/selector'
import { Message } from 'listeners/message/types'
import { useDispatch, useSelector } from 'utils/hooks'
import { PayloadMessage } from './types'
import { checkCaptchaMessage, checkFromOwOBot } from './utils'

function messageCreate(message: Message<PayloadMessage>) {
  // Check if from self
  const currentUsername = useSelector(usernameSelector);
  if (message.d.author.username === currentUsername) return
  // Check if message from OwO Bot
  // console.log(message)
  const isFromOwOBot = checkFromOwOBot(message)
  if (!isFromOwOBot) return
  //   console.log(message.d.content)
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
