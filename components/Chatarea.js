import Msg from "./Msg";

export default function Chatarea(props) {
    // console.log(props.convo)
    return(
        <div id="chatarea" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                { props.convo.map((m) => <Msg sender={m["sender"]} msg= {m["msg"]}/>) }        
        </div>
    );
}
