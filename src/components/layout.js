/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children, headerContent, activePage, page }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div className={`page ${page}`}>
        <Header siteTitle={data.site.siteMetadata.title} activePage={activePage} headerContent={headerContent} />
        <main>{children}</main>
        <footer>
          <div class="wrapper">
            <a href="https://github.com/jasonlaster/climate-angel">Contribute</a>
            <a href="mailto:jason.laster.11@gmail.com">Contact</a>  
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
