const feetOptions = Array.from({ length: 8 }, (_, i) => i + 3); // 3..10
const inchOptions = Array.from({ length: 12 }, (_, i) => i); // 0..11

export default function InputPanel({
  mode,
  setMode,
  imperial,
  metric,
  onImperialChange,
  onMetricChange,
  onReset,
}) {
  return (
    <>
      <div className="tabs">
        <div className={`tab ${mode === 'standard' ? 'active' : ''}`} onClick={() => setMode('standard')}>Standard</div>
        <div className={`tab ${mode === 'metric' ? 'active' : ''}`} onClick={() => setMode('metric')}>Metric</div>
      </div>

      <div className="fields">
        <div className="field-group">
          <div style={{ marginBottom: 10, fontWeight: 700 }}>Height</div>

          {mode === 'standard' ? (
            <div className="field-row">
              <select
                className="small-input"
                value={imperial.feet}
                onChange={(e) => onImperialChange('feet', e.target.value)}
              >
                {feetOptions.map((f) => (
                  <option key={f} value={f}>{f}</option>
                ))}
              </select>
              <div className="unit">Feet</div>

              <select
                className="small-input"
                value={imperial.inches}
                onChange={(e) => onImperialChange('inches', e.target.value)}
              >
                {inchOptions.map((i) => (
                  <option key={i} value={i}>{i}</option>
                ))}
              </select>
              <div className="unit">Inches</div>
            </div>
          ) : (
            <div className="field-row">
              <input
                className="small-input"
                type="number"
                value={metric.cm}
                onChange={(e) => onMetricChange('cm', e.target.value)}
                min={50}
                max={272}
              />
              <div className="unit">cm</div>
            </div>
          )}
        </div>

        <div className="field-group">
          <div style={{ marginBottom: 10, fontWeight: 700 }}>Weight</div>

          {mode === 'standard' ? (
            <div className="field-row">
              <input
                className="small-input"
                type="number"
                value={imperial.pounds}
                onChange={(e) => onImperialChange('pounds', e.target.value)}
                min={10}
                max={1400}
              />
              <div className="unit">Pounds</div>
            </div>
          ) : (
            <div className="field-row">
              <input
                className="small-input"
                type="number"
                value={metric.kg}
                onChange={(e) => onMetricChange('kg', e.target.value)}
                min={2}
                max={700}
              />
              <div className="unit">kg</div>
            </div>
          )}

          <div className="buttons">
            <button className="btn">Calculate Your BMI</button>
            <button className="btn reset" onClick={onReset}>Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}
