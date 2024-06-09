import "./ChatWindow.css";

export default function ChatWindow() {
  return (
    <div>
      <ul id="chat-feed" className="chat-feed"></ul>
      <input
        className="message-input"
        type="text"
        placeholder="Type your message and hit 'Send message'"
      />
      <button className="send-message-btn">Send message</button>
    </div>
  );
}
