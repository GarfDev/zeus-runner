import OP_CODE from "constants/op";
import { AuthenticationParams } from "./types";

export const initialAuthenticationParams: AuthenticationParams = {
    op: OP_CODE.IDENTIFY,
    d: {
      token: "",
      intents: 13824,
      capabilities: 61,
      properties: {
        os: "Mac OS X",
        browser: "Chrome",
        device: "",
        system_locale: "en-US",
        browser_user_agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.16; rv:86.0) Gecko/20100101 Firefox/86.0",
        browser_version: "86.0",
        os_version: "10.16",
        referrer: "",
        referring_domain: "",
        referrer_current: "",
        referring_domain_current: "",
        release_channel: "stable",
        client_build_number: 76771,
        client_event_source: null
      },
      presence: {
        status: "online",
        since: 0,
        activities: [],
        afk: false
      },
      compress: false,
      client_state: {
        guild_hashes: {},
        highest_last_message_id: "0",
        read_state_version: 0,
        user_guild_settings_version: -1
      }
    }
  }