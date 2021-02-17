import OP_CODE from 'constants/op'
import { Message } from './types'

export const getRestoreChannelPayload = (channel_id: string): Message<any> => {
  return {
    op: OP_CODE.CREATE_CHANNEL,
    d: { channel_id: channel_id },
  }
}
