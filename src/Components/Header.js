import { Container, Navbar, Nav, Form, Button, NavLink, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import logo from '../imges/logo.png';

import Home from '../Pages/Home';
import About from '../Pages/About';
import Contacts from '../Pages/Contacts';
import Blog from '../Pages/Blog';

function Header() {
	return (
		<>
			<Navbar fixed='top' collapseOnSelect expand="md" bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">
						<img
							src={logo}
							width="30"
							height="30"
							className="d-inline-block align-top"
							alt=" logo"
						/> React site
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
							<Nav.Link><NavLink to="/about">About as</NavLink></Nav.Link>
							<Nav.Link><NavLink to="/contacts">Contacts</NavLink></Nav.Link>
							<Nav.Link><NavLink to="/blog">Blor</NavLink></Nav.Link>
						</Nav>
						<Form className="d-flex">
							<FormControl
								type="text"
								placeholder="Search"
								className="me-sm-2"
							/>
							<Button variant="outline-info">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Router>
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

export default Header;


