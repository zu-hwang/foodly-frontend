import React, { Component } from "react";
import Main from "../../Pages/Main/Main";
import OverlayBanner from "../MainContent/OverlayBanner/OverlayBanner";
import RecomandBanner from "./RecomandBanner/RecomandBanner";
import "./MainContent.scss";

class MainContent extends Component {
  render() {
    return (
      <div className="main-container">
        <Main>
          <OverlayBanner />
          <RecomandBanner />
        </Main>
      </div>
    );
  }
}

export default MainContent;
