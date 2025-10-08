import styled from 'styled-components'
import BlogPost from './BlogPost'

const BlogSection = styled.section`
  padding: 8rem 2rem;
  background: #f8fafc;
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
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`

const Blog = () => {
  const posts = [
    {
      title: "Modern React Development Patterns",
      date: "October 15, 2023",
      readTime: 8,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      content: "Exploring advanced React patterns including hooks, context, and performance optimization techniques..."
    },
    {
      title: "Building Scalable Node.js Applications",
      date: "October 10, 2023",
      readTime: 10,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      content: "Best practices for creating maintainable and scalable backend applications with Node.js..."
    },
    {
      title: "The Future of Web Development",
      date: "October 5, 2023",
      readTime: 6,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      content: "Exploring upcoming trends and technologies that will shape the future of web development..."
    }
  ]

  return (
    <BlogSection id="blog">
      <Container>
        <SectionHeader>
          <Title>Latest Articles</Title>
          <Subtitle>
            Thoughts and insights about web development, technology, and best practices
          </Subtitle>
        </SectionHeader>
        <Grid>
          {posts.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </Grid>
      </Container>
    </BlogSection>
  )
}

export default Blog
