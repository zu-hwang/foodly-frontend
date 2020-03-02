import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CircleBtn from "./CircleBtn";
import PriceSticker from "./PriceSticker";
import MainTitle from "./MainTitle";
import "./OverlayBanner.scss";

class OverlayBanner extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      selectedId: 0,
      title: "",
      subTitle: "",
      price: "",
      priceText: "",
      bgImg: "",
      buttonImg: "",
      link: ""
    };
  }

  handleBtnClick = e => {
    // console.log(e.target.id);
    const id = parseInt(e.target.id);
    this.setState({
      selectedId: id,
      title: this.state.data[id].title,
      subTitle: this.state.data[id].subTitle,
      price: this.state.data[id].price,
      priceText: this.state.data[id].priceText,
      bgImg: this.state.data[id].bgImg,
      buttonImg: this.state.data[id].buttonImg,
      link: this.state.data[id].link
    });
  };
  handleTextClick = e => {
    // ! 글자 클릭했을때 해당 상품으로 이동!
    this.props.history.push("/");
  };
  componentDidMount() {
    fetch("http://localhost:3000/Data/MainContent.json")
      .then(data => data.json())
      .then(data => {
        // console.log("data", data.overlayBanner);
        this.setState({
          data: data.overlayBanner,
          selectedId: data.overlayBanner[0].id,
          title: data.overlayBanner[0].title,
          subTitle: data.overlayBanner[0].subTitle,
          price: data.overlayBanner[0].price,
          priceText: data.overlayBanner[0].priceText,
          bgImg: data.overlayBanner[0].bgImg,
          buttonImg: data.overlayBanner[0].buttonImg,
          link: data.overlayBanner[0].link
        });
      });
  }
  // ! BG-url을 서버에서 받아 변경하고싶을때 스타일을 인라인을 주는 방법 말고 다른 방법 있나요?
  render() {
    // 버튼 뿌리기
    const btnMapping = this.state.data.map(data => {
      return (
        <CircleBtn
          id={data.id}
          buttonImg={data.buttonImg}
          handleBtnClick={this.handleBtnClick}
          selectedId={this.state.selectedId}
        />
      );
    });

    return (
      <div
        className="overlay-banner-wrap"
        style={{
          // 배경화면 변경
          backgroundImage: `url(${this.state.bgImg})`
        }}
      >
        <div className="btn-wrap">{btnMapping}</div>
        <div className="title-wrap">
          <MainTitle
            id={this.state.selectedid}
            title={this.state.title}
            subTitle={this.state.subTitle}
            handleBtnClick={this.handleTextClick}
          />
          <div className="price-sticker-wrap">
            <PriceSticker
              id={this.state.selectedId}
              price={this.state.price}
              priceText={this.state.priceText}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OverlayBanner);
