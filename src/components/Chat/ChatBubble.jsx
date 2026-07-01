import ReactMarkdown from "react-markdown";

function ChatBubble({ msg, isTyping }) {
  const sender = msg.role === "ai" ? "JAMINS" : "TEAM";

  return (
    <div className={`chat-line ${msg.role}`}>
      <span>{sender}</span>

      <div className={`message-text ${isTyping ? "typing" : ""}`}>
        <ReactMarkdown>{msg.text}</ReactMarkdown>
      </div>
    </div>
  );
}

export default ChatBubble;