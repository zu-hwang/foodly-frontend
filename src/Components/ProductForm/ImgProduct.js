import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "./ImgProduct.scss";
// import { SERVER_URL } from "../../config";
import { Link } from "react-router-dom";

class ImgProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: "#f5f4f4",
      productInfo: [],
      buttonShow: "whole-wrapper",
      num: "",
      basketCountBox: "none",
      inBasket: "",
      spread: true
    };
  }

  spread = e => {
    // console.log(e);
    this.setState({
      spread: false
      // unspread: "true" //이걸로 버튼 한번 펼쳐지고 나서 안 모아지게 할려고했음;
    });
  };

  render() {
    console.log("상품정보 :", this.props.productInfo);
    const eachProduct = this.props.productInfo.map((productInfo, idx) => {
      const image = "url(" + productInfo.small_image + ")"; //배경 URL을 style에 넣을 수 있는 상태로 변경
      return (
        <div className="product grid--in-row">
          <div
            className="product__visuals"
            style={{ backgroundImage: image }}
            onMouseEnter={() => {
              console.log(this.state.num);
              this.setState({
                num: `${idx} whole-wrapper--open`
                // mouseOn: true
              });
            }}
            onMouseLeave={() => {
              this.setState({
                num: null,
                spread: true
              });
            }}
          >
            {/* 가격, sale 동그라미 */}
            <div className="price">
              <span>{productInfo.price}</span>
            </div>
            <div
              className="sale"
              style={
                productInfo.is_on_sale
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              <span>sale</span>
            </div>
            <div
              className="soldOut"
              style={
                productInfo.is_in_stock === "1"
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              SOLD OUT
            </div>
            <div
              className="product__cart"
              style={
                productInfo.is_in_stock === "1"
                  ? { display: "none" }
                  : { display: "block", backgroundColor: "white" }
              }
            ></div>
            <div>
              <div></div>
              <div></div>
            </div>
            {/* 플러스 마이너스 박스 */}
            {this.state.num === `${idx} whole-wrapper--open` ? (
              <div className={this.state.num}>
                <div
                  className="btn-container"
                  onMouseEnter={() => {
                    // console.log(this.state.num);
                    this.setState({
                      num: `${idx} whole-wrapper--open`
                    });
                  }}
                  onClick={this.spread}
                >
                  <div
                    className={
                      this.state.spread
                        ? "decrease-btn"
                        : "decrease-btn--spread"
                    }
                  >
                    <FontAwesomeIcon icon={faMinus} className="minus" />
                  </div>
                  <div
                    className={
                      this.state.spread
                        ? "increase-btn"
                        : "increase-btn--spread"
                    }
                    style={
                      productInfo.is_in_stock === "1"
                        ? { backgroundColor: "$pink #5c4b51" }
                        : { backgroundColor: "#5c4b51" }
                    }
                  >
                    <FontAwesomeIcon icon={faPlus} className="plus" />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* 상품정보 */}
          <Link
            to={`/product/detail/${idx + 1}`}
            className="linkCompo"
            style={{ textDecoration: "none" }}
          >
            <div className="product__info">
              <div className="product__name" title="capia-pepper">
                <h4>{productInfo.name}</h4>
              </div>
              <div className="product__detailInfo">
                <span className="harvest-year">
                  Harvest {productInfo.harvest_year__year}
                </span>
                <div className="vertical-bar"></div>
                <span>{productInfo.measure_id__measure}</span>
              </div>
            </div>
          </Link>
        </div>
      );
    });
    return <>{eachProduct}</>;
  }
}

export default ImgProduct;
