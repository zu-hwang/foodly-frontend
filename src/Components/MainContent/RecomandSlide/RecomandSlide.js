import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import RecomandItem from "./RecomandItem";
import "./RecomandSlide.scss";

// todo 1. 슬라이드 고장남ㅠ.ㅠ 아주 멋대로임
// todo 2. 품절 상품 CSS 따로 지정하기
// todo 3. 고민하는 김에 - 전/현/다음 목록만 출력하도록 하는 방법 생각하기
// todo 4. 고민하는 김에 - 무한 슬라이드...

class RecomandSlide extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      left: 0,
      index: 0, // data의 길이 10
      prevBtn: false,
      nextBtn: true
    };
  }
  hadlePrevBtn = e => {
    let qtWidth = window.innerWidth / 4;
    let { left, index, data } = this.state;
    const std = data.length - 4; // 6
    // 자투리 이동 하기 std보다 index가 크면
    if (index > std) {
      this.setState({
        left: left + qtWidth * (index - std),
        index: index - std,
        prevBtn: false,
        nextBtn: true
      });
    } else if (index < std) {
      this.setState({
        left: left + qtWidth * index,
        index: std,
        prevBtn: true,
        nextBtn: false
      });
    } else if (index === std) {
      this.setState({
        left: left + qtWidth * 4,
        index: index + 4,
        prevBtn: false,
        nextBtn: true
      });
    }
  };
  hadleNextBtn = e => {
    let qtWidth = window.innerWidth / 4;
    let { left, index } = this.state;

    // 인덱스가 4 보다 작으면 자투리 이동하기
    if (index < 4) {
      this.setState({
        left: left - qtWidth * index,
        index: index - index,
        nextBtn: false,
        prevBtn: true
      });
    } else if (index === 4) {
      this.setState({
        left: left - qtWidth * 4,
        index: index - 4, // data.length  초기화 해야 하나 0으로 둬야 하나..?
        nextBtn: false,
        prevBtn: true
      });
    } else if (index > 4) {
      this.setState({
        left: left - qtWidth * 4,
        index: index - 4,
        nextBtn: true,
        prevBtn: true
      });
    }
  };

  componentDidMount() {
    fetch("http://localhost:3000/Data/MainContent.json")
      .then(data => data.json())
      .then(data => {
        // console.log("데이터 출력", data.recomandProduct.);
        this.setState({
          prevSlide: data.recomandProduct.slice(-4),
          curSlide: data.recomandProduct.slice(0, 4),
          nextSlide: data.recomandProduct.slice(4, 8),
          data: data.recomandProduct,
          index: data.recomandProduct.length - 4
          // ! 초기값에서 기본 상품 깔리는 상품갯수 꼭 빼줘야 한다!!
        });
      });
  }
  render() {
    return (
      <div className="recomand-slide">
        <div
          className="recomand-product-container"
          style={{
            left: this.state.left + "px",
            transition: "all 0.5s ease-in-out"
          }}
        >
          {this.state.data.map(data => {
            return (
              <RecomandItem
                id={data.id}
                name={data.name}
                price={data.price}
                sale={data.sale}
                category={data.category}
                stock={data.stock}
                unit={data.unit}
                img={data.img}
                key={data.id + "-recomand-product-item"}
              />
            );
          })}
        </div>
        <div className="slide-handler-wrap">
          <div
            className={this.state.prevBtn ? "prev-btn" : "btn-none"}
            onClick={this.state.prevBtn ? this.hadlePrevBtn : null}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div
            className={this.state.nextBtn ? "next-btn" : "btn-none"}
            onClick={this.state.nextBtn ? this.hadleNextBtn : null}
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    );
  }
}
export default RecomandSlide;
