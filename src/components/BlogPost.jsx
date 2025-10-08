import styled from 'styled-components'

const Article = styled.article`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const PostImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`

const PostContent = styled.div`
  padding: 2rem;
`

const PostTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`

const PostMeta = styled.div`
  color: #666;
  margin-bottom: 1rem;
  font-size: 0.9rem;
`

const PostBody = styled.div`
  line-height: 1.8;
  color: #444;
`

const BlogPost = ({ post }) => {
  return (
    <Article>
      <PostImage src={post.image} alt={post.title} />
      <PostContent>
        <PostTitle>{post.title}</PostTitle>
        <PostMeta>
          <time>{post.date}</time> • {post.readTime} min read
        </PostMeta>
        <PostBody>{post.content}</PostBody>
      </PostContent>
    </Article>
  )
}

export default BlogPost
