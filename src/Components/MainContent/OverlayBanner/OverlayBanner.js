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
      prodId: "",
      title: "",
      subTitle: "",
      price: "",
      priceText: "",
      bgImg: "",
      buttonImg: ""
    };
  }
  handleBtnClick = e => {
    console.log(e.target.id);
    const id = parseInt(e.target.id);
    this.setState({
      selectedId: id,
      prodId: this.state.data[id].prodId,
      title: this.state.data[id].title,
      subTitle: this.state.data[id].subTitle,
      price: this.state.data[id].price,
      priceText: this.state.data[id].priceText,
      bgImg: this.state.data[id].bgImg,
      buttonImg: this.state.data[id].buttonImg
    });
  };
  handleTextClick = e => {
    // ! 글자 클릭했을때 해당 상품으로 이동!
    // console.log(parseInt(e.target.id));
    this.props.history.push(`/product/detail/${parseInt(e.target.id)}`);
  };
  handleAutoBannerChange = () => {
    const { data, selectedId } = this.state;
    if (selectedId === data.length - 1) {
      this.setState({
        selectedId: data[0].id,
        prodId: data[0].prodId,
        title: data[0].title,
        subTitle: data[0].subTitle,
        price: data[0].price,
        priceText: data[0].priceText,
        bgImg: data[0].bgImg,
        buttonImg: data[0].buttonImg
      });
    } else {
      this.setState({
        selectedId: data[selectedId + 1].id,
        prodId: data[selectedId + 1].prodId,
        title: data[selectedId + 1].title,
        subTitle: data[selectedId + 1].subTitle,
        price: data[selectedId + 1].price,
        priceText: data[selectedId + 1].priceText,
        bgImg: data[selectedId + 1].bgImg,
        buttonImg: data[selectedId + 1].buttonImg
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
          prodId: data.overlayBanner[0].prodId,
          title: data.overlayBanner[0].title,
          subTitle: data.overlayBanner[0].subTitle,
          price: data.overlayBanner[0].price,
          priceText: data.overlayBanner[0].priceText,
          bgImg: data.overlayBanner[0].bgImg,
          buttonImg: data.overlayBanner[0].buttonImg
        });
      });
    // const intervalId =
    // ! 인터벌 추가 켜기
    // setInterval(this.handleAutoBannerChange, 5000);
    // console.log(intervalId);
  };
  componentWillUnmount = () => {
    // ! 인터벌 삭제 켜기
    // clearInterval(1);
  };
  render() {
    // 버튼 뿌리기
    const {
      data,
      selectedId,
      title,
      subTitle,
      price,
      priceText,
      bgImg,
      prodId
    } = this.state;

    const btnMapping = data.map(data => {
      return (
        <CircleBtn
          id={data.id}
          key={data.id + "-circlebtn-key"}
          buttonImg={data.buttonImg}
          handleBtnClick={this.handleBtnClick}
          selectedId={selectedId}
        />
      );
    });

    return (
      <div
        className="overlay-banner-wrap"
        style={{
          // 배경화면 변경
          backgroundImage: `url(${bgImg})`
        }}
      >
        <div className="btn-wrap">{btnMapping}</div>
        <div className="title-wrap">
          <MainTitle
            id={selectedId}
            title={title}
            subTitle={subTitle}
            onClick={this.handleTextClick}
            prodId={prodId}
          />
          <div className="price-sticker-wrap">
            <PriceSticker id={selectedId} price={price} priceText={priceText} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(OverlayBanner);
