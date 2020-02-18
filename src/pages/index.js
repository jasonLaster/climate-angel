import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Angel from "../components/Angel"
import Layout from "../components/layout"
import SEO from "../components/seo"


    // <h2>Overview</h2>
    // <h2>Exciting Companies</h2>
    // <h2>Steps to for getting involved</h2>
    //   <li>Meet climate investors</li>
    //   <li>Invest alongside climate angels</li>
    // <Link to="/page-2/">Getting Started</Link>

function useFetchAngels() {
  return useStaticQuery(graphql`
    query AngelsQuery {
      angels: allAirtable {
        edges {
          node {
            id
            data {
              Name
              Notes
              Profile
              Tagline
              Attachments {
                localFiles {
                  childImageSharp {
                    fixed(width: 140, height: 140, fit: CONTAIN, background: "white") {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
}

const IndexPage = () => {
  const { angels } = useFetchAngels()

  const headerContent = <>
    <p>Climate change is triggering the largest economic transformation since the industrial revolution. Startups are pioneering break throughs in clean energy, agriculture, transportation at an incredible pace. </p>
    <p>But often, on an individual level, the challenges feel insurmountable and the solutions feel out of reach. It doesn’t have to be that way, it is possible to invest in the future today and take concrete actions that create real change. </p>
  </>

  return <Layout page="home" headerContent={headerContent}>
    <SEO title="Home" />
    <h3>Angel Investors</h3>
    <div className="angels">
      {angels.edges.map(angel => <Angel angel={angel.node.data} />)}
    </div>
  </Layout>
}
// <iframe class="airtable-embed" src="https://airtable.com/embed/shrBwP0cNkVmHQQtK?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="1800"></iframe>

export default IndexPage
