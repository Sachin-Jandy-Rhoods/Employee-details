import "./Home.css";
import logo from "../image/animal-2028258_1280.png";
import bell from "../image/bell-jar-1096279_1280.png"
import mail from "../image/mail-44042_1280.png"
import { Link, Outlet } from 'react-router-dom';
import {EmployeData} from "./employee"



export const Home = () => {
    return (
      <>
        <div className="Main">
          <div className="sideNav">
            <div className="logo">
              <img src={logo} alt="Logo" />
              <h1>Why Tap</h1>
            </div>
  
            <div className="headings">
              <ul className="sec">
                <li>
                  <Link to={`/employee`} className="no-underline"><h3>Dashboard</h3></Link>
                </li>
                <li>
                <Link to={`monthlyreport/sachin`} className="no-underline"><h3>Monthly Report</h3></Link>
                </li>
                <li>
                  <h3>Working Tracker</h3>
                </li>
                <li>
                  <h3>Company Division</h3>
                </li>
                <li>
                  <h3>Approval Letter</h3>
                </li>
              </ul>
              <ul className="sec">
                <li>
                  <h3>Help Center</h3>
                </li>
                <li>
                  <h3>Settings</h3>
                </li>
              </ul>
            </div>
          </div>
        <div className="head-1">
          <div className="headers">
            <div>
              <input type="text" placeholder="Search Worker Name" />
            </div>
            <div className="d2">
              <img src={bell} alt="Notification" />
              <img src={mail} alt="Notification" />
              <select name="" id="">
                <option value="">ENG</option>
                <option value="">SPA</option>
                <option value="">TAM</option>
              </select>
            </div>
          </div>
          <div className="content">
            <Outlet/>
          </div>
          </div>
         
        </div>
      </>
    );
  };
     
