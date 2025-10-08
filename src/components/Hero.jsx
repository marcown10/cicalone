import styled, { keyframes, css } from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

// ... existing styled components ...

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #a0aec0;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: #4a90e2;
    transform: translateX(-50%) translateY(-2px);
  }
`

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`

const ScrollIcon = styled(FaArrowDown)`
  animation: ${bounce} 2s infinite;
`

const ScrollText = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`

const Hero = () => {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features')
    featuresSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeroSection>
      <Content>
        <TextContent>
          <Title>
            Ciao, sono <span>Marco Bruno</span>
          </Title>
          <Subtitle>
            Full Stack Developer specializzato in React e Node.js. 
            Creo soluzioni web innovative e scalabili, 
            con un focus sulla user experience e le best practices.
          </Subtitle>
          <ButtonGroup>
            <Link to="/skills" style={{ textDecoration: 'none' }}>
              <PrimaryButton as="span">View Skills</PrimaryButton>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <SecondaryButton as="span">Contact Me</SecondaryButton>
            </Link>
          </ButtonGroup>
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
        </TextContent>
        <ImageContainer>
          <HeroImage 
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800" 
            alt="Developer workspace"
          />
        </ImageContainer>
      </Content>
      <ScrollIndicator onClick={scrollToFeatures}>
        <ScrollIcon />
        <ScrollText>Scroll Down</ScrollText>
      </ScrollIndicator>
    </HeroSection>
  )
}

export default Hero
