import { getNaturalNumber } from 'utils'
import getTimerManagement from '.'
import { TIME_TYPE } from './constants'
import huntEmDown from './features/hunt'
import sellTheZoo from './features/sell'
import checkTheZoo from './features/zoo'

export const resetRunnerTimers = () => {
  const timerManagement = getTimerManagement()
  Object.keys(timerManagement).forEach((key) => {
    clearInterval(timerManagement[key])
  })
  // Hunt command
  timerManagement[TIME_TYPE.HUNT] = setInterval(
    huntEmDown,
    (11 + getNaturalNumber()) * 1000
  )
  // Zoo command
  timerManagement[TIME_TYPE.ZOO] = setInterval(
    checkTheZoo,
    (11 + getNaturalNumber()) * 5000
  )
  // Sell Command
  timerManagement[TIME_TYPE.SELL] = setInterval(
    sellTheZoo,
    (11 + getNaturalNumber()) * 50000
  )
}
