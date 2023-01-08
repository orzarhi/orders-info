import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import DetailInfo from "./components/pages/detailInfo/DetailInfo";
import Main from "./components/pages/main/Main";

function App() {
	return (
		<>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Main />} exact />
				<Route path="/charts" element={<DetailInfo />} exact />
			</Routes>
		</>
	);
}

export default App;
