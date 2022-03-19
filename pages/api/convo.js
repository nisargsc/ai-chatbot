export default function handler(req,res) {
    const convo = [
        {
            sender: "user",
            msg: "Hi, I'm User!!"
        },
        {
            sender: "bot",
            msg: "Hello User!!"
        },
        {
            sender: "user",
            msg: "Where can I eat?"
        },
        {
            sender: "bot",
            msg: "Mess, Hotspot, Yummpies"
        },
        {
            sender: "user",
            msg: "What can I eat there?"
        },
        {
            sender: "bot",
            msg: "Meggie everywhere!! xD"
        },
        {
            sender: "user",
            msg: "OK, Thank you!!"
        },
        {
            sender: "bot",
            msg: "Thank you!!"
        }
    ]

    const json_res = {
        convo : convo
    }

    res.status(200).json( json_res )
    
}