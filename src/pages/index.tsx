import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
//Redux
import { connect, ConnectedProps } from "react-redux";
import { InitialState } from '../state/store';

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
// import Header from "../components/header";

import Landing from "../components/home/Landing";
import Bio from "../components/home/Bio";
import Menus from "../components/home/Menus";
import Booking from "../components/home/Booking";
import HomeGallery from "../components/home/HomeGallery";
import WhatsOn from "../components/home/WhatsOn";
import Information from "../components/home/Information";
import Map from "../components/home/Map";


const mapState = (state:InitialState) => ({
  gallery: state.gallery,
  application: state.application
})

const mapDispatch = {
  toggleGallery : (payload: boolean) => ({type: "TOGGLE_GALLERY", payload: payload})
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux

const IndexPage = ({application}: Props) => (
  <Layout>
    <SEO title="Home" />
      <Landing />
      <Menus />
      <Booking />
      <HomeGallery />
      <WhatsOn />
      <Information />
  </Layout>
)


export default connector(IndexPage)
