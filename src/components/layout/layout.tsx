/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
// import { useStaticQuery, graphql } from "gatsby"
import { connect, ConnectedProps } from "react-redux";
import Header from "./header"
import Footer from "./footer";

interface LayoutProps  {
  application: {
    toggle: boolean
  }
}

const mapState = (state: LayoutProps) => ({
  toggle: state.application.toggle
})

const connector = connect(mapState);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {
  children: any,
};


const Layout = ({ toggle, children }:Props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}
export default connector(Layout);
