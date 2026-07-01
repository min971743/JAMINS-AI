function SystemPanel() {
  return (
    <section className="jamins-right">
      <div className="status-card">
        <h3>SYSTEM</h3>

        <div className="system-row">
          <span>GPT</span>
          <b>ONLINE</b>
        </div>

        <div className="system-row">
          <span>MEMORY</span>
          <b>ACTIVE</b>
        </div>

        <div className="system-row">
          <span>VOICE</span>
          <b>STANDBY</b>
        </div>

        <div className="system-row">
          <span>PC</span>
          <b>READY</b>
        </div>
      </div>
    </section>
  );
}

export default SystemPanel;