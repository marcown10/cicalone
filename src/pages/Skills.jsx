import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaCloud, FaTools, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'

const SkillsPage = styled.div`
  padding: 120px 2rem 4rem;
  background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
  min-height: 100vh;
`

// ... rest of the styled components ...

const Skills = () => {
  return (
    <SkillsPage>
      <Container>
        <PageHeader 
          title="Technical Skills"
          description="With over 5 years of experience in web development, I've developed a comprehensive skill set across the full stack, focusing on modern technologies and best practices."
        />
        {/* Rest of the Skills component content */}
      </Container>
    </SkillsPage>
  )
}

export default Skills
