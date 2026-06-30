import Rings from "./Rings";
import Pointer from "./Pointer";
import Particles from "./Particles";
import Core from "./Core";
import Scanner from "./Scanner";

function JaminsHud() {
  return (
    <section className="jamins-hud-v2">
      <div className="hud-bg-glow"></div>

      <Rings />
      <Scanner />
      <Pointer />
      <Particles />
      <Core />
    </section>
  );
}

export default JaminsHud;