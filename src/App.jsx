import { Route, Routes } from 'react-router-dom';
import Charts from './components/chart/Charts';
import Employees from './components/employees/Employees';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Employees />} exact />
      <Route path="/charts" element={<Charts />} exact />
    </Routes>
  )
}

export default App
