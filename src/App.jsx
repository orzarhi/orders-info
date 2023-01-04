import { Route, Routes } from 'react-router-dom';
import ChartColumn from './components/chart/ChartColumn';
import ChartLineDemo from './components/chart/ChartLineDemo';
import Employees from './components/employees/Employees';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Employees />} exact />
      {/* <Route path="/charts" element={<ChartColumn />} exact /> */}
      <Route path="/charts" element={<ChartLineDemo />} exact />
    </Routes>
  )
}

export default App
