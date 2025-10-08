import Toggle from './Toggle';
import Slider from './Slider';

export default function Controls({
  length,
  setLength,
  includeUpper,
  setIncludeUpper,
  includeLower,
  setIncludeLower,
  includeNumbers,
  setIncludeNumbers,
  includeSymbols,
  setIncludeSymbols,
  onGenerate,
}) {
  return (
    <div className="controls">
      <div className="controls-row">
        <div className="label">Password Length</div>
        <Slider value={length} onChange={setLength} />
      </div>

      <div className="controls-row">
        <div className="label">Include</div>
        <div style={{display:'flex',gap:18}}>
          <Toggle checked={includeUpper} onChange={setIncludeUpper} label="Uppercase" />
          <Toggle checked={includeLower} onChange={setIncludeLower} label="Lowercase" />
          <Toggle checked={includeNumbers} onChange={setIncludeNumbers} label="Numbers" />
          <Toggle checked={includeSymbols} onChange={setIncludeSymbols} label="Symbols" />
        </div>
      </div>

      <div style={{marginTop:18}}>
        <button className="copy-big" onClick={onGenerate}>Generate password</button>
      </div>
    </div>
  );
}