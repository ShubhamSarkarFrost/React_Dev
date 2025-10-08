export default function Slider({ value, onChange, min = 4, max = 32 }) {
  return (
    <div className="slider-row">
        <input className="input-number" type="number" value={value} min={min} max={max} onChange={(e) => onChange(Number(e.target.value))}/>
        <input className="range" type="range" min={min} max={max} value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </div>
  );
}