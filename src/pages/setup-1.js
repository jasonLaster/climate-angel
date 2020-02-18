import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import SetupToc from "../components/setupToc"

import "./setup.css"

const SecondPage = () => {
  const headerContent = <p>
  Climate Angel is your guide to climate investing. First, we will setup your Angellist account and then we will help you apply to Lead Investors (called syndicates) who will invite you to join their investments.
   </p>


  return <Layout headerContent={headerContent} activePage="Getting Setup">
    <SEO title="Getting Setup" />
    <div className="setup">
      <SetupToc />
      <div className="content">
        <h2 id="become-an-investor"> Become an Investor</h2>
        <p>The first step to creating an account is clicking on the    <a href="angellist.com">Join page</a> in the top right.
        The first step to creating an account is clicking on the    <a href="angellist.com">Join page</a> in the top right.</p>

        <h3 id="create-account">1. Create an Angellist account</h3>
        <p>The first step to creating an account is clicking on the    <a href="angellist.com">Join page</a> in the top right.</p>
        <Image alt="Gatsby in Space" filename="sign-up.png" />

        <h3 id="apply-to-be-an-investor">2. Apply to become an investor</h3>
        <p> Now that you have an angellist account, you can go to the <a href="https://angel.co/v/start-investing">Start Investing</a> page and apply to become an investor!</p>
        <p>You'll be asked about your experience, goals, and accredidation status. Don't worry, it takes less than 10 minutes and you don't have to have investment experience.</p>
        <Image alt="Gatsby in Space" filename="investor.png" />


        <h3 id="accredidation">3. Provide accredidation documents</h3>


        <p>Once your investment profile is approved you'll be able to become certified as an accredited investor.</p>

        <p>You can go to the form by clicking on your avatar, selecting settings, and investor status. Or you can click <a href="https://angel.co/accreditation_evidences/new">here</a> to go directly and upload documents to confirm your status.</p>

        <p className="faq">Checkout Angellist's accredidation resources <a href="https://angel.co/help/accreditation">here</a>.</p>

        <Image alt="Gatsby in Space" filename="accredidation.png" />

        <div className="next">
        <Link to="/setup-2"> Become an Investor</Link> ⭢
        </div>
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
