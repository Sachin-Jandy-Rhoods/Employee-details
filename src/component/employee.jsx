import { useEffect, useState } from "react";
import "./employe.css";
import U01 from "../image/u01.png";
import U02 from "../image/u02.jpg";
import U03 from "../image/u03.jpg";
import U04 from "../image/u04.jpg";
import U05 from "../image/u05.jpg";
import U06 from "../image/u06.jpg";
import U07 from "../image/u07.jpg";
import U08 from "../image/u08.jpg";
import U09 from "../image/u09.jpg";
import U10 from "../image/u10.jpg";
import U11 from "../image/u11.jpg";
import U12 from "../image/u12.jpg";
import{GetData} from "./empDummyApi"

export const EmployeData = () => {
  const userImage = {
    U01: U01,
    U02: U02,
    U03: U03,
    U04: U04,
    U05: U05,
    U06: U06,
    U07: U07,
    U08: U08,
    U09: U09,
    U10: U10,
    U11: U11,
    U12: U12,
  };
  
  const [state, stateFunc] = useState(false);
  useEffect(()=>{
      const fetchData=()=>{
      const response=GetData();
      const data= response.employee
      stateFunc(data);
      
    }   
fetchData()
      
  },[])
  return (
    <>
    <div className="header">
        <h1 className="">Employee data</h1>
    </div>
      <div className="parent">
        <ul>
          { state.length>0 ? state.map((employee, index) => (
            <li key={employee.id}>
              <div className="container">
                <div className="bg">
                  <img src={userImage[employee.image]} alt="User" />
                  <div>
                    <h1>{employee.name}</h1>
                    <h3>{employee.position}</h3>
                    <hr />
                  </div>
                </div>

                <div className="details">
                  <div>
                    <div>
                      <h3 className="head">Employee Id</h3>
                      <span className="head-ans">ID-{employee.id}</span>
                      <hr />
                    </div>
                    <div>
                      <h3 className="head">Department</h3>
                      <span className="head-ans">{employee.department}</span>
                      <hr />
                    </div>
                    <div>
                      <h3 className="head">Age</h3>
                      <span className="head-ans">{employee.age}</span>
                      <hr />
                    </div>
                    <div>
                      <h3 className="head">E-Mail</h3>
                      <span className="head-ans">{employee.email}</span>
                      <hr />
                    </div>
                    <div>
                      <h3 className="head">Phone Number</h3>
                      <span className="head-ans">{employee.phone}</span>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </li>
          )):<li><h1>Data Not fount</h1></li>}
        </ul>
      </div>
    </>
  );
};
