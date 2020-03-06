import React from "react";
import "./DetailTop.scss";
import {
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaGooglePlusG,
  FaFacebookF
} from "react-icons/fa";

class DetailTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    };
  }

  handlePrice = () => {
    fetch("http://10.58.5.250/order/cart", {
      method: "post",
      body: JSON.stringify({
        id: this.props.data.id,
        quantity: this.state.num
      }).then(res => res.json())
    });
  };

  numMinus = () => {
    if (1 < this.state.num) {
      this.setState({ num: this.state.num - 1 });
    }
  };
  numPlus = () => {
    this.setState({ num: this.state.num + 1 });
  };
  handleQuantitiy = e => {
    this.setState({ num: Number(e.target.value) });
  };

  render() {
    const { data } = this.props;
    return (
      <div className="detail-top">
        <div className="purchase-a-container">
          <div
            className={
              this.props.pageTop < this.props.windowScroll + 900
                ? "purchase-container  container-move"
                : "purchase-container"
            }
          >
            <div className="purchase-name">{data.name}</div>
            <div className="purchase-explanation">
              Harvest {data.harvest_year_id__year} | In stock {"| "}
              {data.measure_id__measure}
            </div>
            <div className="purchase">
              <div className="price-box">
                <div className="price">${data.price}</div>
                <div className="kilogram">per kilogram</div>
              </div>
              <div className="purchase-box">
                <div className="purchase-quantity">
                  <button className="minus-btn" onClick={this.numMinus}>
                    ◁
                  </button>
                  <input
                    type="text"
                    value={this.state.num}
                    className="purchase-input"
                    onChange={this.handleQuantitiy}
                  />
                  <button className="plus-btn" onClick={this.numPlus}>
                    ▷
                  </button>
                  <span className="multiply">
                    x${data.price} = ${(this.state.num * data.price).toFixed(2)}
                  </span>
                </div>
                <div className="btn">
                  <button className="add-btn" onClick={this.handlePrice}>
                    <div className="circle"></div>
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="description-a-container">
          <div
            className={
              this.props.pageTop < this.props.windowScroll + 600
                ? "description-container  container-move"
                : "description-container"
            }
          >
            <div className="description-title">Description</div>
            <p className="description-text">
              {data.description}
              {/* Brandywine tomatoes popularly is considered among the best tasting
              available.
              <br />
              probably is caused its origin. Brandywine tomato plant is an
              heirloom cultivar of the
              <br />
              species. if you want to taste the best tomatoey flavor this tomato
              is exactly what you
              <br />
              need. This particular cultivar is extremely succulent and tasty.
              It is a beautifully sweet
              <br />
              tomato that is offset by a wonderful acidity that is a perfect
              combination for delicious
              <br />
              dishes. */}
            </p>
          </div>
        </div>
        <div className="share-a-container">
          <div
            className={
              this.props.pageTop < this.props.windowScroll + 300
                ? "share-container container-move"
                : "share-container"
            }
          >
            <div className="share-title">SHARE</div>
            <div className="logo">
              <FaInstagram />
            </div>
            <div className="logo">
              <FaTwitter />
            </div>
            <div className="logo">
              <FaPinterestP />
            </div>
            <div className="logo">
              <FaGooglePlusG />
            </div>
            <div className="logo">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailTop;
