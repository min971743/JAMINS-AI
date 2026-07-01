import ReactMarkdown from "react-markdown";

function ChatPanel({
  messages,
  input,
  setInput,
  sendMessage,
  chatEndRef,
}) {
  return (
    <section className="jamins-left">
      <div className="chat-card">
        <div className="chat-header">
          <span className="status-dot"></span>
          <span>JAMINS</span>
        </div>

        <div className="chat-log">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-line ${msg.role}`}>
              <span>{msg.role === "ai" ? "JAMINS" : "TEAM"}</span>

              <div className="message-text">
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
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