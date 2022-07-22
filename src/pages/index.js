import React from 'react'
import { Link } from'gatsby'
import Layout from '../components/Layout'


const index = () => {
  return (
    <Layout>
    <div><h1>Jeff C. Salter</h1>
    <h3>This will be my landing page.</h3>
    <p><Link to="about">This will be a link to my about page.</Link></p></div>
    </Layout>
  )
}

export default index