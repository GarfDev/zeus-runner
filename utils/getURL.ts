function getURL(str: string) {
  const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g
  return str.match(urlRegex)
}

export default getURL
