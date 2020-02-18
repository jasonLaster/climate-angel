import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Setup from "../components/setup"

export default () => (
  <Setup>
    <h2 id="become-an-investor"> Become an Investor</h2>

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
  </Setup>
)
