import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import "./CartItem.scss";

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.qt,
      boxClose: false
    };
  }

  delList = () => {
    this.setState({ boxClose: true });
  };

  numMinus = () => {
    if (1 < this.state.num) {
      this.setState({ num: this.state.num - 1 });
    }
  };
  numPlus = () => {
    this.setState({ num: this.state.num + 1 });
  };
  handleQuantitiy = (quantity, price) => {
    console.log(quantity, price);
    this.props._calculator(quantity, price);
  };

  leftRightArrow = () => {};

  render() {
    return (
      <>
        <li
          className={
            this.state.boxClose
              ? "cart-list__item--container--Close"
              : "cart-list__item--container"
          }
        >
          {/* 이미지 테두리 */}
          <div className="cart-list__item--image">
            {/* 제품이미지 백그라운드 이미지로 들어감 */}
            <div
              className="item-Img"
              style={{
                backgroundImage: "url(" + this.props.image + ")"
              }}
            ></div>
          </div>
          <div className="cart-list__item--name">
            {/* 제품이름 */}
            {this.props.name}
          </div>
          <div className="cart-list__item--quantity">
            {/* {버튼 들어가는 곳} */}
            <div className="purchase-quantity">
              <div className="minus-btn__container" onClick={this.numMinus}>
                <FontAwesomeIcon icon={faAngleLeft} className="minus-btn" />
              </div>
              {/* 제품  quantity */}
              <form>
                {
                  /* <input
                  type="text"
                  value={this.state.num}
                  className="purchase-input"
                  onChange={e => {
                    this.handleQuantitiy(e.target.value, this.props.price);
                  }}
                /> */
                  <div
                    className="purchase-input"
                    onChange={e => {
                      this.handleQuantitiy(
                        e.target.innerText,
                        this.props.price
                      );
                    }}
                  >
                    {this.state.num}
                  </div>
                }
              </form>
              <div className="plus-btn__container" onClick={this.numPlus}>
                <FontAwesomeIcon icon={faAngleRight} className="plus-btn" />
              </div>
            </div>
            {/* 버튼 끝나는 곳 */}
          </div>
          <div className="cart-list__item--price">
            {/* 제품 price */}
            <span>{this.props.price}</span>
          </div>
          <div className="cart-list__item--remove" onClick={this.delList}>
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </li>
      </>
    );
  }
}
