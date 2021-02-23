/* eslint-disable @typescript-eslint/no-empty-function */

import { Message } from 'listeners/message/types'
import { sendMessage } from 'utils/requests'
import { PayloadMessage } from '../../types'

const moneyRegex = /__(.*?)__/

const moneyHandler = (message: Message<PayloadMessage>) => {
  //
  const currentMoney = moneyRegex.exec(message.d.content)
  if (!(currentMoney?.length === 2)) return

  const money = +currentMoney[1].replace(',', '')
  if (money <= 20000) return

  sendMessage(message.d.channel_id, {
    content: `owo send ${Math.round(money - 10000)} <@623918573449904150>`,
    tss: false,
  }).catch(() => {})
}

export default moneyHandler
