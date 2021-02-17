import { connection } from 'websocket'

function createHeartbeatListener(conn: connection) {
  return () => {
    conn.send(`{"op":1,"d":12}`)
  }
}

export default createHeartbeatListener;