import * as React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="not-found-container">
        <h3>404 Page not found</h3>
        <p>Head back home by clicking down below.</p>
        <Link to="/">
          <span className="btn-bg"></span>
          <p>Back home</p>
        </Link>
    </div>
  </Layout>
)

export default NotFoundPage
