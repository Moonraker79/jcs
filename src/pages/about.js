import React from 'react'
import { Link } from'gatsby'
import Layout from '../components/Layout'

const about = () => {
  return (
    <Layout>
    <main><h1>This is my about page.</h1>
    <p><Link to="/">Back to the Home Page.</Link></p>
    </main>
    </Layout>
  )
}

export default about