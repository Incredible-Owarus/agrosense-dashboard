import '../App.css'
import { IoIosWater } from "react-icons/io";


export default function HumidityComponent() {
  return (
    <div className="card">
        <div className="hum-banner">
            <h2>Humidity</h2>
        </div>
        <div className="info1">
            <IoIosWater  size={35} color='#81f3edff' className='icon'/>
            <h3>42%</h3>
        </div>
    </div>
  )
}
