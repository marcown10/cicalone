import styled from 'styled-components'
import { motion } from 'framer-motion'
import BlogPost from '../components/BlogPost'
import PageHeader from '../components/PageHeader'

const BlogPage = styled.div`
  padding: 120px 2rem 4rem;
  background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
  min-height: 100vh;
`

// ... rest of the styled components ...

const Blog = () => {
  return (
    <BlogPage>
      <Container>
        <PageHeader 
          title="Latest Articles"
          description="Thoughts and insights about web development, technology, and best practices"
        />
        {/* Rest of the Blog component content */}
      </Container>
    </BlogPage>
  )
}

export default Blog
