import styled from 'styled-components'
import { FaCode, FaPencilAlt, FaLightbulb } from 'react-icons/fa'

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background: white;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`

const FeatureCard = styled.div`
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: #4a90e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
`

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`

const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
`

const Features = () => {
  const features = [
    {
      icon: <FaCode />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code that follows best practices and industry standards."
    },
    {
      icon: <FaPencilAlt />,
      title: "Technical Writing",
      description: "Sharing knowledge through detailed articles and tutorials about web development."
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "Exploring new technologies and creative solutions to modern development challenges."
    }
  ]

  return (
    <FeaturesSection id="features">
      <Container>
        <Grid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <IconWrapper>{feature.icon}</IconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureText>{feature.text}</FeatureText>
            </FeatureCard>
          ))}
        </Grid>
      </Container>
    </FeaturesSection>
  )
}

export default Features
