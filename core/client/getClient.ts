import Websocket from 'websocket';

function createClient() {
    let client: Websocket.client | undefined = undefined

    return (config?: Websocket.IClientConfig) => {
        if (!client) {
            client = new Websocket.client(config)
        }
        return client
    }
}

export default createClient();