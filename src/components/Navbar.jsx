import styled from 'styled-components'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 1rem 2rem;
  background: rgba(26, 26, 26, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #4a90e2;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <Container>
        <Logo href="#">Marco Bruno</Logo>
        <NavLinks>
          <NavLink href="#blog">Blog</NavLink>
          <NavLink href="#about">About</NavLink>
        </NavLinks>
      </Container>
    </Nav>
  )
}

export default Navbar
