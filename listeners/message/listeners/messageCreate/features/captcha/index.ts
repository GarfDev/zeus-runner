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
  //////////////////////////////
  switch (captchaType) {
    //////////////////////////////
    case CAPTCHA_TYPES.LINK: {
      const parsedLinks = getURL(message.d.content)
      if (!parsedLinks?.length) return // Return if there no link
      const captchaLink = parsedLinks[0]
      const channelId = useSelector(channelIdSelector)
      if (!channelId) return
      const payload = {
        content: '!captcha link ' + captchaLink + ` <@623918573449904150>`,
        tss: false,
      }
      sendMessage(channelId, payload)
        .then(() => {})
        .catch(() => {})
      break
    }
    //////////////////////////////
    case CAPTCHA_TYPES.IMAGE: {
      const attachments = message.d.attachments as any[]
      const channelId = useSelector(channelIdSelector)
      if (!(channelId && attachments)) return
      const payload = {
        content:
          '!captcha image ' + attachments[0].url + ` <@623918573449904150>`,
        tss: false,
      }
      sendMessage(channelId, payload)
        .then(() => {})
        .catch(() => {})
      break
    }
    //////////////////////////////
  }
}

export default captchaHandler
