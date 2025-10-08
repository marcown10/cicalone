import styled from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const FooterSection = styled.footer`
  background: #0a1930;
  color: white;
  padding: 4rem 2rem 2rem;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const Logo = styled.h3`
  font-size: 1.5rem;
  color: white;
  margin-bottom: 1rem;
`

const Text = styled.p`
  color: #a0aec0;
  line-height: 1.6;
`

const LinkList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

const LinkItem = styled.li`
  a {
    color: #a0aec0;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #4a90e2;
    }
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`

const SocialIcon = styled.a`
  color: #a0aec0;
  font-size: 1.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #4a90e2;
    transform: translateY(-2px);
  }
`

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(160, 174, 192, 0.2);
  color: #a0aec0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  svg {
    color: #e53e3e;
  }
`

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <Grid>
          <Column>
            <Logo>Marco Bruno</Logo>
            <Text>
              Full Stack Developer passionate about creating innovative web solutions
              and sharing knowledge with the developer community.
            </Text>
            <SocialLinks>
              <SocialIcon href="https://github.com/marcown10" target="_blank">
                <FaGithub />
              </SocialIcon>
              <SocialIcon href="https://twitter.com/marcobruno" target="_blank">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/in/marcobruno" target="_blank">
                <FaLinkedin />
              </SocialIcon>
            </SocialLinks>
          </Column>
          <Column>
            <h4>Quick Links</h4>
            <LinkList>
              <LinkItem><Link to="/skills">Skills</Link></LinkItem>
              <LinkItem><Link to="/blog">Blog</Link></LinkItem>
              <LinkItem><Link to="/contact">Contact</Link></LinkItem>
            </LinkList>
          </Column>
          <Column>
            <h4>Contact Info</h4>
            <LinkList>
              <LinkItem>Email: hello@marcobruno.dev</LinkItem>
              <LinkItem>Location: Milan, Italy</LinkItem>
            </LinkList>
          </Column>
        </Grid>
        <Copyright>
          Made with <FaHeart /> by Marco Bruno © {new Date().getFullYear()}
        </Copyright>
      </Container>
    </FooterSection>
  )
}

export default Footer
