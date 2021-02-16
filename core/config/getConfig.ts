import YAML from 'yaml';
import { readFile } from 'utils/files';
import { CONFIG_FILENAME } from './constants';
import { Config } from './types';

function getConfig(): Config {
    const configBuffer = readFile(CONFIG_FILENAME)

    return YAML.parse(configBuffer.toString()) as Config
}

export default getConfig;