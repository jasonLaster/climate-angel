import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "./faq.css"

const IndexPage = () => {
    const headerContent = <>
      <p>Climate change is triggering the largest economic transformation since the industrial revolution. Startups are pioneering break throughs in clean energy, agriculture, transportation at an incredible pace. </p>
    </>

    return <Layout page="faq" activePage="FAQ" headerContent={headerContent}>
      <SEO title="FAQ" />
      <div class="content">
        <h2>Can I invest in startups?</h2>
        <p>Climate change is triggering the largest economic transformation since the industrial revolution. Startups are pioneering break throughs in clean energy, agriculture, transportation at an incredible pace. </p>
        <p>Climate change is triggering the largest economic transformation since the industrial revolution. Startups are pioneering break throughs in clean energy, agriculture, transportation at an incredible pace. </p>

        <h2>Why invest in angellist syndicates?</h2>
        <p>Climate change is triggering the largest economic transformation since the industrial revolution. Startups are pioneering break throughs in clean energy, agriculture, transportation at an incredible pace. </p>
        <p>Climate change is triggering the largest economic transformation since the industrial revolution. Startups are pioneering break throughs in clean energy, agriculture, transportation at an incredible pace. </p>

      </div>
    </Layout>
}

export default IndexPage
