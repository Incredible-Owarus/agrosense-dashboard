import '../App.css'
import { GiWateringCan } from "react-icons/gi";

export default function SoilMoistureComponent() {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-circle soil-circle"></div>
        <h2 className="card-title soil-title">Soil Moisture</h2>
      </div>
      <div className="card-reading">
        <h1 className="reading-value soil-value">65%</h1>
      </div>
      <div className="card-footer">
        <GiWateringCan size={28} color='#7ec87e' />
      </div>
    </div>
  )
}
