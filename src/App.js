import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import CampsitesDirectoryPage from "./pages/CampsitesDirectoryPage";
import CampsiteDetailPage from "./pages/CampsiteDetailPage";
import Header from "./component/Header";
import Footer from "./component/Footer";
import AboutPage from "./pages/AboutPage";

function App() {
	return (
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="contact" element={<ContactPage />} />
				<Route path="directory" element={<CampsitesDirectoryPage />} />
				<Route
					path="directory/:campsiteId"
					element={<CampsiteDetailPage />}
				/>
				<Route path="about" element={<AboutPage />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
