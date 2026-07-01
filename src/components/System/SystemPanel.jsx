function SystemPanel() {
  return (
    <section className="jamins-right">
      <div className="status-card">

        <div className="system-title">
          SYSTEM
        </div>

        <div className="system-row online">
          <span>GPT</span>
          <b>ONLINE</b>
        </div>

        <div className="system-row active">
          <span>MEMORY</span>
          <b>ACTIVE</b>
        </div>

        <div className="system-row ready">
          <span>INTERNET</span>
          <b>READY</b>
        </div>

        <div className="system-row standby">
          <span>VOICE</span>
          <b>STANDBY</b>
        </div>

        <div className="system-row offline">
          <span>LOCAL AI</span>
          <b>OFFLINE</b>
        </div>

      </div>
    </section>
  );
}

export default SystemPanel;