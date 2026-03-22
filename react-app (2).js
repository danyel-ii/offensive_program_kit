import React, { useState, useEffect } from 'react';

const customStyles = {
  root: {
    '--bg-page': '#161618',
    '--card-light-bg': '#F4F2F7',
    '--text-light-primary': '#000000',
    '--text-light-secondary': '#8E8E93',
    '--nested-bg': '#FFFFFF',
    '--bar-inactive': '#C6C6C8',
    '--card-dark-bg': '#222224',
    '--text-dark-primary': '#FFFFFF',
    '--text-dark-secondary': '#7A7A7C',
    '--flap-bg': '#18181A',
    '--flap-border': '#333333',
    '--flap-text-dim': '#4A4A4C',
    '--accent-orange': '#F97A2E',
  }
};

const Flap = ({ char, dim = false }) => {
  const flapStyle = {
    width: '24px',
    height: '30px',
    backgroundColor: '#18181A',
    borderRadius: '6px',
    borderTop: dim ? '1px solid #222' : '1px solid #333333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: '14px',
    fontWeight: 700,
    color: dim ? '#4A4A4C' : '#FFFFFF',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.2)',
    transition: 'transform 0.1s ease',
    cursor: 'default',
    flexShrink: 0,
  };
  return <div style={flapStyle}>{char}</div>;
};

const FlapRow = ({ label, chars }) => {
  const rowStyle = {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  };
  const labelStyle = {
    width: '70px',
    fontSize: '11px',
    textTransform: 'uppercase',
    color: '#7A7A7C',
    fontWeight: 600,
    letterSpacing: '0.5px',
    flexShrink: 0,
  };
  const charsStyle = {
    display: 'flex',
    gap: '4px',
  };

  return (
    <div style={rowStyle}>
      <span style={labelStyle}>{label}</span>
      <div style={charsStyle}>
        {chars.map((item, idx) => (
          <Flap key={idx} char={item.char} dim={item.dim} />
        ))}
      </div>
    </div>
  );
};

const ToolProgressionCard = () => {
  const cardStyle = {
    borderRadius: '32px',
    padding: '32px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#222224',
    color: '#FFFFFF',
  };

  const iconBoxStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: 'rgba(255,255,255,0.1)',
  };

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '24px',
  };

  const cardTitleGroupStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginTop: '2px',
  };

  const flapBoardStyle = {
    marginTop: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  };

  const rows = [
    {
      label: 'RECON',
      chars: [
        { char: 'N', dim: false },
        { char: 'M', dim: false },
        { char: 'A', dim: false },
        { char: 'P', dim: false },
        { char: '', dim: true },
        { char: 'G', dim: false },
        { char: 'O', dim: false },
        { char: 'B', dim: false },
        { char: 'U', dim: false },
        { char: 'S', dim: false },
        { char: 'T', dim: false },
      ],
    },
    {
      label: 'ENUM',
      chars: [
        { char: 'B', dim: false },
        { char: 'L', dim: false },
        { char: 'O', dim: false },
        { char: 'O', dim: false },
        { char: 'D', dim: false },
        { char: 'H', dim: false },
        { char: 'O', dim: false },
        { char: 'U', dim: false },
        { char: 'N', dim: false },
        { char: 'D', dim: false },
      ],
    },
    {
      label: 'EXPLOIT',
      chars: [
        { char: 'M', dim: false },
        { char: 'E', dim: false },
        { char: 'T', dim: false },
        { char: 'A', dim: false },
        { char: 'S', dim: false },
        { char: 'P', dim: false },
        { char: 'L', dim: false },
        { char: 'O', dim: false },
        { char: 'I', dim: false },
        { char: 'T', dim: false },
      ],
    },
    {
      label: 'PRIVESC',
      chars: [
        { char: 'L', dim: false },
        { char: 'I', dim: false },
        { char: 'N', dim: false },
        { char: 'P', dim: false },
        { char: 'E', dim: false },
        { char: 'A', dim: false },
        { char: 'S', dim: false },
        { char: '', dim: true },
        { char: 'W', dim: true },
        { char: 'I', dim: true },
        { char: 'N', dim: true },
      ],
    },
    {
      label: 'PIVOT',
      chars: [
        { char: 'C', dim: true },
        { char: 'H', dim: true },
        { char: 'I', dim: true },
        { char: 'S', dim: true },
        { char: 'E', dim: true },
        { char: 'L', dim: true },
        { char: '', dim: true },
        { char: '', dim: true },
        { char: '', dim: true },
        { char: '', dim: true },
      ],
    },
    {
      label: 'CRACK',
      chars: [
        { char: 'H', dim: true },
        { char: 'A', dim: true },
        { char: 'S', dim: true },
        { char: 'H', dim: true },
        { char: 'C', dim: true },
        { char: 'A', dim: true },
        { char: 'T', dim: true },
        { char: '', dim: true },
        { char: '', dim: true },
        { char: '', dim: true },
      ],
    },
  ];

  return (
    <div style={cardStyle}>
      <div style={cardHeaderStyle}>
        <div style={iconBoxStyle}>
          <svg
            style={{ width: '24px', height: '24px', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }}
            viewBox="0 0 24 24"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="9" y1="3" x2="9" y2="21"></line>
            <path d="M13 8h4"></path>
            <path d="M13 12h4"></path>
          </svg>
        </div>
        <div style={cardTitleGroupStyle}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.3px' }}>Tool Progression</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.4, color: '#7A7A7C' }}>
            Mastery matrix across attack phases.<br />
            Track active exploitation frameworks.
          </p>
        </div>
      </div>

      <div style={flapBoardStyle}>
        {rows.map((row, idx) => (
          <FlapRow key={idx} label={row.label} chars={row.chars} />
        ))}
      </div>
    </div>
  );
};

