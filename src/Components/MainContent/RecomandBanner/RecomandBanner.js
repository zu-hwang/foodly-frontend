import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SingleBanner from "./SingleBanner";
import "./RecomandBanner.scss";

class RecomandBanner extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleBannerClick = e => {
    // ! 배너 클릭했을때 페이지 이동
    // ! 해당상품 페이지 링크 업데이트 하기 루트이하 link키에 넣기.
    this.props.history.push("/");
  };
  // componentDidMount = () => {
  //   fetch("http://localhost:3000/Data/MainContent.json")
  //     .then(data => data.json())
  //     .then(data => {
  //       this.setState({ data: data.recomandBanner });
  //     });
  // };
  render() {
    const { category, seasonal } = this.props;
    return (
      <div className="recomand-banner">
        {/* category banner */}
        <SingleBanner
          id={category.id + "-single-banner-key"}
          title="start your day"
          subTitle={"with " + category.name}
          stickerText="special pack"
          subText={category["category__name"] + " deal"}
          bgImg={category["big_image2"]}
          // link={category.link}
          onClick={this.handleBannerClick}
        />
        {/* seasonal banner */}
        <SingleBanner
          id={seasonal.id + "-single-banner-key"}
          title={seasonal.name}
          subTitle={""}
          stickerText={seasonal["discount_rate"] + "% discount"}
          subText={seasonal["season_id__name"] + " deal"}
          bgImg={seasonal["big_image1"]}
          onClick={this.handleBannerClick}
        />
      </div>
    );
  }
}
export default withRouter(RecomandBanner);
