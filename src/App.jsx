import { Route, Routes } from 'react-router-dom';
import ChartPie from './components/chart/ChartPie';
import Employees from './components/employees/Employees';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Employees />} exact />
      <Route path="/charts" element={<ChartPie />} exact />
    </Routes>
  )
}

export default App
