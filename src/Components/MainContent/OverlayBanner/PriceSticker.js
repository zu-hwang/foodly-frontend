import React, { Component } from "react";
import "./PriceSticker.scss";
class PriceSticker extends Component {
  render() {
    const { id, price, priceText } = this.props;
    return (
      <div
        className="price-sticker"
        id={id + "-price-sticker"}
        key={id + "-price-sticker"}
      >
        <div>
          <p>${price}</p>
          <p>{priceText}</p>
        </div>
      </div>
    );
  }
}

export default PriceSticker;
