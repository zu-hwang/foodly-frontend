import React, { Component } from "react";
import CartItem from "./CartItem";
// import "../../Styles/LogoContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import "./Cart.scss";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartDisplay: "none",
      addPaperBag: "#5c4b51",
      addWoodenBox: "#ada2a4",
      basketButtonInfo: [],
      totalQuantity: 0,
      totalPrice: 0
    };
  }

  _openCart = () => {
    this.setState({ cartDisplay: "block" });
  };
  _closeCart = () => {
    console.log("나야:", this.state.cartDisplay);
    this.setState({ cartDisplay: "none" });
  };

  _kinsOfBag = () => {
    if (this.state.addPaperBag === "#5c4b51") {
      this.setState({ addPaperBag: "#ada2a4", addWoodenBox: "#5c4b51" });
    } else if (this.state.addPaperBag === "#ada2a4") {
      this.setState({ addPaperBag: "#5c4b51", addWoodenBox: "#ada2a4" });
    }
  };

  componentDidMount = () => {
    // const requestOptions = {
    //   method: "GET",
    //   headers: {
    //     Authorization:
    //       "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IjE5OTBAYWJjLmFiYyJ9.rx9SMadaUbA2loV6FqNAeIetFH_EfLwUccGt2a5fXbg"
    //   }
    // };

    // fetch("http://10.58.5.250:8000/order/checkout", requestOptions)
    //   .then(response => response.json())
    //   .then(response =>
    //     // console.log(response)
    //     this.setState({
    //       basketButtonInfo: response.cart[0],
    //       totalQuantity: response.cart[1]["total_quantity"],
    //       totalPrice: response.cart[2]["total_price"]
    //     })
    //   )
    //   .catch(error => console.log("error", error));

    fetch("http://localhost:3000/Data/buttonData.json")
      .then(response => response.json())
      .then(response => {
        this.setState(
          {
            basketButtonInfo: response.cart[0],
            totalQuantity: response.cart[1]["total_quantity"],
            totalPrice: response.cart[2]["total_price"]
          },
          () => {
            console.log("나야", this.state.totalPrice);
          }
        );
      });
  };
  //위에 이 친구는 컴포넌트 분리하고 버튼에 정보를 담을 친구

  render() {
    return (
      <>
        <button
          className="cartOpenButton"
          type="button"
          onClick={this._openCart}
        >
          <span className="cartTotal">
            <span className="money">
              {this.state.totalPrice}
              {/* 로직넣어서 그날 환율로 계산되게 하자! */}
            </span>
            <span className="iconCartWrapper">
              {/* 여기에 장바구니 이미지 */}
              <FontAwesomeIcon icon={faShoppingBag} className="cartIcon" />
            </span>
          </span>
          <span className="countCart">{this.state.totalQuantity}</span>
        </button>
        <div
          className="black-screen"
          style={{ display: this.state.cartDisplay }}
        ></div>
        <div
          className="basket__wrapper"
          style={{ display: this.state.cartDisplay }}
        >
          <div className="basket-container">
            <div className="basket-header">
              <div className="basket-title">YOUR FOOD BAG</div>
              <button className="basket-closeBtn" onClick={this._closeCart}>
                CLOSE
              </button>
            </div>
            <hr className="hr-clear" />
            {/* 장바구니 제목 끝 */}
            <div className="cart">
              <form>
                <div className="cart-header">
                  <div className="cart-header__item quentity">QTY</div>
                  <div className="cart-header__item quentityPrice">PRICE</div>
                </div>
                <div className="inCart">
                  <ul className="cart-list__item--wrapper">
                    {this.state.basketButtonInfo.map((basketInfo, idx) => {
                      return (
                        <CartItem
                          image={basketInfo.thumbnail_url}
                          name={basketInfo.id}
                          qt={basketInfo.quantity}
                          price={basketInfo.price}
                          key={idx}
                        />
                      );
                    })}
                  </ul>
                </div>
                <div className="special-packing">
                  <h3 className="choose-package">CHOOSE PACKAGE</h3>
                  <div
                    className="paperBag__container"
                    style={{ backgroundColor: this.state.addPaperBag }}
                    onClick={this._kinsOfBag}
                  >
                    paper bag
                    {/* <span className="default-packing__price money">$0</span> */}
                  </div>
                  <div
                    className="special-packing__container"
                    style={{ backgroundColor: this.state.addWoodenBox }}
                    onClick={this._kinsOfBag}
                  >
                    wooden box
                    {/* <span className="special-packing__price money">$3.00</span> */}
                  </div>
                </div>
                <div
                  className="hidden-woodenBox"
                  style={
                    this.state.addPaperBag === "#5c4b51"
                      ? { display: "none" }
                      : { display: "block" }
                  }
                >
                  <div className="hidden-woddenBox__imgConatiner">
                    <div className="hidden-woodenBox__img"></div>
                  </div>
                  <div className="cart-list__item--title">Wooden box</div>
                  <div className="cart-list__item--price">3.00</div>
                </div>
                <div className="cart__total-price__wrapper">
                  <div className="total-price__container">
                    <div className="total">TOTAL</div>
                    <div className="total-price__Box">
                      <FontAwesomeIcon
                        icon={faSyncAlt}
                        className="reFresh--Icon"
                      />
                      <div className="total">67.40</div>
                    </div>
                  </div>
                  <div className="bulabula">
                    Price excludes delivery, which is applied at checkout.
                    Orders will be processed in USD
                  </div>
                </div>
                {/* 일단 여기까지....;;; */}
                <div className="note__container">
                  <div>NOTE TO FOODLY STORE</div>
                  <div className="comment__wrapper">
                    <div>Leave your special requirements here</div>dids
                    <textarea></textarea>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
