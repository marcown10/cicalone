import styled from 'styled-components'
import { FaCode, FaPencilAlt, FaLightbulb, FaRocket, FaMobile, FaServer } from 'react-icons/fa'

const FeaturesSection = styled.section`
  padding: 8rem 2rem;
  background: #ffffff;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1a365d;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 600px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`

const FeatureCard = styled.div`
  padding: 2rem;
  background: #f8fafc;
  border-radius: 12px;
  transition: all 0.3s ease;
  border: 1px solid #e2e8f0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  }
`

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: ${props => props.color};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
`

const FeatureText = styled.p`
  color: #4a5568;
  line-height: 1.6;
`

const Features = () => {
  const features = [
    {
      icon: <FaCode />,
      color: "#4a90e2",
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces with React, ensuring optimal performance and accessibility."
    },
    {
      icon: <FaServer />,
      color: "#48bb78",
      title: "Backend Development",
      description: "Creating robust server-side applications with Node.js, Express, and modern database solutions."
    },
    {
      icon: <FaMobile />,
      color: "#9f7aea",
      title: "Responsive Design",
      description: "Developing mobile-first websites that work seamlessly across all devices and screen sizes."
    },
    {
      icon: <FaRocket />,
      color: "#ed64a6",
      title: "Performance",
      description: "Optimizing applications for speed and efficiency, ensuring the best possible user experience."
    },
    {
      icon: <FaPencilAlt />,
      color: "#667eea",
      title: "Technical Writing",
      description: "Sharing knowledge through detailed articles and tutorials about web development best practices."
    },
    {
      icon: <FaLightbulb />,
      color: "#f6ad55",
      title: "Problem Solving",
      description: "Finding creative solutions to complex technical challenges in web development."
    }
  ]

  return (
    <FeaturesSection id="features">
      <Container>
        <SectionHeader>
          <Title>What I Do</Title>
          <Subtitle>
            Specialized in modern web development technologies and best practices
          </Subtitle>
        </SectionHeader>
        <Grid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper color={feature.color}>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.description}</FeatureText>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  )
}

export default Features
