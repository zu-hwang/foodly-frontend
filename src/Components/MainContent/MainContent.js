import React, { Component } from "react";
import Main from "../../Pages/Main/Main";
import OverlayBanner from "../MainContent/OverlayBanner/OverlayBanner";
import RecomandBanner from "./RecomandBanner/RecomandBanner";
import RecomandSlide from "./RecomandSlide/RecomandSlide";
import Bundle from "../../Components/Bundle/Bundle";
import "./MainContent.scss";

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      productList: [], // 슬라이드배너
      categoryDeal: [], // 2단 1번째
      seasonalDeal: [], // 2단 2번째
      bundleDeal: []
    };
  }

  componentDidMount = () => {
    // ! 아래 목데이터
    // fetch("http://localhost:3000/Data/MainContent.json", {
    //   method: "GET"
    // })
    //   .then(res => res.json())
    //   .then(result => {
    //     // console.log(result.data);
    //     this.setState(
    //       {
    //         productList: result.data["recommand_product"],
    //         categoryDeal: result.data["category_deal"][0],
    //         seasonalDeal: result.data["seasonal_deal"][0],
    //         bundleDeal: result.data["bundle_deal"]
    //       },
    //       () => {
    //         // console.log(this.state);
    //       }
    //     );
    //   })
    //   .catch(err => console.log(err));

    // ! 아래 API연결. 서버연결되면 주석 해제하기
    const requestOptions = {
      method: "GET"
    };
    fetch("http://10.58.5.105:8000", requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log("연결해보자", result.data["category_deal"]);
        this.setState({
          productList: result.data["recommand_product"],
          categoryDeal: result.data["category_deal"][0],
          seasonalDeal: result.data["seasonal_deal"][0],
          bundleDeal: result.data["bundle_deal"]
        });
      })
      .catch(error => console.log("error", error));
  };

  render() {
    const { categoryDeal, productList, seasonalDeal, bundleDeal } = this.state;
    // console.log(categoryDeal[0], seasonalDeal[0]);
    return (
      <div className="main-container">
        <Main>
          <OverlayBanner />
          <RecomandBanner category={categoryDeal} seasonal={seasonalDeal} />
          <RecomandSlide data={productList} leng={productList.length} />
          <Bundle data={bundleDeal} />
        </Main>
      </div>
    );
  }
}

export default MainContent;
