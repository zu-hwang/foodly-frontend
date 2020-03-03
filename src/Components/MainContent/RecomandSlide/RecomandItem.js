import React, { Component } from "react";
import CircleSticker from "../RecomandBanner/CircleSticker";
import "./RecomandItem.scss";

class RecomandItem extends Component {
  constructor() {
    super();
    this.state = {};
  }
  checkingStock = stock => {
    if (stock > 0) {
      return "In stock";
    } else {
      return "Out of stock";
    }
  };
  render() {
    const { name, price, sale, category, stock, unit, img } = this.props;

    return (
      <div
        className={
          stock
            ? "recomand-product-item"
            : "recomand-product-item recomand-product-out-of-stock"
        }
      >
        <div className="product-img-box">
          <div
            className="img-box"
            style={{ backgroundImage: `url(${img})` }}
          ></div>
          <div className={stock ? "none" : "sold-out"}>sold out</div>
          <div className={stock ? "icon-box" : "none"}>
            <CircleSticker
              stickerText={price}
              className={"sticker-small-price"}
            />
            {sale ? (
              <CircleSticker
                stickerText={sale}
                className={"sticker-small-sale"}
              />
            ) : null}
          </div>
        </div>
        <div className="product-info-box">
          <p>{name}</p>
          <ul>
            <li>{category}</li>
            <li>{this.checkingStock(stock)}</li>
            <li>{unit}</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default RecomandItem;
