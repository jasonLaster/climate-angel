import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import Setup from "../components/setup"

export default () => (
  <Setup>
   <h2 id="start-investing">Start Investing</h2>

   <h3 id="find-syndicates">1. Find syndicates</h3>
   <p>Once you're an accredited investor you can view the syndicates <a href="https://angel.co/invest/syndicates">page </a>focusing on climate on the Angellist platform.</p>
   <p>The angels listed on the <Link to="/">homepage</Link> are a great place to start too.</p>

   <Image alt="Gatsby in Space" filename="find-syndicates.png" />

   <h3 id="apply-to-syndicate">2. Apply to a Syndicate</h3>

   <p>When you find an investor who you want to invest alongside of, you can apply to join their syndicate.
   </p>



   <p>The application is fairly short and should focus on three things: your background, your investment goals, and what you like about them.</p>

   <description>
     <p>Hi Jude,</p>
     <p>
       I'm reaching out because I appreciate your goal of accelerating business and science.
      As a lead on Firefox DevTools, I'm working on making web development more approachable and affordable.
     </p>
     <p>As an investor, I hope to support companies that will make tech more accessible and the climate more sustainable.</p>
   </description>

   <Image alt="Gatsby in Space" filename="syndicate.png" />

   <div className="faq"> Checkout Angellist's syndicate resources <a href="https://angel.co/help/syndicates">here</a>.</div>


   <h3 id="review-invited-deals">3. Review invited deals</h3>

   <Image alt="Review invited deals" filename="invited-deals.png" />

   <h3>4. Invest in deals</h3>
  </Setup>
)
