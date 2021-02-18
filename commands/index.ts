import { updateCaptchaRequired, updateChannelId } from 'core/store/actions'
import { PayloadMessage } from 'listeners/message/listeners/messageCreate/types'
import { Message } from 'listeners/message/types'
import { getPrefix } from 'utils'
import { useDispatch } from 'utils/hooks'
import { COMMANDS } from './constants'

const commandHandler = (message: Message<PayloadMessage>) => {
  const prefix = getPrefix()
  if (!prefix) return

  const removedPrefixCommand = message.d.content.replace(prefix, '')

  switch (removedPrefixCommand) {
    case COMMANDS.START: {
      const dispatch = useDispatch()
      if (!message.d.guild_id) return
      dispatch(updateChannelId(message.d.channel_id))
      dispatch(updateCaptchaRequired(false))
    }
  }
}

export default commandHandler
