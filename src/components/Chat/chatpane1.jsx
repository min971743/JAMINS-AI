import { useState } from "react";

function ChatPanel() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "안녕하세요 팀장님. 무엇을 도와드릴까요?" },
  ]);

  const sendMessage = () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "ai", text: `팀장님, "${text}" 명령을 확인했습니다.` },
    ]);

    setInput("");
  };

  return (
    <section className="chat-panel left-chat">
      <div className="chat-header">
        <span className="status-dot"></span>
        <span>JAMINS ONLINE</span>
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.role}`}>
            {msg.text}
          </div>
        ))}
      </div>

      <div className="chat-input-box">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") sendMessage();
          }}
          placeholder="명령을 입력하세요..."
        />
        <button type="button" onClick={sendMessage}>
          전송
        </button>
      </div>
    </section>
  );
}

export default ChatPanel;