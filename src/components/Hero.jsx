import styled, { keyframes, css } from 'styled-components'
import { FaGithub, FaTwitter, FaLinkedin, FaArrowDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const slideIn = keyframes`
  from { transform: translateX(-100px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
`

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #0a1930 0%, #1a365d 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`

const TextContent = styled.div`
  ${css`animation: ${slideIn} 1s ease-out;`}
`

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  span {
    background: linear-gradient(45deg, #4a90e2, #63b3ed);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const Subtitle = styled.p`
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  color: #a0aec0;
  margin-bottom: 2rem;
  line-height: 1.6;
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`

const PrimaryButton = styled.span`
  display: inline-block;
  padding: 1rem 2rem;
  background: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: #357abd;
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  }
`

const SecondaryButton = styled(PrimaryButton)`
  background: transparent;
  border: 2px solid #4a90e2;
  
  &:hover {
    background: rgba(74, 144, 226, 0.1);
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
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

const ImageContainer = styled.div`
  position: relative;
  ${css`animation: ${slideIn} 1s ease-out 0.3s backwards;`}
  
  @media (max-width: 768px) {
    display: none;
  }
`

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
`

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
              <PrimaryButton>View Skills</PrimaryButton>
            </Link>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              <SecondaryButton>Contact Me</SecondaryButton>
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
