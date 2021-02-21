// import YAML from 'yaml'
// import { readFile } from 'utils/files'
// import { CONFIG_FILENAME } from './constants'
import { Config } from './types'

function getConfig(): Config {
  // const configBuffer = readFile(`${process.pid}_${CONFIG_FILENAME}`)
  // if (!YAML.parse(configBuffer.toString())) return {}
  // if (YAML.parse(configBuffer.toString()).length) return {}
  // return YAML.parse(configBuffer.toString()) as Config
  return {}
}

export default getConfig
