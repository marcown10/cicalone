import React from 'react'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'
import PageHeader from '../components/PageHeader'
import styled from 'styled-components'

const ContactPage = styled.div`
  padding: 120px 2rem 4rem;
  background: linear-gradient(135deg, #f8fafc 0%, #edf2f7 100%);
  min-height: 100vh;
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const ContactPageComponent = () => {
  return (
    <ContactPage>
      <Container>
        <PageHeader 
          title="Get in Touch"
          description="Have a project in mind? Let's discuss how we can work together to create something amazing."
        />
        <Contact />
      </Container>
    </ContactPage>
  )
}

export default ContactPageComponent
