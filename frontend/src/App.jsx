import { useState } from 'react';
import './App.css';

function App() {
  const [monitoring, setMonitoring] = useState(false);

  return (
    <main className="app-shell">
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Drive Awake home">
          <span className="brand-mark">D</span>
          Drive Awake
        </a>
        <span className="system-status"><i /> System ready</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">AI-powered safety</p>
          <h1>Stay alert.<br /><span>Arrive safe.</span></h1>
          <p className="summary">
            Real-time driver monitoring that detects early signs of fatigue and
            alerts you before drowsiness becomes dangerous.
          </p>
          <button className="primary-button" onClick={() => setMonitoring(!monitoring)}>
            <span>{monitoring ? '■' : '▶'}</span>
            {monitoring ? 'Stop monitoring' : 'Start monitoring'}
          </button>
          <p className="privacy-note">Camera processing stays on your device</p>
        </div>

        <div className={`monitor-card ${monitoring ? 'is-active' : ''}`}>
          <div className="camera-view">
            <div className="corner top-left" />
            <div className="corner top-right" />
            <div className="corner bottom-left" />
            <div className="corner bottom-right" />
            <div className="face-guide">
              <span className="eye left" />
              <span className="eye right" />
            </div>
            <span className="live-badge">{monitoring ? 'LIVE' : 'PREVIEW'}</span>
            <p>{monitoring ? 'Monitoring driver attention' : 'Camera preview'}</p>
          </div>
          <div className="metrics">
            <div><span>Alertness</span><strong>{monitoring ? '98%' : '—'}</strong></div>
            <div><span>Eye status</span><strong>{monitoring ? 'Open' : 'Waiting'}</strong></div>
            <div><span>Session</span><strong>{monitoring ? '00:01' : '00:00'}</strong></div>
          </div>
        </div>
      </section>

      <section className="features" aria-label="Key features">
        <article><b>01</b><div><h2>Real-time detection</h2><p>Tracks eye closure and head position continuously.</p></div></article>
        <article><b>02</b><div><h2>Instant alerts</h2><p>Responds quickly when signs of fatigue appear.</p></div></article>
        <article><b>03</b><div><h2>Privacy first</h2><p>Your camera feed is processed locally.</p></div></article>
      </section>
    </main>
  );
}

export default App;
