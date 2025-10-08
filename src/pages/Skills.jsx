import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FaCode, FaDatabase, FaCloud, FaTools, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'

const SkillsPage = styled.div`
  padding: 120px 2rem 4rem;
  background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
  min-height: 100vh;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`

const SkillCategory = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  color: #2d3748;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #4a90e2;
  }
`

const SkillList = styled.ul`
  list-style: none;
`

const SkillItem = styled(motion.li)`
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8fafc;
  border-radius: 8px;
  color: #4a5568;

  &:last-child {
    margin-bottom: 0;
  }
`

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: ["React.js", "Next.js", "TypeScript", "Styled Components", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <FaDatabase />,
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "RESTful APIs"]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud />,
      skills: ["AWS", "Docker", "CI/CD", "Git", "Linux"]
    },
    {
      title: "Development Tools",
      icon: <FaTools />,
      skills: ["VS Code", "Webpack", "Jest", "Postman", "Git"]
    },
    {
      title: "Web Technologies",
      icon: <FaLaptopCode />,
      skills: ["HTML5", "CSS3", "JavaScript", "WebSockets", "GraphQL"]
    },
    {
      title: "Mobile & Responsive",
      icon: <FaMobileAlt />,
      skills: ["React Native", "Mobile-First Design", "Progressive Web Apps"]
    }
  ]

  return (
    <SkillsPage>
      <Container>
        <PageHeader 
          title="Technical Skills"
          description="With over 5 years of experience in web development, I've developed a comprehensive skill set across the full stack, focusing on modern technologies and best practices."
        />
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <CategoryTitle>
                {category.icon}
                {category.title}
              </CategoryTitle>
              <SkillList>
                {category.skills.map((skill, skillIndex) => (
                  <SkillItem
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  >
                    {skill}
                  </SkillItem>
                ))}
              </SkillList>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsPage>
  )
}

export default Skills
