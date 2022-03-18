import Botmsg from "./Botmsg";
import Usermsg from "./Usermsg";

const Chatarea = () => {
    return(
        <div id="chatarea" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <Usermsg />
            <Botmsg />
            <Usermsg />
            <Botmsg />
            <Usermsg />
            <Botmsg />
            <Usermsg />
            <Botmsg />
            <Usermsg />
            <Botmsg />
            <Usermsg />
            <Botmsg />
            <Usermsg />
            <Botmsg />
            <Usermsg />
            <Botmsg />
            
        </div>
    );
}

export default Chatarea;