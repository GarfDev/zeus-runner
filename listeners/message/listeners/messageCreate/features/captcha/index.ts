import { channelIdSelector, selectPreviousCaptcha } from 'core/store/selector'
import { Message } from 'listeners/message/types'
import { getURL } from 'utils'
import { useDispatch, useSelector } from 'utils/hooks'
import { sendMessage } from 'utils/requests'
import { CAPTCHA_TYPES } from '../../constants'
import { PayloadMessage } from '../../types'
import {
  updateCaptchaRequired,
  updatePreviousCaptcha,
} from 'core/store/actions'

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
        content: 'link ' + captchaLink + ` <@623918573449904150>`,
        tss: false,
      }
      dispatch(updatePreviousCaptcha(CAPTCHA_TYPES.LINK, captchaLink))
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
      dispatch(updatePreviousCaptcha(CAPTCHA_TYPES.IMAGE, attachments[0].url))
      sendMessage(channelId, payload)
        .then(() => {})
        .catch(() => {})
      break
    }
    //
    case CAPTCHA_TYPES.RETRY: {
      const channelId = useSelector(channelIdSelector)
      const previousCaptcha = useSelector(selectPreviousCaptcha)
      if (!previousCaptcha) return
      if (!channelId) return

      const payload = {
        content:
          `!captcha ${previousCaptcha.type} ` +
          previousCaptcha.link +
          ` <@623918573449904150>`,
        tss: false,
      }
      dispatch(
        updatePreviousCaptcha(previousCaptcha.type, previousCaptcha.link)
      )
      sendMessage(channelId, payload)
        .then(() => {})
        .catch(() => {})
    }
    //////////////////////////////
  }
}

export default captchaHandler
