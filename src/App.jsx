import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Details from "./components/pages/details/Details";
import Main from "./components/pages/main/Main";

function App() {
	return (
		<>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Main />} exact />
				<Route path="/charts" element={<Details />} exact />
			</Routes>
		</>
	);
}

export default App;
