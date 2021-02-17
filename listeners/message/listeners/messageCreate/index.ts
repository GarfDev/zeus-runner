import { Message } from "listeners/message/types";
import { PayloadMessage } from "./types";

function messageCreate(message: Message<PayloadMessage>) {
    console.log(message)
}

export default messageCreate;