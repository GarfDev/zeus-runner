import { channelIdSelector } from 'core/store/selector'
import { Message } from 'listeners/message/types'
import { getURL } from 'utils'
import { useDispatch, useSelector } from 'utils/hooks'
import { sendMessage } from 'utils/requests'
import { CAPTCHA_TYPES } from '../../constants'
import { PayloadMessage } from '../../types'
import { updateCaptchaRequired } from 'core/store/actions'

function captchaHandler(
  message: Message<PayloadMessage>,
  captchaType: CAPTCHA_TYPES
) {
  const dispatch = useDispatch()
  dispatch(updateCaptchaRequired(true))

  console.log(message.d.content, captchaType)

  switch (captchaType) {
    case CAPTCHA_TYPES.LINK: {
      const parsedLinks = getURL(message.d.content)
      if (!parsedLinks?.length) return // Return if there no link
      const captchaLink = parsedLinks[0]
      const channelId = useSelector(channelIdSelector)
      if (!channelId) return

      const payload = {
        content: '!captcha link ' + captchaLink,
        tss: false,
      }
      sendMessage(channelId, payload)
        .then(() => {})
        .catch(() => {})
      break
    }
    case CAPTCHA_TYPES.IMAGE: {
      const attachments = message.d.attachments
      console.log(attachments)
      break
    }
  }
}

export default captchaHandler
