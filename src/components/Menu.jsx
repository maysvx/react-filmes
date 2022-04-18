import React from 'react'
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className="shadow-lg bg-white rounded">

      <Navbar bg="dark" variant="dark" className="shadow-lg rounded navbar" fixed="top" >
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <NavDropdown title="Filmes" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/filmes/populares">Populares</Link>
              <Link className="dropdown-item" to="/filmes/cartaz">Cartaz</Link>
              <Link className="dropdown-item" to="/filmes/lancamentos">Lançamentos</Link>
            </NavDropdown>
            <NavDropdown title="Series de Tv" className="show" id="basic-nav-dropdown">
              <Link className="dropdown-item" to="/series/populares">Populares</Link>
              <Link className="dropdown-item" to="series/lancamentos">lançamentos</Link>
              <Link className="dropdown-item" to="series/no-ar">No ar</Link>
            </NavDropdown>
            
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu