/* eslint-disable @typescript-eslint/no-empty-function */
import {
  updateCaptchaRequired,
  updateChannelId,
  updateOwOChannelId,
} from 'core/store/actions'
import { owoChannelSelector, usernameSelector } from 'core/store/selector'
import { PayloadMessage } from 'listeners/message/listeners/messageCreate/types'
import { Message } from 'listeners/message/types'
import { getPrefix } from 'utils'
import { useDispatch, useSelector } from 'utils/hooks'
import { getChannel, sendMessage } from 'utils/requests'
import { OWO_BOT_ID } from '../../constants'
import { COMMANDS } from './constants'

const commandHandler = async (message: Message<PayloadMessage>) => {
  const prefix = getPrefix()
  if (!prefix) return

  const removedPrefixCommand = message.d.content.replace(prefix, '').split(' ')

  const commandString = removedPrefixCommand[0]
  removedPrefixCommand.shift()
  const params = removedPrefixCommand

  if (!params) return
  switch (commandString) {
    case COMMANDS.START: {
      const username = useSelector(usernameSelector)
      const dispatch = useDispatch()
      if (!message.d.guild_id) return
      dispatch(updateChannelId(message.d.channel_id))
      dispatch(updateCaptchaRequired(false))
      console.log(username, 'start working on channel', message.d.channel_id)
      break
    }
    case COMMANDS.SOLVE: {
      let owoChannelId = useSelector(owoChannelSelector)
      if (!owoChannelId) {
        const channel = await getChannel([OWO_BOT_ID]).catch(() => {})
        if (!channel) return
        const dispatch = useDispatch()
        dispatch(updateOwOChannelId(channel.data.id))
        owoChannelId = channel.data.id
      }
      //
      await sendMessage(owoChannelId || '', {
        content: params[0],
      }).catch(() => {})
      break
    }
    case COMMANDS.RUN: {
      await sendMessage(message.d.channel_id || '', {
        content: params.join(' '),
      }).catch(() => {})
      break
    }
  }
}

export default commandHandler
