import styled from 'styled-components'
import BlogPost from './BlogPost'

const BlogSection = styled.section`
  padding: 6rem 2rem;
  background: #f8f9fa;
`

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

const BlogTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #333;
`

const Blog = () => {
  const posts = [
    {
      title: "The Journey of a Web Developer",
      date: "October 15, 2023",
      readTime: 5,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      content: "As a web developer, every day brings new challenges and opportunities to learn..."
    },
    {
      title: "Modern Web Development Practices",
      date: "October 10, 2023",
      readTime: 7,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      content: "In today's rapidly evolving tech landscape, staying updated with modern practices..."
    }
  ]

  return (
    <BlogSection>
      <Container>
        <BlogTitle>Marco Bruno's Blog</BlogTitle>
        {posts.map((post, index) => (
          <BlogPost key={index} post={post} />
        ))}
      </Container>
    </BlogSection>
  )
}

export default Blog
