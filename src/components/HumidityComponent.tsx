import '../App.css'
import { IoIosWater } from "react-icons/io";

export default function HumidityComponent() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-circle hum-circle"></div>
        <h2 className="card-title hum-title">Humidity</h2>
      </div>
      <div className="card-reading">
        <h1 className="reading-value hum-value">42%</h1>
      </div>
      <div className="card-footer">
        <IoIosWater size={28} color='#81f3edff' />
      </div>
    </div>
  )
}
