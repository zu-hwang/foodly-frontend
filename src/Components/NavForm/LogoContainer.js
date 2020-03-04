import React from "react";
import config from "../../config";
// import Cart from "./Cart";
import "../../Styles/LogoContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingBag,
  faSyncAlt,
  faAngleLeft,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import LeftInputBar from "../NavForm/LeftInputBar";

class LogoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: this.props.navColor, //나중에 요 친구도 넘겨줘야지!
      cartDisplay: "none",
      addPaperBag: "#5c4b51",
      addWoodenBox: "#ada2a4",
      num: 1,
      basketButtonInfo: [],
      totalQuantity: "0",
      totalPrice: "0"
    };

    console.log(this.state.basketButtonInfo);
  }

  numMinus = () => {
    if (1 < this.state.num) {
      this.setState({ num: this.state.num - 1 });
    }
    console.log(this.state.num);
  };
  numPlus = () => {
    this.setState({ num: this.state.num + 1 });
    console.log(this.state.num);
  };

  _openCart = () => {
    this.setState({ cartDisplay: "block" });
  };

  _closeCart = () => {
    console.log("나야:", this.state.cartDisplay);
    this.setState({ cartDisplay: "none" });
  };

  handleQuantitiy = e => {
    // console.log(e.target.value);
    this.setState({ num: Number(e.target.value) });
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
    //   method: "GET"
    // };

    // fetch("10.58.2.221:8000/order/checkout", requestOptions)
    //   .then(response => response.json())
    //   .then(response =>
    //     this.setState({
    //       basketButtonInfo: response.cart
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
  // console.log(response.cart[2]["total_price"]);
  //위에 이 친구는 컴포넌트 분리하고 버튼에 정보를 담을 친구

  render() {
    return (
      <div
        className="header--Container"
        style={{ backgroundColor: this.state.navColor }}
      >
        {/* Header search form  */}
        {/* <div>{this.props.testNav}</div> */}
        <LeftInputBar />
        {/* 로고 중앙 글귀, 홈 로고 */}
        <div className="center--Container">
          <span className="storeDesc">Organic food by Whytes'</span>
          <div className="siteLogo">
            <img
              src="https://cdn.shopify.com/s/files/1/1148/3974/files/logo_81149f76-33f4-4e96-9653-e9b0474902fe_x96.png?v=1488284668"
              alt=""
            />
          </div>
          <span className="storeDesc">from Manitoba, Canada</span>
        </div>

        {/* 장바구니 오픈 버튼 */}
        <button
          className="cartOpenButton"
          type="button"
          onClick={this._openCart}
        >
          <span className="cartTotal">
            <span className="money">
              {/* {this.state.basketButtonInfo !== [] &&
                this.state.basketButtonInfo[2]["total_price"]} */}
              {this.state.totalPrice}
              {/* 로직넣어서 그날 환율로 계산되게 하자! */}
            </span>
            {/* 여기에 장바구니에서 올라온 것들의 값이 계산될거야 */}
            <span className="iconCartWrapper">
              {/* 여기에 장바구니 이미지 */}
              <FontAwesomeIcon icon={faShoppingBag} className="cartIcon" />
            </span>
          </span>
          <span className="countCart">
            {this.state.totalQuantity}
            {/* {this.state.basketButtonInfo[1].total_quantity} */}
          </span>
        </button>
        {/* 장바구니 시작 */}
        {/* 화면 어두워지는 부분 */}
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
                {/* component 분리하고 map돌려야하는 부분 /li가 계속 추가*/}
                <ul className="cart-list__item--wrapper">
                  <li className="cart-list__item--container">
                    {/* 이미지 테두리 */}
                    <div className="cart-list__item--image">
                      <div className="item-Img"></div>
                    </div>
                    <div className="cart-list__item--name">
                      Brandywine Tomatoes
                    </div>
                    {/* 화살표로 제품 추가 제거 하는 곳 */}
                    <div className="cart-list__item--quantity">
                      {/* {버튼 들어가는 곳} */}
                      <div className="purchase-quantity">
                        <div
                          className="minus-btn__container"
                          onClick={this.numMinus}
                        >
                          <FontAwesomeIcon
                            icon={faAngleLeft}
                            className="minus-btn"
                          />
                        </div>
                        <input
                          type="text"
                          value={this.state.num}
                          className="purchase-input"
                          onChange={this.handleQuantitiy}
                        />
                        <div
                          className="plus-btn__container"
                          onClick={this.numPlus}
                        >
                          <FontAwesomeIcon
                            icon={faAngleRight}
                            className="plus-btn"
                          />
                        </div>
                        {/* <span className="multiply">
                          x${this.state.price} = $
                          {(this.state.num * this.state.price).toFixed(2)}
                        </span> */}
                      </div>
                    </div>
                    <div className="cart-list__item--price">
                      <span>47.65</span>
                    </div>
                    <div className="cart-list__item--remove">X</div>
                  </li>
                </ul>
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
      </div>
    );
  }
}

export default LogoContainer;
