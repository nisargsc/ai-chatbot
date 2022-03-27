import Tittle from "./tittle";
import Inputform from "./inputform";
import Chatarea from "./chatarea";

export default function Chatbot()  {
    return (
        <div className="flex-1 max-w-[90vh] max-h-[90vh]  rounded-lg shadow-lg justify-between flex flex-col h-screen bg-slate-200">
            <Tittle />

            <Chatarea />

            <Inputform />
            
        </div>  
    );
}
