import React, { Component } from "react";
import Main from "../../Pages/Main/Main";
import OverlayBanner from "../MainContent/OverlayBanner/OverlayBanner";
import "./MainContent.scss";

class MainContent extends Component {
  render() {
    return (
      <Main>
        <OverlayBanner />
      </Main>
    );
  }
}

export default MainContent;
