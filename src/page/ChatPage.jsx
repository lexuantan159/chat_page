import {useState} from "react";
import {IoSend} from "react-icons/io5";
import ChatMessage from "../components/message/ChatMessage";
import UserMessage from "../components/message/UserMessage";

const ChatPage = () => {

    const [countChar , setCountChar] = useState(0);
    const [value , setValue] = useState("");

    const handleChange = (e) => {
        setCountChar(e.target.value.length);
        setValue(e.target.value);
    }

    return (
        <div id="form_chat" className="h-full w-[90%] mx-auto">
            <div className="max-h-[650px] overflow-y-scroll no-scrollbar">
                <ChatMessage/>
                <UserMessage/>
            </div>


            <div className="relative mt-10">
                <input max={500} className="bg-[#222838] text-white py-4 pl-4 pr-28 rounded-lg w-full outline-none no-scrollbar"
                       value={value}
                       onChange={handleChange}
                       type="text"/>
                <div
                    className="absolute top-1/2 -translate-y-1/2 right-4 flex items-center gap-2  bg-[#139DFF] hover:bg-[#005CE6] transition-all px-3 py-1 rounded-full">
                    <IoSend size={12} className="text-white"/>
                    <p className="font-medium text-white text-[14px]">Send</p>
                </div>
            </div>

            <p className="text-right mt-2 text-white text-lg">{countChar} /500</p>
            <p className="text-center text-lg font-normal text-[#BBBCC1] mt-3">Please be aware that this is an alpha version of the AI, and as such it may not always behave as expected. Use it at your own risk.</p>
        </div>
    );
}

export default ChatPage;