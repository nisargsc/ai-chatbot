import Tittle from "./Tittle";
import Inputform from "./Inputform";
import Chatarea from "./Chatarea";

export default function Chatbot(props)  {
    // console.log("in chatbot ", props.convo)
    return (
        <div className="flex-1 max-w-[90vh] max-h-[90vh]  rounded-lg shadow-lg justify-between flex flex-col h-screen bg-slate-200">
            <Tittle />

            <Chatarea convo={props.convo}/>

            <Inputform />
        </div>  
    );
}
