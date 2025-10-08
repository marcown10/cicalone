import React from 'react'
import { motion } from 'framer-motion'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Contact />
    </motion.div>
  )
}

export default ContactPage
