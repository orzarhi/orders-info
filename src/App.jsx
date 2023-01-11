import { CssBaseline } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Details from "./components/pages/details/Details";
import Main from "./components/pages/main/Main";

function App() {
	return (
		<>
			<CssBaseline />
			<Routes>
				<Route path="/" element={<Main />} exact />
				<Route path="/charts" element={<Details />} exact />
				<Route path="*" element={<PageNotFound />} exact />
			</Routes>
		</>
	);
}

export default App;
