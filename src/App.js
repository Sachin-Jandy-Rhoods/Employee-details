import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import {EmployeData} from "./component/employee"
import{Home} from "./component/Home"
import { MonthlyReport } from './component/MonthlyReport';
function App() {
  return (
      <Router basename="/Employee-details">  {/* Replace <repo-name> with your repository name */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="employee" element={<EmployeData />} />
          <Route path="monthlyreport/:name" element={<MonthlyReport />} />
        </Route>
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  
);
}

export default App;
