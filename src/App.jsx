import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Employees from "./components/employees/Employees";
import Main from "./components/pages/main/Main";

function App() {
	return (
		<>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Employees />} exact />
				<Route path="/charts" element={<Main />} exact />
			</Routes>
		</>
	);
}

export default App;
