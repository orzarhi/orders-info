import { Route, Routes } from 'react-router-dom';
import ChartColumn from './components/chart/ChartColumn';
import Employees from './components/employees/Employees';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Employees />} exact />
      <Route path="/charts" element={<ChartColumn />} exact />
    </Routes>
  )
}

export default App
