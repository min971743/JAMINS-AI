import { useEffect, useRef, useState } from "react";
import Background from "../components/Background";
import HudCore from "../components/Hud/HudCore";
import { askJamins } from "../api/chat";
import ReactMarkdown from "react-markdown";

function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "ai", text: "안녕하세요 팀장님. 무엇을 도와드릴까요?" },
  ]);

  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", text },
      { role: "ai", text: "생각 중입니다..." },
    ]);

    setInput("");

    const reply = await askJamins(text);

    setMessages((prev) => [
      ...prev.slice(0, -1),
      { role: "ai", text: reply },
    ]);
  };

  return (
    <main className="jamins-screen">
      <Background />

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

      <section className="jamins-center">
        <HudCore />

        <div className="hud-title">
          <h1>JAMINS-AI</h1>
          <div className="hud-ready">● READY</div>
        </div>
      </section>

      <section className="jamins-right">
        <div className="status-card">
          <h3>SYSTEM</h3>
          <p>GPT ONLINE</p>
          <p>MEMORY READY</p>
          <p>VOICE STANDBY</p>
        </div>
      </section>
    </main>
  );
}

export default Home;