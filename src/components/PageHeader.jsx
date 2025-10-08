import styled from 'styled-components'
import { motion } from 'framer-motion'

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`

const Title = styled(motion.h1)`
  font-size: 3rem;
  color: #1a365d;
  margin-bottom: 1.5rem;
`

const Description = styled(motion.p)`
  font-size: 1.2rem;
  color: #4a5568;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`

const PageHeader = ({ title, description }) => {
  return (
    <Header>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </Title>
      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {description}
      </Description>
    </Header>
  )
}

export default PageHeader
