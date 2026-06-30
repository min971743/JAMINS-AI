function ChatPanel() {
  return (
    <section className="chat-panel">
      <div className="chat-header">
        <span className="status-dot"></span>
        <span>JAMINS ONLINE</span>
      </div>

      <div className="chat-message">
        안녕하세요 팀장님. 무엇을 도와드릴까요?
      </div>

      <div className="chat-input-box">
        <input placeholder="명령을 입력하세요..." />
        <button>전송</button>
      </div>
    </section>
  );
}

export default ChatPanel;