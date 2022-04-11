import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div>

      <Navbar bg="dark" variant="dark" className="mb-3">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Link className="nav-link" to="/filmes/populares">Populares</Link>
            <Link className="nav-link" to="/filmes/lancamentos">Lancamentos</Link>
            <Link className="nav-link" to="/filmes/cartaz">Cartaz</Link>
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Menu