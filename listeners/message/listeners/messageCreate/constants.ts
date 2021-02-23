export const OWO_BOT_ID = '408785106942164992'

export enum CAPTCHA_TYPES {
  NONE = 'NONE',
  RETRY = 'RETRY',
  IMAGE = 'IMAGE',
  LINK = 'LINK',
}

export enum CAPTCHA {
  FIRST = 'Please use the link below so I can check',
  SEC = 'Please DM me with only the following',
  THIRD = 'Please complete your captcha to verify that you are human', // This will only available in GUILD CHANNELS
}

export const CAPTCHA_TYPE_MAP = {
  [CAPTCHA_TYPES.LINK]: [CAPTCHA.FIRST],
  [CAPTCHA_TYPES.IMAGE]: [CAPTCHA.SEC],
  [CAPTCHA_TYPES.RETRY]: [CAPTCHA.THIRD],
}

export enum OWO_MESSAGE_TYPES {
  NONE = 'NONE',
  MONEY = 'you currently have',
}