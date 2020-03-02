import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import "../../Styles/ImgProduct.scss";

class ImgProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: "#f5f4f4",
      productInfo: [],
      buttonShow: "whole-wrapper",
      num: ""
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/Data/productPage.json")
      .then(res => res.json())
      .then(res =>
        this.setState({
          productInfo: res.data
        })
      );
  };

  mouseEnter = e => {
    console.log("enter, ", e.target);
    if (this.state.buttonShow === "whole-wrapper") {
      this.setState({ buttonShow: "whole-wrapper--open" });
    }
  };

  mouseLeave = e => {
    console.log("out, ", e);
    this.setState({ buttonShow: "whole-wrapper" });
  };

  render() {
    const eachProduct = this.state.productInfo.map((productInfo, idx) => {
      const image = "url(" + productInfo.thumbnail_url + ")"; //배경 URL을 style에 넣을 수 있는 상태로 변경
      return (
        <div className="product grid--in-row" key={idx}>
          <div
            className="product__visuals"
            style={{ backgroundImage: image }}
            // onMouseEnter={this.mouseEnter}
            // onMouseOut={this.mouseEnter}
            onMouseEnter={() => {
              this.setState({
                num: `${idx} whole-wrapper--open`
              });
            }}
            onMouseOut={() => {
              this.setState({
                num: null
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
              className="product__cart"
              style={
                productInfo.is_in_stock
                  ? { display: "none" }
                  : { display: "block", backgroundColor: "white" }
              }
            ></div>
            {/* 플러스 마이너스 박스 */}
            {this.state.num === `${idx} whole-wrapper--open` ? (
              <div className="whole-wrapper--open">
                <div>
                  <div></div>
                  <div></div>
                </div>
                <div className="btn-container">
                  <div className="decrease-btn">
                    <FontAwesomeIcon icon={faMinus} className="plus" />
                  </div>
                  <div className="increase-btn">
                    <FontAwesomeIcon icon={faPlus} className="minus" />
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
          {/* 상품정보 */}
          <div className="product__info">
            <div className="product__name" title="capia-pepper">
              <h4>{productInfo.name}</h4>
            </div>
            <div className="product__detailInfo">
              <span className="harvest-year">
                Harvest {productInfo.harvest_year__year}
              </span>
              <div className="vertical-bar"></div>
              <span>{productInfo.measure_id_measure}</span>
            </div>
          </div>
        </div>
      );
    });
    return <>{eachProduct}</>;
  }
}

export default ImgProduct;
