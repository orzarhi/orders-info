import { CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/pageNotFound/PageNotFound";
import Details from "./components/pages/details/Details";
import Main from "./components/pages/main/Main";

function App() {
	const queryClient = new QueryClient();

	return (
		<>
			<QueryClientProvider client={queryClient}>
				<CssBaseline />
				<Routes>
					<Route path="/" element={<Main />} exact />
					<Route path="/charts" element={<Details />} exact />
					<Route path="*" element={<PageNotFound />} exact />
				</Routes>
				<ReactQueryDevtools />
			</QueryClientProvider>
		</>
	);
}

export default App;
