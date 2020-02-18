import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <h2>Overview</h2>
    <h2>Exciting Companies</h2>
    <h2>Steps to for getting involved</h2>
      <li>Meet climate investors</li>
      <li>Invest alongside climate angels</li>

    <Link to="/page-2/">Getting Started</Link>
  </Layout>
)

export default IndexPage
