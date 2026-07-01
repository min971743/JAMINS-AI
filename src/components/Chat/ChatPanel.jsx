import ChatBubble from "./ChatBubble";

function ChatPanel({
  messages,
  input,
  setInput,
  sendMessage,
  chatEndRef,
  status,
}) {
  return (
    <section className="jamins-left">
      <div className="chat-card">
        <div className="chat-header">
          <span className="status-dot"></span>
          <span>JAMINS CHAT</span>
        </div>

        <div className="chat-log">
          {messages.map((msg, index) => (
            <ChatBubble
              key={index}
              msg={msg}
              isTyping={status === "RESPONDING..." && index === messages.length - 1}
            />
          ))}

          <div ref={chatEndRef}></div>
        </div>

        <div className="command-input-row">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
            placeholder="명령을 입력하세요..."
          />

          <button type="button" onClick={sendMessage}>
            ➤
          </button>
        </div>
      </div>
    </section>
  );
}

export default ChatPanel;