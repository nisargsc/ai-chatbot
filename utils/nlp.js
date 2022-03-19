export function botMessage(user_msg){
    let bot_msg = "Hi, I'm Bot!!"

    const message = {
        sender: "bot",
        msg: bot_msg
    }
    return message
}