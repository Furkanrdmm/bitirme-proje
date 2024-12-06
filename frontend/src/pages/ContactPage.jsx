import React from 'react'
import Header from '../components/Layout/Header/Header'
import Contact from '../components/Contact/Contact'
import Policy from '../components/Layout/Policy/Policy'
import Footer from '../components/Layout/Footer/Footer'

const ContactPage = () => {
  return (
    <React.Fragment>
        <Header/>
        <Contact/>
        <Policy/>
        <Footer/>

        
    </React.Fragment>
  )
}

export default ContactPage