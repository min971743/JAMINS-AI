export default function JaminsHud() {
  return (
    <div className="jamins-hud">
      <div className="hud-glow" />

      <div className="hud-ring hud-ring-1" />
      <div className="hud-ring hud-ring-2" />
      <div className="hud-ring hud-ring-3" />

      <div className="hud-ticks" />

      <div className="hud-pointer top" />
      <div className="hud-pointer right" />
      <div className="hud-pointer bottom" />
      <div className="hud-pointer left" />

      <div className="hud-scan" />

      <div className="hud-core">
        <div className="core-orbit core-orbit-1" />
        <div className="core-orbit core-orbit-2" />
        <div className="core-light" />
        <div className="core-dot" />
      </div>
    </div>
  );
}