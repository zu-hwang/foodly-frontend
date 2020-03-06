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
      left: 0
    };
  }
  hadlePrevBtn = e => {
    let { left } = this.state;
    let { leng } = this.props;
    let width = window.innerWidth;
    if (left === -width * (leng / 4 - 1)) {
      this.setState({
        left: left + width
      });
    } else if (left < 0 && left > -width * (leng / 4 - 1)) {
      this.setState({
        left: left + width
      });
    }
  };

  hadleNextBtn = e => {
    let { left } = this.state;
    let { leng } = this.props;
    let width = window.innerWidth;

    if (left === 0) {
      this.setState({ left: left - width, nextBtn: true, prevBtn: false });
    } else if (left === -width * (leng / 4 - 1)) {
      this.setState({
        nextBtn: false,
        prevBtn: true
      });
    } else if (left < 0 && left > -width * (leng / 4 - 1)) {
      this.setState({ left: left - width, nextBtn: true, prevBtn: true });
    }
  };
  goToLink = e => {
    // console.log(e.target.id, parseInt(e.target.id));
    this.props.history.push(`/product/detail/${parseInt(e.target.id)}`);
  };

  render() {
    let width = window.innerWidth;
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
            className={this.state.left !== 0 ? "prev-btn" : "btn-none"}
            onClick={this.state.left !== 0 ? this.hadlePrevBtn : null}
          >
            <FontAwesomeIcon icon={faAngleLeft} />
          </div>
          <div
            className={
              this.state.left !== -width * (this.props.leng / 4 - 1)
                ? "next-btn"
                : "btn-none"
            }
            onClick={
              this.state.left !== -width * (this.props.leng / 4 - 1)
                ? this.hadleNextBtn
                : null
            }
          >
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>
    );
  }
}
export default RecomandSlide;
