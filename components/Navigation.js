import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';

class Navigation extends React.Component {
    constructor(...args) {
      super(...args);
      this.state = { };
    }

    render(){
      return(
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
          <Navbar.Brand className="ml-5" href="/"><img src="static/images/acst.png" className=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="Expand-Monetization" href="/"> </Nav.Link>
          </Nav>
          <Nav className="mr-5">
          <Nav.Link href="/"> Logout </Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
}

export default Navigation
