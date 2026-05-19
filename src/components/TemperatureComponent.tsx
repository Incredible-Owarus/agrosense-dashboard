import '../App.css'
import { FaThermometerHalf } from "react-icons/fa";

export default function TemperatureComponent() {
  return (
    <div className="card">
        <div className="temp-banner">
            <h2>Temperature</h2>
        </div>
        <div className="info3">
            <FaThermometerHalf size={35} color='#f4a261' className='icon'/>
            <h3>28°C</h3>
        </div>
    </div>
  )
}
