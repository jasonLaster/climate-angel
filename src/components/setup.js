import React from "react"
import { Link } from "gatsby"

import Layout from "./layout"
import SEO from "./seo"
import Image from "./image"
import SetupToc from "./setupToc"

import "./setup.css"

const SecondPage = ({ children }) => {
  const headerContent = <p>
  Climate Angel is your guide to climate investing. First, we will setup your Angellist account and then we will help you apply to Lead Investors (called syndicates) who will invite you to join their investments.
   </p>

  return <Layout headerContent={headerContent} activePage="Getting Setup">
    <SEO title="Getting Setup" />
    <div className="setup">
    <SetupToc/>
    <div className="content">
      {children}
    </div>
    </div>
  </Layout>
}

/*
  - add toc
  - add email Link at the bottom
  - add overview as part of the header
  -

*/

export default SecondPage
