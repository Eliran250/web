import { useEffect, useRef, useState } from "react"
import Chat from "./Chat";
import { io } from "socket.io-client";

const ChatContainer = () => {

    const [message, setMessage] = useState("")
    const [sentMessage, setSentMessage] = useState<string[]>([])

    const socketRef = useRef<any>(null);

    useEffect(() => {
        socketRef.current = io("http://localhost:3000");

        socketRef.current.on("connect", () => {
            console.log("Connected to socket:", socketRef.current.id);
        });

        socketRef.current.on("Message", (message: string) => {
            setSentMessage(prevMessage => [...prevMessage, message]);
        })
        return () => {
            socketRef.current.disconnect();
        };
    }, [])

    const messageSent = (message: string) => {
        socketRef.current.emit("Send message", message)
        setMessage('');
    }
    
    return (
        <>
            <Chat message={message} setMessage={setMessage} messageSent={messageSent} sentMessage={sentMessage} />
        </>
    )
}

export default ChatContainer