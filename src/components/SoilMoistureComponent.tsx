import '../App.css'
import { GiWateringCan } from "react-icons/gi";

export default function SoilMoistureComponent() {
  return (
    <div className="card">
        <div className="soil-banner">
            <h2>Soil Moisture</h2>
        </div>
        <div className="info2">
            <GiWateringCan size={35} color='#7ec87e' className='icon'/>
            <h3>65%</h3>
        </div>
    </div>
  )
}
