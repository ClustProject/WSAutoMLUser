import React from 'react';

import {Divider} from "@mui/material";

import Header from "../presentational/header/Header";
import MainAppBar from "../presentational/appbar/MainAppBar";
import HomeBanner from "../presentational/banner/HomeBanner";
import DataTreeMap from "../presentational/treemap/DataTreeMap";
import ContentMediaCards from "../presentational/cards/ContentMediaCards";
import Footer from "../presentational/footer/Footer";

export default function MainPageContainer() {
  return (
    <>
      <Header/>
      <MainAppBar/>
      <HomeBanner/>
      <DataTreeMap/>
      <ContentDivider/>
      <ContentMediaCards/>
      <ContentDivider/>
      <Footer/>
    </>
  );
}

function ContentDivider() {
  return <Divider sx={{
    margin: "25px"
  }}/>;
}
