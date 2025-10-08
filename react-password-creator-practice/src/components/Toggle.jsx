export default function Toggle({checked, onChange, label}){
    return(
        <label className="toggle">
             <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)}></input>
             <span className="track">
                <span className="thumb"></span>
            </span>
              <span style={{marginLeft:8}}>{label}</span>
        </label>
    )
}