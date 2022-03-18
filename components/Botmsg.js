const Botmsg = () => {
    return (
        <div className="bot-message">
            <div className="flex items-end">
                <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                    <span className="px-4 py-2 rounded-lg inline-block bg-gray-300 text-gray-600">
                        This is a message from bot
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Botmsg;