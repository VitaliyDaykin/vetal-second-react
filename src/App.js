import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/contacts" element={<Contacts />} />
					<Route path="/blog" element={<Blog />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
