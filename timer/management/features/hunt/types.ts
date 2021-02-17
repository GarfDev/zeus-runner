export interface HuntPayload {
  content: string
  nonce: string
  tss: boolean
}

export interface HuntHeaderPayload {
  Authorization: string
  'Content-type': string
}
