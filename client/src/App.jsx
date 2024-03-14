import { Outlet } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
// Define the main App component
function App() {
	return (
		// Fragment to wrap multiple elements
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}
// Export the App component as default
export default App;
