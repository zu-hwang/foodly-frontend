import React from "react";
// import config from "../../config";
import LeftInputBar from "../NavForm/LeftInputBar";
import Cart from "./CartForm/Cart";
import "./LogoContainer.scss";

class LogoContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: this.props.navColor //나중에 요 친구도 넘겨줘야지!
    };
  }

  render() {
    return (
      <div
        className="header--Container"
        style={{ backgroundColor: this.state.navColor }}
      >
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
        <Cart />
      </div>
    );
  }
}

export default LogoContainer;
