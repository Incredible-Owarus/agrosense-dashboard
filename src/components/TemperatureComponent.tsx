import '../App.css'
import { FaThermometerHalf } from "react-icons/fa";

export default function TemperatureComponent() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-circle temp-circle"></div>
        <h2 className="card-title temp-title">Temperature</h2>
      </div>
      <div className="card-reading">
        <h1 className="reading-value temp-value">28°C</h1>
      </div>
      <div className="card-footer">
        <FaThermometerHalf size={28} color='#f4a261' />
      </div>
    </div>
  )
}
