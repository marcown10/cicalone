import styled, { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%);
  padding: 2rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, rgba(74, 144, 226, 0.1) 0%, rgba(99, 179, 237, 0.1) 100%);
    pointer-events: none;
  }
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  color: white;
  ${css`animation: ${fadeIn} 1s ease-out;`}
  z-index: 1;
`

const Title = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #4a90e2, #63b3ed);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
`

const Subtitle = styled.p`
  font-size: clamp(1.2rem, 3vw, 1.5rem);
  margin-bottom: 2rem;
  color: #9ca3af;
  max-width: 600px;
`

const Button = styled.a`
  display: inline-block;
  padding: 1rem 2rem;
  background: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
  }
`

const Hero = () => {
  return (
    <HeroSection>
      <Content>
        <Title>Marco Bruno</Title>
        <Subtitle>
          Exploring the intersection of technology, design, and creative development. 
          Join me on this journey of continuous learning and innovation.
        </Subtitle>
        <Button href="#features">Discover More</Button>
      </Content>
    </HeroSection>
  )
}

export default Hero
