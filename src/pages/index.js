import React from "react"
import { Link, useStaticQuery } from "gatsby"
import Angel from "../components/Angel"
import Layout from "../components/layout"
import SEO from "../components/seo"

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
                    fixed(
                      width: 140
                      height: 140
                      fit: CONTAIN
                      background: "white"
                    ) {
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

  const headerContent = (
    <>
      <p>
        Climate change is fueling the largest economic transformation since the
        industrial revolution and startups are meeting the challenge with break
        throughs in clean energy, agriculture, and transportation.{" "}
      </p>
      <p>
        But on an individual level, the solutions can feel out of reach. It
        doesn’t have to feel that way, it is possible to invest in startups
        today that are addressing the climate crisis head on.{" "}
      </p>
    </>
  )

  return (
    <Layout page="home" headerContent={headerContent}>
      <SEO title="Home" />
      <h3>Angel Investors</h3>
      <div className="angels">
        {angels.edges.map(angel => (
          <Angel angel={angel.node.data} />
        ))}
      </div>
    </Layout>
  )
}
// <iframe class="airtable-embed" src="https://airtable.com/embed/shrBwP0cNkVmHQQtK?backgroundColor=pink&viewControls=on" frameborder="0" onmousewheel="" width="100%" height="1800"></iframe>

export default IndexPage
