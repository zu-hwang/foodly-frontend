import React from "react";
import "../../Styles/LogoContainer.scss";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeftInputBar from "../NavForm/LeftInputBar";

class LogoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: this.props.navColor
    };
  }
  render() {
    console.log(this.props.testNav);
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
        <button className="cartOpenButton" type="button">
          <span className="cartTotal">
            <span className="money">
              $0.00
              {/* 로직넣어서 그날 환율로 계산되게 하자! */}
            </span>
            {/* 여기에 장바구니에서 올라온 것들의 값이 계산될거야 */}
            <span className="iconCartWrapper">
              {/* 여기에 장바구니 이미지 */}
              <FontAwesomeIcon icon={faShoppingBag} className="cartIcon" />
            </span>
          </span>
          <span className="countCart">3</span>
        </button>
        {/* 장바구니 시작 */}
        <div className="black-screen"></div>
        <div className="basket__wrapper">
          {/* 화면 어두워지는 부분 */}
          <div className="basket-container">
            <div className="basket-header">
              <div className="basket-title">YOUR FOOD BAG</div>
              <button className="basket-closeBtn">CLOSE</button>
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
                    <div className="cart-list__item--quantity"></div>
                    <div className="cart-list__item--price">
                      <sapn>$47.65</sapn>
                    </div>
                    <div className="cart-list__item--remove">X</div>
                  </li>
                </ul>
                <div className="special-packing">
                  <h3 className="choose-package">CHOOSE PACKAGE</h3>
                  <div className="paperBag__container">
                    paper bag
                    <span className="default-packing__price money">$0</span>
                  </div>
                  <div className="special-packing__container">
                    wooden box
                    <span className="special-packing__price money">$3.00</span>
                  </div>
                </div>
                <div className="hidden-woodenBox">
                  <div className="hidden-woddenBox__imgConatiner">
                    <div className="hidden-woodenBox__img">
                      {/* <img
                        src="https://cdn.shopify.com/s/files/1/1148/3974/products/wooden-box_small.jpg"
                        alt=""
                      /> */}
                    </div>
                  </div>
                  <div className="cart-list__item--title">Wooden box</div>
                  <div className="cart-list__item--price">$3.00</div>
                </div>
                <div className="cart__total-price__wrapper">
                  <div className="total-price__container">
                    <div className="total">TOTAL</div>
                    <div className="total-price__Box">
                      {/* 여기에 svg넣어서 class명 바꾸고 rotate주기 */}
                      <div className="total">$67.40</div>
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
                    <div>Leave your special requirements here</div>
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
