import './App.css'
import Logo from '../public/logo.png'
import { MdOutlineDashboard } from "react-icons/md";
import HumidityComponent from './components/HumidityComponent';
import SoilMoistureComponent from './components/SoilMoistureComponent';
import TemperatureComponent from './components/TemperatureComponent';

export default function App() {
  return (
    <div className="wrapper">
      <div className="dashboard">

        <div className="header">
          <img src={Logo} height={80} width={100} />
          <h3>AgroSense</h3>

        </div>

        <div className="content-wrapper">

          <div className="nav">
            <div className="dashboard-nav">
              <MdOutlineDashboard  color='white' size={30}/>
            </div>
          </div>
          <div className="content">
            <h3>DashBoard</h3>
            <div className="cards-wrapper">
              <HumidityComponent/>
              <SoilMoistureComponent />
              <TemperatureComponent />
            </div>
          </div>

          

        </div>
      </div>
    </div>
  )
}
