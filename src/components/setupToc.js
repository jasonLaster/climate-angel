import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SetupToc = () => (
  <div className="toc"> <div className="wrapper">
    <h4><a href="/setup-1/#become-an-investor">Become an Investor</a></h4>
    <li><a href="/setup-1/#create-account">1. Create an Angellist account</a></li>
    <li><a href="/setup-1/#apply-to-be-an-investor">2. Apply to become an investor</a></li>
    <li><a href="/setup-1/#accredidation">3. Provide accredidation documents</a></li>
    <h4><a href="/setup-2/#start-investing">Start Investing</a></h4>
    <li><a href="/setup-2/#find-syndicates">1. Find syndicates</a></li>
    <li><a href="/setup-2/#apply-to-syndicate">2. Apply to a Syndicate</a></li>
    <li><a href="/setup-2/#review-invited-deals">3. Review invited deals</a></li>
    <li><a href="/setup-2/#invest">4. Invest in deals</a></li>
    </div>
  </div>
)

/*
  - add toc
  - add email Link at the bottom
  - add overview as part of the header
  -

*/

export default SetupToc
