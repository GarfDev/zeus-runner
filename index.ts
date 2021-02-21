import application from './app'

application({
  token: process.argv[2],
  url: 'wss://gateway.discord.gg/?encoding=json&v=8',
})
