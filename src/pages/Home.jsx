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

      <HudCore />
    </main>
  );
}

export default Home;