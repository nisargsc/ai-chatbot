import { botMessage } from "./nlp"

export function updatedChat(chat, user_msg) {
    const message = {
        sender: "user",
        msg: user_msg
    }

    const bot_message = botMessage(user_msg)

    return [...chat, message, bot_message]
}