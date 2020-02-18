import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, headerContent, activePage }) => (
  <header>

    <div className="nav">
    <div className="wrapper">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className="links">
        <a href="/setup-1">Getting Setup</a>
        
      </div>
    </div>
    </div>

    <div className="body">
      {activePage && <h2>{activePage}</h2>}
      <div className={`description ${!activePage && 'center'}`}>{headerContent}</div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
