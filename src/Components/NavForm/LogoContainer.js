import React from "react";
import "../../Styles/LogoContainer.scss";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LeftInputBar from "../NavForm/LeftInputBar";

class LogoContainer extends React.Component {
  render() {
    return (
      <div className="header--Container">
        {/* Header search form  */}
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
          </span>
          <span className="iconCartWrapper">
            {/* 여기에 장바구니 이미지 */}
            <FontAwesomeIcon icon={faShoppingBag} />
          </span>
          <span className="countCart">0</span>
        </button>
      </div>
    );
  }
}

export default LogoContainer;
