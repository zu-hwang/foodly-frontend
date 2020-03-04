import React, { Component } from "react";
import Main from "../../Pages/Main/Main";
import OverlayBanner from "../MainContent/OverlayBanner/OverlayBanner";
import RecomandBanner from "./RecomandBanner/RecomandBanner";
import RecomandSlide from "./RecomandSlide/RecomandSlide";
import "./MainContent.scss";

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      productList: [],
      categoryDeal: [],
      seasonalDeal: []
    };
  }

  componentDidMount = () => {
    const requestOptions = {
      method: "GET"
    };
    fetch("http://10.58.5.105:8000", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log("연결해보자", result.data["category_deal"]);
        this.setState({
          categoryDeal: result.data["category_deal"],
          productList: result.data["recommand_product"],
          seasonalDeal: result.data["seasonal_deal"]
        });
      })
      .catch(error => console.log("error", error));
  };

  render() {
    return (
      <div className="main-container">
        <Main>
          <OverlayBanner />
          <RecomandBanner
            category={this.state.categoryDeal}
            seasonal={this.state.seasonalDeal}
          />
          <RecomandSlide
            data={this.state.productList}
            index={this.state.productList.length}
          />
        </Main>
      </div>
    );
  }
}

export default MainContent;
