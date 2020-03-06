import React from "react";
// import Main from "../Main/Main";
import DropDownList from "../../Components/ProductForm/DropDownList";
import ImgProduct from "../../Components/ProductForm/ImgProduct";
import "../../Styles/Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Nav from "../Header/Nav";
import Footer from "../../Components/Footer/Footer";
// import { Link, withRouter } from "react-router-dom"; 나중에 쓸거야

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      navColor: "#f5f4f4",
      productInfo: []
    };
    console.log(this.state.productInfo);
  }

  // componentDidMount = (preProps, prevState) => {
  //   if (preProps !== this.props || prevState !== this.state) {
  //     fetch(
  //       `http://10.58.5.105:8000/products/collections/${this.props.match.params.id}`
  //     )
  //       .then(res => res.json())
  //       .then(res =>
  //         this.setState(
  //           {
  //             productInfo: res.data
  //           }
  //         )
  //       );
  //   }
  // };

  componentWillReceiveProps = (preProps, prevState) => {
    console.log("preProps :", preProps);
    console.log("thisProps :", this.props);

    if (preProps !== this.props.match.params) {
      fetch(
        `http://10.58.5.105:8000/products/collections/${this.props.match.params.id}`
      )
        .then(res => res.json())
        .then(res =>
          this.setState({
            productInfo: res.data
          })
        );
    }
  };
  // mapOfImg = () =>{
  //    <ImgProduct />
  // }
  render() {
    // info = () => {
    //   this.state.productInfo.map(productInfo => {
    //   this.setState()
    //   };
    // }
    return (
      <>
        <Nav navColor={this.state.navColor} />
        {/* <Main navColor={this.state.navColor}> */}
        <main className="mainContent" role="main">
          {/* 실제 product page +여백 시작*/}
          <section className="section">
            {/* 실제 페이지 시작  */}
            <div className="wrapper">
              {/* product 카테고리 종류와 품목갯수 시작 */}
              <div className="pageDesc">
                <h1>{this.props.match.params.id}</h1>
                <h2>
                  <em>
                    {this.state.productInfo.length} products in collection
                  </em>
                </h2>
              </div>

              {/* product 버전 & 툴바 시작 => 나중에 컴포넌트로 땔거야*/}
              <div className="collectionToolbar">
                <div className="collectionVer">
                  <div className="gridVer originVer">
                    <FontAwesomeIcon icon={faBorderAll} />
                  </div>
                  <div className="gridVer secondVer">
                    <FontAwesomeIcon icon={faBars} />
                  </div>
                </div>
                {/* DropDownList는 => 나중에 컴포넌트 map돌려서 채울예정 */}
                <div className="dropDownList">
                  <DropDownList />
                  <DropDownList />
                  <DropDownList />
                </div>
              </div>

              {/* 제품 사진 grid 시작 => div.grid 도 나중에는 컴포넌트에 포함시키고 map돌릴예정*/}
              <div className="grid">
                <ImgProduct productInfo={this.state.productInfo} />
              </div>

              {/* 페이지 전환 바 */}
              {/* <div className="pagination">
                <ul>
                  <li className="pagination-item-prev">
                    <div
                      className="pagination__link"
                      href="/collections/fresh?page=1&view=grid"
                      title="« Previous"
                    ></div>
                  </li>
                  <li className="pagination-item-parts"></li>
                  <li className="pagination-item-next"></li>
                </ul>
              </div> */}
            </div>

            {/* 실제 페이지 끝 */}
          </section>
          {/* 실제 product page +여백 끝*/}
        </main>
        {/* <Main navColor={this.state.navColor}> */}
        <Footer />
      </>
    );
  }
}

export default Product;
