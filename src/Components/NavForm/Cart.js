import React, { Component } from "react";
import "../../Styles/LogoContainer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: "",
      basketButtonInfo: []
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

  // componentDidMount = () => {
  //   const requestOptions = {
  //     method: "GET"
  //   };

  //   fetch(`${SERVER_URL}/products/collections`, requestOptions)
  //     .then(response => response.json())
  //     .then(response =>
  //       this.setState({
  //         productInfo: response.data
  //       })
  //     )
  //     .catch(error => console.log("error", error));
  // };

  render() {
    const productsInCart = this.state.productInCart.map(
      (productInCart, idx) => {
        const image = "url(" + productInfo.productImage + ")"; //제품이미지
        return (
          <div className="inCart">
            <ul className="cart-list__item--wrapper">
              {this.state.num === `${idx} add` ? (
                <li className="cart-list__item--container">
                  {/* 이미지 테두리 */}
                  <div className="cart-list__item--image">
                    {/* 제품이미지 백그라운드 이미지로 들어감 */}
                    <div className="item-Img" style={{}}></div>
                  </div>
                  <div className="cart-list__item--name">
                    {/* 제품이름 */}
                    {productInCart.name}
                  </div>
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
                    {/* 버튼 끝나는 곳 */}
                  </div>
                  <div className="cart-list__item--price">
                    <span>$47.65</span>
                  </div>
                  <div
                    className="cart-list__item--remove"
                    onClick={() => {
                      // console.log(this.state.num);
                      this.setState({
                        num: `${idx} add`
                      });
                    }}
                  >
                    X
                  </div>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        );
      }
    );
    return <div>{productsInCart}</div>;
  }
}
