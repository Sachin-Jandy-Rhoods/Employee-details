import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import {EmployeData} from "./component/employee"
import{Home} from "./component/Home"
import { MonthlyReport } from './component/MonthlyReport';
function App() {
  return (
      <Routes>
            <Route path="/" element={<Home/>}>
            <Route path='employee' element={<EmployeData/>}/>
            <Route path="monthlyreport/:name" element={<MonthlyReport/>}/>
            </Route>
            {/* <Route path='*' element={<h1>Page Not Fount</h1>}/> */}
      </Routes>
  
);
}

export default App;
