import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }

  numMinus = () => {
    if (1 < this.state.num) {
      this.setState({ num: this.state.num - 1 });
    }
  };
  numPlus = () => {
    this.setState({ num: this.state.num + 1 });
  };
  handleQuantitiy = e => {
    // console.log(e.target.value);
    this.setState({ num: Number(e.target.value) });
  };

  render() {
    return (
      <div className="inCart">
        <ul className="cart-list__item--wrapper">
          <li className="cart-list__item--container">
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
                  <input
                    type="text"
                    value={this.state.num}
                    className="purchase-input"
                    onChange={this.handleQuantitiy}
                  />
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
            <div className="cart-list__item--remove" onClick={() => {}}>
              X
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
