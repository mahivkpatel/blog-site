import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Layout from "./layout"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        background: "rebeccapurple",
        marginBottom: "1.45rem",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "1.45rem 1.0875rem",
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Gatsby
          </Link>
          <ul style={{ listStyle: "none", float: "right" }}>
            <li style={{ display: "inline-block", marginRight: "1rem" }}>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "x-large",
                }}
                activeStyle={{ color: "red" }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li style={{ display: "inline-block", marginRight: "1rem" }}>
              <Link
                activeStyle={{ color: "red" }}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "x-large",
                }}
                to="/page-2"
              >
                Page 2
              </Link>
            </li>
            <li style={{ display: "inline-block", marginRight: "1rem" }}>
              <Link
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "x-large",
                }}
                activeStyle={{ color: "red" }}
                to="/page-3"
              >
                Page 3
              </Link>
            </li>
            <li style={{ display: "inline-block", marginRight: "1rem" }}>
              <Link
                to="/about"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "x-large",
                }}
                activeStyle={{ color: "red" }}
              >
                About
              </Link>
            </li>
          </ul>
        </h1>
      </div>
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
