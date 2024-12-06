import React from 'react'
import Header from '../components/Layout/Header/Header'
import Blogs from '../components/Blogs/Blogs'
import Footer from '../components/Layout/Footer/Footer'

const BlogPage = () => {
  return (
    <React.Fragment>
        <Header/>
        <Blogs/>
        <Footer/>
    </React.Fragment>
  )
}

export default BlogPage