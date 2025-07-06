import './chatStyle.scss'

interface ChatProps {
    message: string
    setMessage: React.Dispatch<React.SetStateAction<string>>
    sentMessage: string[]
    messageSent: (message: string) => void
}

const Chat = ({ setMessage, sentMessage, message, messageSent }: ChatProps) => {
    return (
        <div className="chat-container">
            <div className="chat-above">
                <h1 className='title'>Chat</h1>
                <div className="input-button">
                    <input value={message} onChange={(e) => setMessage(e.target.value)} className='input-chat' type="text" placeholder='Enter text' />
                    <button className='send-button' onClick={() => messageSent(message)}>Send</button>
                </div>
                <div>{sentMessage.map((message, index) => (
                    <li style={{ color: "white" }} key={index}>{message}</li>
                ))}</div>
            </div>
        </div>
    )
}

export default Chat