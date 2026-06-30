import Background from "../components/Background";
import Clock from "../components/Clock";
import HudCore from "../components/Hud/HudCore";

function Home() {
  return (
    <main className="home">
      <Background />

      <section className="top-area">
        <Clock />
        <div className="welcome">
          안녕하세요, 팀장님. 무엇을 도와드릴까요?
        </div>
      </section>

      <section className="main-hud-area">
        <HudCore />
      </section>

      <section className="command-bar">
        <div className="command-status">
          <span className="status-dot"></span>
          JAMINS ONLINE
        </div>

        <div className="chat-log">
          <div className="chat-line ai">
            <span>JAMINS</span>
            안녕하세요 팀장님. 무엇을 도와드릴까요?
          </div>
        </div>

        <div className="command-input-row">
          <input placeholder="명령을 입력하세요..." />
          <button>전송</button>
        </div>
      </section>
    </main>
  );
}

export default Home;