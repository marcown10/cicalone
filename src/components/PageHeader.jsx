import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
`

const HomeButton = styled(Link)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #4a90e2;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: #357abd;
    transform: translateY(-50%) translateX(-2px);
  }

  @media (max-width: 768px) {
    position: static;
    transform: none;
    margin-bottom: 2rem;
    display: inline-flex;
    
    &:hover {
      transform: translateX(-2px);
    }
  }
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
      <HomeButton to="/">
        <FaHome /> Home
      </HomeButton>
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
