import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import SingleBanner from "./SingleBanner";
import "./RecomandBanner.scss";

class RecomandBanner extends Component {
  handleBannerClick = e => {
    // ! 배너 클릭했을때 페이지 이동
    // ! 해당상품 페이지 링크 업데이트 하기 루트이하 link키에 넣기.
    console.log(parseInt(e.target.id));
    console.log(e.target.id);
    this.props.history.push(`/product/detail/${parseInt(e.target.id)}`);
  };
  render() {
    const { category, seasonal } = this.props;
    // console.log("카테고리 1번배너", category, "시즈널 2번배너", seasonal);
    return (
      <div className="recomand-banner">
        {/* category banner */}
        <SingleBanner
          id={category.id}
          title="start your day"
          subTitle={"with " + category.name}
          stickerText="special pack"
          subText={category["category__name"] + " deal"}
          bgImg={category["big_image2"]}
          onClick={this.handleBannerClick}
        />
        {/* seasonal banner */}
        <SingleBanner
          id={seasonal.id}
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
