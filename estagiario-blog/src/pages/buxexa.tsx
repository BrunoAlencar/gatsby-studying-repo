import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BuxexaPage = () => (
  <Layout>
    <SEO title="Page Buxexa" />
    <h1>Hi from buxexa</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BuxexaPage
