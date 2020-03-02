import React from "react";
import Main from "../Main/Main";
import DropDownList from "../../Components/ProductForm/DropDownList";
import ImgProduct from "../../Components/ProductForm/ImgProduct";
import "../../Styles/Product.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import Nav from "../Header/Nav";
// import Footer from "../../Components/Footer/Footer";
// import { Link, withRouter } from "react-router-dom"; 나중에 쓸거야

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      navColor: "#f5f4f4"
      // productInfo: []
      // imageUrls: [], //썸네일url 담을 배열
      // prices: [],
      // onSales: [], //is_on_sale 담을 배열
      // inStocks: [], //is_in_stock 담을 배열
      // names: [], //제품이름
      // harvests: [],
      // measures: [] //무게단위 담을 배열
    };
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/Data/productPage.json")
      .then(res => res.json())
      .then(res =>
        this.setState({
          productInfo: res.data
        })
      );
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
      // <Nav/>
      <Main navColor={this.state.navColor}>
        <main className="mainContent" role="main">
          {/* 실제 product page +여백 시작*/}
          <section className="section">
            {/* 실제 페이지 시작  */}
            <div className="wrapper">
              {/* product 카테고리 종류와 품목갯수 시작 */}
              <div className="pageDesc">
                <h1>ALL PRODUCTS</h1>
                <h2>
                  <em> 50 products in collection</em>
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
                <ImgProduct />
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
        {/* <Footer /> */}
      </Main>
    );
  }
}

export default Product;
