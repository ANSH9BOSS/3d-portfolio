import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&amp;</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder &amp; Core Engineer</h4>
                <h5>Quorox Cloud</h5>
              </div>
              <h3>2026–PRES</h3>
            </div>
            <p>
              High-availability VPS container virtualization platform integrating Pterodactyl daemon nodes with WHMCS automated checkout billing APIs. Scales setups down to under 10 seconds.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Architect</h4>
                <h5>Skript Builder AI</h5>
              </div>
              <h3>2026–PRES</h3>
            </div>
            <p>
              Autonomous artificial intelligence platform fine-tuned to compile optimized Minecraft Skript templates, audit syntax trees, and automate Minecraft server scripts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead Systems Developer</h4>
                <h5>Stitch Analyzer</h5>
              </div>
              <h3>2025–PRES</h3>
            </div>
            <p>
              Double-sided anticheat engine. Combines an Electron process memory scanning launcher that audits loaded DLL registers with a Spigot/Paper Java NMS validator checking packet timing anomalies.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Engineer</h4>
                <h5>AutoTierList</h5>
              </div>
              <h3>2025–PRES</h3>
            </div>
            <p>
              Automatic player rating tracking leaderboard parsing server event logs in real-time, syncing metrics with automated Discord role matrices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
