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
  constructor(props) {
    super(props);
    this.state = {
      left: 0,
      nextBtn: true,
      prevBtn: false
    };
  }
  hadlePrevBtn = e => {
    let qtWidth = window.innerWidth / 4;
    let { left } = this.state;
    let { data, index } = this.props;
    const leng = data.length - 4; // 16-4=12
    if (index === leng - 4) {
      //맨 끝 지점 1텀 전
      this.setState({
        left: left + qtWidth * 4,
        index: index + 4,
        nextBtn: true,
        prevBtn: false
      });
    } else if (index < leng - 4) {
      this.setState({
        left: left + qtWidth * 4,
        index: index + 4,
        nextBtn: true,
        prevBtn: true
      });
    } else if (index === 0) {
      // 끝지점
      this.setState({
        left: left + qtWidth * 4,
        index: index + 4,
        nextBtn: true,
        prevBtn: false
      });
    }
  };

  hadleNextBtn = e => {
    let qtWidth = window.innerWidth / 4;
    let { left } = this.state;
    let { data, index } = this.props;
    data = data - 4;
    const leng = data.length - 4;
    // 인덱스가 4 보다 작으면 자투리 이동하기
    if (index === leng) {
      // 인덱스와 leng이 같음 == 시작위치
      this.setState({
        left: left - qtWidth * 4,
        index: index - 4,
        nextBtn: true,
        prevBtn: false
      });
    } else if (index > 4) {
      this.setState({
        left: left - qtWidth * 4,
        index: index - 4,
        nextBtn: true,
        prevBtn: true
      });
    } else if (index === 4) {
      // 끝지점
      this.setState({
        left: left - qtWidth * 4,
        index: index - 4,
        nextBtn: false,
        prevBtn: true
      });
    }
  };
  goToLink = e => {
    // console.log(e.target.id, parseInt(e.target.id));
    this.props.history.push(`/product/detail/${parseInt(e.target.id)}`);
  };

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
          {this.props.data.map(data => {
            return (
              <RecomandItem
                id={data.id}
                name={data.name}
                price={"$" + data.price}
                sale={data["is_on_sale"]}
                category={"Harvest " + data["harvest_year_id__year"]}
                stock={data["is_in_stock"]}
                unit={data["measure_id__measure"]}
                img={data["small_image"]}
                key={data.id + "-recomand-product-item"}
                onClick={this.goToLink}
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
