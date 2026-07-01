import { useEffect, useRef, useState } from "react";
import Background from "../components/Background";
import HudCore from "../components/Hud/HudCore";
import { askJamins } from "../api/chat";
import ChatPanel from "../components/Chat/ChatPanel";
import SystemPanel from "../components/System/SystemPanel";

function Home() {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("READY");

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
    setStatus("THINKING...");

    try {
      const reply = await askJamins(text);

      setStatus("RESPONDING...");

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "ai", text: reply },
      ]);

      setTimeout(() => {
        setStatus("READY");
      }, 800);
    } catch (error) {
      setStatus("ERROR");

      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: "ai", text: "팀장님, 서버 연결 중 오류가 발생했습니다." },
      ]);
    }
  };

  return (
  <main className="jamins-screen">
    <Background />

    <ChatPanel
      messages={messages}
      input={input}
      setInput={setInput}
      sendMessage={sendMessage}
      chatEndRef={chatEndRef}
    />

    <section className="jamins-center">
      <HudCore />

      <div className="hud-title">
        <h1>JAMINS-AI</h1>

        <div className={`hud-ready ${status.toLowerCase().replace(".", "")}`}>
          ● {status}
        </div>
      </div>
    </section>

    <SystemPanel />

  </main>
);
}

export default Home;