import React from "react";
import Nav from "../Header/Nav";
import Footer from "../../Components/Footer/Footer";
import "../Lookbook/Lookbook.scss";
import { AiOutlineShopping } from "react-icons/ai";

class Lookbook extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      data: [],
      showBox: false,
      data: [],
      navColor: "#F5F4F4",
      isCheck: "true"
    };
  }

  onHover = () => {
    this.setState({ showBox: !this.state.showBox });
    console.log("show :", this.showBox);
  };

  totalPrice = () => {
    if (this.state.ischeck !== "false") {
      this.setState({ price: this.state.data.price });
    }
  };

  componentDidMount = () => {
    fetch("http://localhost:3000/Data/lookbook.json")
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: res.data
        })
      );
  };

  render() {
    return (
      <>
        <Nav navColor={this.state.navColor} />
        <div className="lookbook-container">
          <div className="header-container">
            <div className="header-the">The</div>
            <div className="header-first-text">FULL PLATE LOOKBOOK</div>
            <div className="header-second-text">
              each day we present one featured meal collection all neccesary
              <br />
              products for you to cook it at home
            </div>
            <div className="header-img-container">
              <div className="dish-img-box">
                {/* <img className="dish-left-img" alt="dish-left-img" /> */}
                <img
                  className="main-dish-img"
                  alt={"main-dish-img"}
                  src="https://cdn.shopify.com/s/files/1/1148/3974/articles/risotto_grande.png?v=1476082307"
                ></img>
                {/* <img className="dish-right-img" alt={"dish-right-img"} /> */}
              </div>
              <div className="img-icon-container">
                <div
                  className="icon1"
                  onMouseEnter={this.onHover}
                  onMouseLeave={this.onHover}
                >
                  1
                  <div
                    className="infobox1"
                    style={
                      this.state.showBox ? { opacity: "1" } : { opacity: "0" }
                    }
                  >
                    <div className="info1-num">1</div>
                    <div className="info1-purchase-box">
                      <div className="info1-purchase">
                        <div className="purchase-name">Bell pepper</div>
                        <div className="purchase">1 lb | Harvest 2016</div>
                      </div>
                      <div className="info1-price">$6.99</div>
                    </div>
                    <div className="info1-text">
                      You need 1 kg of this ripe cherry tomatoes for 4 people
                      dish. It requires to be scalled before addingg to other
                      ingredients. <span>Check the full recipe</span> for more
                      details.
                    </div>
                  </div>
                </div>

                <div
                  className="icon2"
                  onMouseEnter={this.onHover}
                  onMouseLeave={this.onHover}
                >
                  2
                  <div
                    className="infobox2"
                    style={
                      this.state.showBox ? { opacity: "1" } : { opacity: "0" }
                    }
                  >
                    <div className="info2-num">2</div>
                    <div className="info2-purchase-box">
                      <div className="info2-purchase">
                        <div className="purchase-name">
                          Cherry Tomatoes 2016
                        </div>
                        <div className="purchase">1 kg | Harvest 2016</div>
                      </div>
                      <div className="info1-price">$6.90</div>
                    </div>
                    <div className="info2-text">
                      You need 1 kg of this ripe cherry tomatoes for 4 people
                      dish. It requires to be scalled before addingg to other
                      ingredients. <span>Check the full recipe</span> for more
                      details.
                    </div>
                  </div>
                </div>
                <div
                  className="icon3"
                  onMouseEnter={this.onHover}
                  onMouseLeave={this.onHover}
                >
                  3
                  <div
                    className="infobox3"
                    style={
                      this.state.showBox ? { opacity: "1" } : { opacity: "0" }
                    }
                  >
                    <div className="info3-num">3</div>
                    <div className="info3-purchase-box">
                      <div className="info3-purchase">
                        <div className="purchase-name">Eggplant</div>
                        <div className="purchase">1 kg | Harvest 2016</div>
                      </div>
                      <div className="info3-price">$7.50</div>
                    </div>
                    <div className="info3-text">
                      You need 1 kg of this ripe cherry tomatoes for 4 people
                      dish. It requires to be scalled before addingg to other
                      ingredients. <span>Check the full recipe</span> for more
                      details.
                    </div>
                  </div>
                </div>
                <div
                  className="icon4"
                  onMouseEnter={this.onHover}
                  onMouseLeave={this.onHover}
                >
                  4
                  <div
                    className="infobox4"
                    style={
                      this.state.showBox ? { opacity: "1" } : { opacity: "0" }
                    }
                  >
                    <div className="info4-num">4</div>
                    <div className="info4-purchase-box">
                      <div className="info4-purchase">
                        <div className="purchase-name">Green Beans</div>
                        <div className="purchase">1 lb | Harvest 2016</div>
                      </div>
                      <div className="info4-price">$2.99</div>
                    </div>
                    <div className="info4-text">
                      You need 1 kg of this ripe cherry tomatoes for 4 people
                      dish. It requires to be scalled before addingg to other
                      ingredients. <span>Check the full recipe</span> for more
                      details.
                    </div>
                  </div>
                </div>
                <div
                  className="icon5"
                  onMouseEnter={this.onHover}
                  onMouseLeave={this.onHover}
                >
                  5
                  <div
                    className="infobox5"
                    style={
                      this.state.showBox ? { opacity: "1" } : { opacity: "0" }
                    }
                  >
                    <div className="info5-num">5</div>
                    <div className="info5-purchase-box">
                      <div className="info5-purchase">
                        <div className="purchase-name">Leek</div>
                        <div className="purchase">1 kg | Harvest 2016</div>
                      </div>
                      <div className="info5-price">$13.00</div>
                    </div>
                    <div className="info5-text">
                      You need 1 kg of this ripe cherry tomatoes for 4 people
                      dish. It requires to be scalled before addingg to other
                      ingredients. <span>Check the full recipe</span> for more
                      details.
                    </div>
                  </div>
                </div>
                <div
                  className="icon6"
                  onMouseEnter={this.onHover}
                  onMouseLeave={this.onHover}
                >
                  6
                  <div
                    className="infobox6"
                    style={
                      this.state.showBox ? { opacity: "1" } : { opacity: "0" }
                    }
                  >
                    <div className="info6-num">6</div>
                    <div className="info6-purchase-box">
                      <div className="info6-purchase">
                        <div className="purchase-name">Lime</div>
                        <div className="purchase">1 kg | Harvest 2016</div>
                      </div>
                      <div className="info6-price">$6.00</div>
                    </div>
                    <div className="info6-text">
                      You need 1 kg of this ripe cherry tomatoes for 4 people
                      dish. It requires to be scalled before addingg to other
                      ingredients. <span>Check the full recipe</span> for more
                      details.
                    </div>
                  </div>
                </div>
              </div>
              <div className="top-btn-container">
                <button className="top-add-btn">ADD TO BAG</button>
                <div className="top-shopping-bag">
                  <AiOutlineShopping className="shopping-bag" />
                </div>
              </div>
            </div>
          </div>

          <div className="empty"></div>

          <div className="product-container">
            {this.state.data.map((el, index) => {
              return (
                <div className="product-box">
                  <div className="product">
                    <img
                      className="product-img"
                      alt={`${el.name + index}`}
                      src={el.img}
                    />
                    <div className="check-box">
                      <input
                        type="checkbox"
                        id=""
                        className="check-box-input"
                      />
                      <label for=""></label>
                    </div>
                    <div className="purchase-box">
                      <div>
                        <div className="product-name">{el.name}</div>
                        <div className="product-purchase">{el.purchase}</div>
                      </div>
                      <div className="product-price">${el.price}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bottom-container">
            <div className="bottom-img"></div>
            <div className="bottom-text">
              Making a beautiful risotto is so easy! All it takes is a little{" "}
              <br />
              love and care and this base recipe{" "}
              <span>
                Get to know the <br />
                specifics of this meal{" "}
              </span>
              <br />
              <br />
              Ann Reed
            </div>
            <div className="total-price">
              <div className="total-text">LOOKBOOK TOTAL</div>
              <div className="price">$43.38</div>
              <button className="bottom-add-btn">ADD TO BAG</button>
              <div className="bottom-shopping-bag">
                <AiOutlineShopping className="shopping-bag" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Lookbook;
