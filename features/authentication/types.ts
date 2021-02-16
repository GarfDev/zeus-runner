import OP_CODE from "constants/op";

export interface UserSystemMetadata {
    os: string;
    browser: string;
    device: string;
    system_locale: string;
    browser_user_agent: string;
    browser_version: string;
    os_version: string;
    referrer: string;
    referring_domain: string;
    referrer_current: string;
    referring_domain_current: string;
    release_channel: string;
    client_build_number: number;
    client_event_source: any
}

export interface ClientPresence {
    status: string;
    since: number;
    activities: string[];
    afk: boolean;
}

export interface ClientState {
    guild_hashes: any;
    highest_last_message_id: string;
    read_state_version: number;
    user_guild_settings_version: number;
}

export interface AuthenticationParams {
    op: OP_CODE;
    d: {
      token: string;
      intents: number;
      capabilities: number;
      properties: UserSystemMetadata;
      presence: ClientPresence;
      compress: boolean;
      client_state: ClientState
    }
  }