import Tittle from "./Tittle";
import Inputform from "./Inputform";
import Chatarea from "./Chatarea";

let convo = [
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
            msg: "Meggie everwhere!! xD"
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


export default function Chatbot(props) {
    return (
        <div className="flex-1 max-w-[90vh] max-h-[90vh]  rounded-lg shadow-lg justify-between flex flex-col h-screen bg-slate-200">
            <Tittle />

            <Chatarea convo={convo}/>

            <Inputform />
        </div>  
    );
}
