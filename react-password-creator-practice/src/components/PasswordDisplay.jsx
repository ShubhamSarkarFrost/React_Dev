export default function PasswordDisplay({ password, onCopy, onRefresh, strength }) {
  return (
    <div>
      <div className="password-box" role="region" aria-label="generated password">
        <div className="password-text">{password || '—'}</div>
        <div style={{display:'flex',gap:12}}>
          <button className="copy-btn" onClick={onCopy}>Copy</button>
          <button className="refresh-btn" onClick={onRefresh}>Refresh</button>
        </div>
      </div>
      <div style={{marginTop:12}}>Generated Password <span className="strength-pill">{strength}</span></div>
    </div>
  );
}