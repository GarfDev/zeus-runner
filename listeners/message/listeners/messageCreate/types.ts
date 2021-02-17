export interface PayloadMessage {
    type: number,
    tts: boolean,
    timestamp: string,
    referenced_message: string | null,
    pinned: boolean,
    nonce: string,
    mentions: string[],
    mention_roles: string[],
    mention_everyone: boolean,
    member: {
      roles: [],
      mute: boolean,
      joined_at: string,
      hoisted_role: string | null,
      deaf: boolean
    },
    id: string,
    flags: number,
    embeds: any[],
    edited_timestamp: string | null,
    content: string,
    channel_id: string,
    author: {
      username: string,
      public_flags: number,
      id: string,
      discriminator: string,
      avatar: string
    },
    attachments: [],
    guild_id?: string
}