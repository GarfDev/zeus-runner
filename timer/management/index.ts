import { TimerManagementState } from './types'

function createTimerManagement() {
  const timerManagementState: TimerManagementState = {}
  return () => timerManagementState
}

const getTimerManagement = createTimerManagement()

export default getTimerManagement
