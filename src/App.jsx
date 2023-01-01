import { QueryClient, QueryClientProvider } from 'react-query';
import Employees from './components/employees/Employees';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Employees />
    </QueryClientProvider>

  )
}

export default App
