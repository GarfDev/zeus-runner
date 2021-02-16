import YAML from "yaml";
import { writeFile } from "utils/files";
import { CONFIG_FILENAME } from "./constants";
import { Config } from "./types";
import { getConfig } from ".";

function writeConfig(config: Config) {
  const previousConfig = getConfig();
  const yamlConfig = YAML.stringify({ ...previousConfig, ...config });
  writeFile(CONFIG_FILENAME, yamlConfig);
}

export default writeConfig;
