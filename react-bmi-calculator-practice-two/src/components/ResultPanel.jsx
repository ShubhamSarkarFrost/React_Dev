import { calculateBMI, getBMICategory } from "../util/calcBMI";


export default function ResultPanel({mode, imperial, metric}){
    const bmi = calculateBMI({mode, imperial, metric});
    const bmiDisplay = bmi ? bmi.toFixed(1): '-';
    const category = getBMICategory(bmi);

    const handlebmitableevant = () =>{
        window.open("https://www.nhlbi.nih.gov/sites/default/files/media/docs/bmi_tbl.pdf","_blank", "noopener,noreferrer")
    }

    return (
        <>
         <div className="right-header">
           <div style={{fontSize:14, fontWeight:700}}>YOUR BMI IS</div>
           <div className="bmi-value">{bmiDisplay}</div>
         </div>

         <div className="content">
           <table className="table" aria-hidden>
              <tbody>
                <tr className={category === 'Underweight' ? 'highlight' : ''}>
              <td className="row-label">Underweight</td>
              <td style={{ fontWeight: 700 }}>Below 18.5</td>
            </tr>

            <tr className={category === 'Healthy' ? 'highlight' : ''}>
              <td className="row-label">Healthy</td>
              <td>18.5 - 24.9</td>
            </tr>

            <tr className={category === 'Overweight' ? 'highlight' : ''}>
              <td className="row-label">Overweight</td>
              <td>25.0 - 29.9</td>
            </tr>

            <tr className={category === 'Obesity' ? 'highlight' : ''}>
              <td className="row-label">Obesity</td>
              <td>30.0 or above</td>
            </tr>
              </tbody>
           </table>
           <div className="view-link" onClick={handlebmitableevant} style={{ cursor: "pointer" }}>View BMI Tables</div>
         </div>
        </>
    )
}