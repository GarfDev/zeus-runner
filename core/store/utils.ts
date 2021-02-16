import { getConfig } from 'core/config'
import { ApplicationState } from './types'

export const getInitialState = (): ApplicationState => {
  const yamlConfig = getConfig()
  return {
    username: undefined,
    resumeToken: yamlConfig.RESUME_TOKEN,
    sequenceNumber: yamlConfig.SEQUENCE_NUMBER,
    token: '',
    url: '',
  }
}