const WeeklyCadenceCard = () => {
  const [checked, setChecked] = useState(false);
  const [timerPaused, setTimerPaused] = useState(false);
  const [seconds, setSeconds] = useState(2 * 3600 + 45 * 60 + 12);

  useEffect(() => {
    if (timerPaused) return;
    const interval = setInterval(() => {
      setSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [timerPaused]);

  const formatTime = (totalSeconds) => {
    const h = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  const cardStyle = {
    borderRadius: '32px',
    padding: '32px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F4F2F7',
    color: '#000000',
  };

  const iconBoxStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    background: '#111',
    color: '#FFF',
  };

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '16px',
    marginBottom: '24px',
  };

  const nestedCardStyle = {
    backgroundColor: '#FFFFFF',
    borderRadius: '24px',
    padding: '20px 24px',
    boxShadow: '0 12px 32px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)',
    marginTop: 'auto',
    marginBottom: '44px',
    position: 'relative',
  };

  const taskRowStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
  };

  const checkboxStyle = {
    width: '20px',
    height: '20px',
    border: checked ? 'none' : '2px solid #E5E5EA',
    borderRadius: '6px',
    marginTop: '2px',
    cursor: 'pointer',
    flexShrink: 0,
    backgroundColor: checked ? '#F97A2E' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const timerPillStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '12px',
    background: '#FFFFFF',
    padding: '8px 16px 8px 8px',
    borderRadius: '100px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
    position: 'absolute',
    bottom: '-20px',
    left: '24px',
  };

  const timerIconStyle = {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '2px solid #F97A2E',
    borderRightColor: 'transparent',
    position: 'relative',
    transform: 'rotate(45deg)',
    flexShrink: 0,
  };

  const timerActionStyle = {
    width: '12px',
    height: '14px',
    borderLeft: '3px solid #8E8E93',
    borderRight: '3px solid #8E8E93',
    cursor: 'pointer',
    marginLeft: '4px',
    flexShrink: 0,
  };

  const timelineContainerStyle = {
    marginTop: 'auto',
    paddingTop: '32px',
    position: 'relative',
  };

  const timelineWrapperStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    gap: '16px',
    height: '64px',
    WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
    maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
  };

  const ticks = [
    { height: '20%', active: false },
    { height: '40%', active: false },
    { height: '15%', active: false },
    { height: '60%', active: false },
    { height: '30%', active: false },
    { height: '80%', active: false },
    { height: '45%', active: false },
    { height: '20%', active: false },
    { height: '70%', active: false },
    { height: '100%', active: true },
    { height: '10%', active: false },
    { height: '10%', active: false },
    { height: '10%', active: false },
    { height: '10%', active: false },
    { height: '10%', active: false },
    { height: '10%', active: false },
  ];

  return (
    <div style={cardStyle}>
      <div style={cardHeaderStyle}>
        <div style={iconBoxStyle}>
          <svg style={{ width: '20px', height: '20px', fill: 'currentColor' }} viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />
          </svg>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '2px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '-0.3px' }}>Weekly Cadence</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.4, color: '#8E8E93' }}>
            Maintain focus through structured lab hours<br />
            and mandatory box completion.
          </p>
        </div>
      </div>

      <div style={nestedCardStyle}>
        <div style={taskRowStyle}>
          <div style={checkboxStyle} onClick={() => setChecked(!checked)}>
            {checked && (
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <span style={{ fontSize: '16px', fontWeight: 600, textDecoration: checked ? 'line-through' : 'none', color: checked ? '#8E8E93' : '#000' }}>
              Active Directory Lab
            </span>
            <span style={{ fontSize: '14px', color: '#8E8E93' }}>Compromise Forest Root domain</span>
          </div>
        </div>

        <div style={timerPillStyle}>
          <div style={timerIconStyle}>
            <div style={{
              position: 'absolute',
              width: '4px',
              height: '4px',
              background: '#F97A2E',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }} />
          </div>
          <span style={{ fontSize: '16px', fontWeight: 600, letterSpacing: '-0.5px', color: '#000' }}>
            {formatTime(seconds)}
          </span>
          <div
            style={{
              ...timerActionStyle,
              borderLeft: timerPaused ? 'none' : '3px solid #8E8E93',
              borderRight: timerPaused ? 'none' : '3px solid #8E8E93',
              width: timerPaused ? '0' : '12px',
              borderStyle: timerPaused ? 'solid' : undefined,
              borderColor: timerPaused ? 'transparent transparent transparent #8E8E93' : undefined,
              borderWidth: timerPaused ? '7px 0 7px 12px' : undefined,
            }}
            onClick={() => setTimerPaused(!timerPaused)}
          />
        </div>
      </div>

      <div style={timelineContainerStyle}>
        <div style={timelineWrapperStyle}>
          {ticks.map((tick, idx) => (
            <div
              key={idx}
              style={{
                width: '4px',
                height: tick.height,
                backgroundColor: tick.active ? '#F97A2E' : '#C6C6C8',
                borderRadius: '4px',
                transition: 'height 0.3s ease',
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@700&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
      body { background-color: #161618; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const pageStyle = {
    backgroundColor: '#161618',
    fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
    color: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '40px',
  };

  const dashboardStyle = {
    width: '100%',
    maxWidth: '1200px',
    display: 'grid',
    gridTemplateColumns: '1.2fr 1fr',
    gap: '24px',
  };

  const headerStyle = {
    gridColumn: '1 / -1',
    marginBottom: '16px',
  };

  return (
    <div style={pageStyle}>
      <div style={dashboardStyle}>
        <div style={headerStyle}>
          <h1 style={{ fontSize: '24px', fontWeight: 600, letterSpacing: '-0.5px', color: '#FFFFFF' }}>
            Offensive Cybersecurity Program
          </h1>
          <p style={{ color: '#7A7A7C', fontSize: '15px', marginTop: '4px' }}>
            24-Week OSCP Track Overview
          </p>
        </div>

        <ToolProgressionCard />
        <WeeklyCadenceCard />
      </div>
    </div>
  );
};

export default App;