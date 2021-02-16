import { connection } from "websocket";

interface ConnectListenerCreateProps {
    token: string;
}

function createConnectListener({token}: ConnectListenerCreateProps) {

    return (conn: connection) => {}
}