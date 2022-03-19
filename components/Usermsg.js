export default function Usermsg(props) {
    return (
        <div className="user-message">
            <div className="flex items-end justify-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                    <span className="px-4 py-2 rounded-lg inline-block bg-sky-700 text-white ">
                        {props.msg}
                    </span>
                </div>
            </div>
        </div>
    );
}
