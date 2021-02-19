export const OWO_BOT_ID = '408785106942164992'

export enum CAPTCHA_TYPES {
  NONE = "NONE",
  IMAGE = 'IMAGE',
  LINK = 'LINK',
}

export enum CAPTCHA {
  FIRST = 'Please use the link below so I can check',
  SEC = 'Please reply with the following word so I can check',
  THIRD = 'please DM me with only the following word to check that you are a human',
  FOUR = 'Please complete your captcha to verify that you are human', // This will only available in GUILD CHANNELS
}

export const CAPTCHA_TYPE_MAP = {
  [CAPTCHA_TYPES.LINK]: [CAPTCHA.FIRST],
  [CAPTCHA_TYPES.IMAGE]: [CAPTCHA.SEC, CAPTCHA.THIRD],
}
