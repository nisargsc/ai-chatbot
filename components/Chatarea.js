import Botmsg from "./Botmsg";
import Usermsg from "./Usermsg";

export default function Chatarea(props) {
    return(
        <div id="chatarea" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            <Usermsg msg= "Hi I'm User!!" />
            <Botmsg msg="Hello User!!" />
            <Botmsg msg="How can I help you?" />
            <Usermsg msg="Where can I eat?" />
            <Botmsg msg="Mess, Yummpies or Hotspot" />
            <Botmsg msg="Anything else?" />
            <Usermsg msg="No, Thank you!!" />
            <Botmsg msg= "Thank you!!" />
        </div>
    );
}
