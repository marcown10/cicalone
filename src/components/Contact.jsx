import styled from 'styled-components'
import { FaPaperPlane } from 'react-icons/fa'

const ContactSection = styled.section`
  padding: 8rem 2rem;
  background: #ffffff;
`

const Container = styled.div`
  max-width: 800px;
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

const Form = styled.form`
  display: grid;
  gap: 2rem;
  background: #f8fafc;
  padding: 3rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Label = styled.label`
  color: #2d3748;
  font-weight: 500;
`

const Input = styled.input`
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
  }
`

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #357abd;
    transform: translateY(-2px);
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
  }

  return (
    <ContactSection id="contact">
      <Container>
        <SectionHeader>
          <Title>Get in Touch</Title>
          <Subtitle>
            Have a question or want to work together? Drop me a message!
          </Subtitle>
        </SectionHeader>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea id="message" required />
          </InputGroup>
          <SubmitButton type="submit">
            Send Message
            <FaPaperPlane />
          </SubmitButton>
        </Form>
      </Container>
    </ContactSection>
  )
}

export default Contact
