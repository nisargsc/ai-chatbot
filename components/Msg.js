import Botmsg from "./Botmsg";
import Usermsg from "./Usermsg";

export default function Msg(props) {
    let { sender, msg } = props
    console.log(sender+":"+msg)
    return(
        <>
            { (sender=="user")? <Usermsg msg={msg} /> : <Botmsg msg={msg} /> }
        </>
    )
}