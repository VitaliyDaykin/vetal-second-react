import { Container, Navbar, Nav, Form, Button, FormControl } from 'react-bootstrap';

import { Link } from "react-router-dom"
import logo from '../imges/logo.png';



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
							<Nav.Link><Link to="/">Home</Link></Nav.Link>
							<Nav.Link><Link to="/about">About as</Link></Nav.Link>
							<Nav.Link><Link to="/contacts">Contacts</Link></Nav.Link>
							<Nav.Link><Link to="/blog">Blor</Link></Nav.Link>
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



		</>
	);
}

export default Header;


