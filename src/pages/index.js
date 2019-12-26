import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div></div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <img
        src="https://2.bp.blogspot.com/-BMP2l6Hwvp4/TiAxeGx4CTI/AAAAAAAAD_M/XlC_mY3SoEw/s1600/panda-group-eating-bamboo.jpg"
        alt="Group of pandas eating bamboo"
      />

      <Image />
    </div>
    <Link to="/page-2/" activeStyle={{ color: "red" }}>
      Go to page 2
    </Link>
    <br />
    <Link to="/page-3" activeStyle={{ color: "red" }}>
      New Page!
    </Link>
  </Layout>
)

export default IndexPage
