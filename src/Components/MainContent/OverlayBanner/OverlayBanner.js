import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CircleBtn from "./CircleBtn";
import PriceSticker from "./PriceSticker";
import MainTitle from "./MainTitle";
import "./OverlayBanner.scss";

// todo 1. 배경화변 변경시 덜컹거림
// todo 2. 배경화면 오버레이 되며 바뀔때 타이틀만 팅! 하고 바뀜! content나 배경에 2개뿌려두고 전체 div opacity로 해야하나 ..

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
  handleAutoBannerChange = () => {
    const { data, selectedId } = this.state;
    if (selectedId === data.length - 1) {
      this.setState({
        selectedId: data[0].id,
        title: data[0].title,
        subTitle: data[0].subTitle,
        price: data[0].price,
        priceText: data[0].priceText,
        bgImg: data[0].bgImg,
        buttonImg: data[0].buttonImg,
        link: data[0].link
      });
    } else {
      this.setState({
        selectedId: data[selectedId + 1].id,
        title: data[selectedId + 1].title,
        subTitle: data[selectedId + 1].subTitle,
        price: data[selectedId + 1].price,
        priceText: data[selectedId + 1].priceText,
        bgImg: data[selectedId + 1].bgImg,
        buttonImg: data[selectedId + 1].buttonImg,
        link: data[selectedId + 1].buttonImg
      });
    }
  };
  componentDidMount = () => {
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
    // const intervalId =
    setInterval(this.handleAutoBannerChange, 3000);
    // console.log(intervalId);
  };
  componentWillUnmount = () => {
    clearInterval(1);
  };
  render() {
    // 버튼 뿌리기
    const btnMapping = this.state.data.map(data => {
      return (
        <CircleBtn
          id={data.id}
          key={data.id + "-circlebtn-key"}
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
