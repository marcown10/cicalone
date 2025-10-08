import styled from 'styled-components'
import { FaClock, FaCalendar } from 'react-icons/fa'

const Article = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const PostImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`

const PostContent = styled.div`
  padding: 2rem;
`

const PostTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2d3748;
  line-height: 1.4;
`

const PostMeta = styled.div`
  display: flex;
  gap: 1.5rem;
  color: #718096;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const PostBody = styled.p`
  line-height: 1.8;
  color: #4a5568;
  margin-bottom: 1.5rem;
`

const ReadMore = styled.a`
  color: #4a90e2;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`

const BlogPost = ({ post }) => {
  return (
    <Article>
      <PostImage src={post.image} alt={post.title} />
      <PostContent>
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          <MetaItem>
            <FaCalendar />
            {post.date}
          </MetaItem>
          <MetaItem>
            <FaClock />
            {post.readTime} min read
          </MetaItem>
        </PostMeta>
        <PostBody>{post.content}</PostBody>
        <ReadMore href="#">
          Read More →
        </ReadMore>
      </PostContent>
    </Article>
  )
}

export default BlogPost
