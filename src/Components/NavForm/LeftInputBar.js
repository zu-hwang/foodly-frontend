import React from "react";
import { withRouter } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/LeftInputBar.scss";

class LeftInputBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      inputValue: "",
      resultBox: false,
      resultMode: "off", // min-char,no-data,on, off
      data: null
      // [
      //   {
      //     id: 0,
      //     name: "Basil",
      //     price: "$2.29",
      //     sale: false,
      //     category: "Harvest 2015",
      //     stock: 0,
      //     unit: "Bunch",
      //     img:
      //       "//cdn.shopify.com/s/files/1/1148/3974/products/Basil_grande.jpeg?v=1456211118",
      //     link: "0번 인덱스 링크"
      //   },
      //   {
      //     id: 0,
      //     name: "Basil",
      //     price: "$2.29",
      //     sale: false,
      //     category: "Harvest 2015",
      //     stock: 0,
      //     unit: "Bunch",
      //     img:
      //       "//cdn.shopify.com/s/files/1/1148/3974/products/Basil_grande.jpeg?v=1456211118",
      //     link: "1번 인덱스 링크"
      //   }
      // ]
    };
    this.focusSearch = React.createRef();
    this.searchIcon = React.createRef();
  }
  handleOutSideClick = e => {
    if (this.searchIcon.contains(e.target)) {
      // 도큐멘트.클릭이벤트의 타겟이 서치아이콘과 같으면 아무것도 안하고
      return;
    } else {
      // 이벤트 타겟이 서치 아이콘이 아닌 다른거면 아래 실행. 서치창 팝업 다 닫고, 인풋밸류 리셋
      this.setState({
        display: false,
        inputValue: "",
        resultBox: false,
        resultMode: "off"
      });
      document.removeEventListener("click", this.handleOutSideClick);
    }
  };

  handleClickCollections = event => {
    this.props.history.push("/product");
  };
  handleOnClick = e => {
    document.addEventListener("click", this.handleOutSideClick);
    this.focusSearch.current.focus();
    this.setState({
      display: "search-input-wrap"
    });
  };

  handleOnBlur = e => {
    if (this.state.resultBox) {
      this.setState({
        display: true
      });
    } else {
      this.setState({
        display: false,
        inputValue: ""
      });
    }
  };
  setData = data => {};
  sendRequest = e => {
    //! 패치
    let requestOptions = {
      method: "GET"
    };
    fetch(
      "http://10.58.7.185:8000/products/search?search=" + this.state.inputValue,
      requestOptions
    )
      .then(res => res.text())
      .then(res => console.log(res)) //! 만약 결과가 없을때 내용 출력
      .catch(error => console.log("error", error));
  };

  handleOnChange = e => {
    this.setState({ inputValue: e.target.value }, this.sendRequest);
    if (e.target.value.length > 0 && e.target.value.length < 3) {
      this.setState({ resultBox: true, resultMode: "min-char" });
    } else if (e.target.value.length > 2 && this.state.data === null) {
      this.setState({ resultBox: true, resultMode: "no-data" });
    } else if (e.target.value.length > 2 && this.state.data !== []) {
      this.setState({ resultBox: true, resultMode: "on" });
    } else {
      this.setState({ resultBox: true, resultMode: "off" });
    }
  };
  handleOnMouseOver = () => {
    this.setState({ resultBox: true });
  };

  handleSearchLink = e => {
    console.log("서치창 > 리스트클릭 > 해당 상품으로 이동할꺼다!");
    console.log(parseInt(e.target.id));
    const id = parseInt(e.target.id);
    console.log(this.state.data[id].link);
    this.props.history.push(`/${this.state.data[id].link}`);
  };
  checkingResultBox = () => {
    // 결과 박스 뭘 출력할지!
    if (this.state.resultMode === "min-char")
      return "search-result-frame-min-char";
    if (this.state.resultMode === "no-data")
      return "search-result-frame-no-data";
    if (this.state.resultMode === "on") return "search-result-frame-on";
    if (this.state.resultMode === "off") return "";
  };
  checkingOnOff = () => {
    if (this.state.resultMode === "off" || !this.state.display) return false;
    if (this.state.resultMode !== "off") return true;
  };
  componentWillUnmount = () => {
    document.removeEventListener("click", this.handleOutSideClick);
  };
  render() {
    return (
      <div className="search--container">
        <div className="search--box" onBlur={this.handleOnBlur}>
          <div
            className={
              this.state.display
                ? "search-input-wrap"
                : "search-input-wrap close"
            }
          >
            <input
              type="text"
              placeholder="Type your search request"
              onChange={this.handleOnChange} // setState : value
              onFocus={this.handleOnFocus} // result frame On
              value={this.state.inputValue}
              ref={this.focusSearch}
            />
            <div
              className="search--btn"
              onClick={this.handleOnClick}
              ref={node => {
                this.searchIcon = node;
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
        </div>
        {/* 여기는 팝업창 용 빈 DIV */}
        <div
          className={
            this.checkingOnOff()
              ? "search-result-container"
              : "search-result-container close"
          }
        >
          {/* 결과창 프레임 시작 -검색 결과 리스트 모드에 따라 클래스명 변경  */}
          <div
            className={this.checkingResultBox()}
            onMouseOver={this.handleOnMouseOver}
          >
            {this.state.resultMode === "min-char" && (
              <p>Please, type more than 2 characters</p>
            )}
            {this.state.resultMode === "no-data" && (
              <p>
                Oh, no! We don’t have such item :( Please try another search
                request or check our collections
                <span onClick={this.handleClickCollections}>collections</span>
              </p>
            )}
            {this.state.resultMode === "off" && <p></p>}
            {this.state.resultMode === "on" &&
              this.state.data.map(data => {
                return (
                  <div
                    className="search-result-list"
                    key={data.id + "-search-result-list"}
                  >
                    <div className="search-img-box">
                      <div
                        id={data.id + "-link-img"}
                        style={{ backgroundImage: `URL(${data.img})` }}
                        onClick={this.handleSearchLink}
                      ></div>
                    </div>
                    <div className="search-info-box">
                      <p
                        className="product-name"
                        id={data.id + "-link-category"}
                        onClick={this.handleSearchLink}
                      >
                        {data.name}
                      </p>
                      <ul>
                        <li>{data.category}</li>
                        <li>{data.stock}</li>
                        <li>{data.unit}</li>
                      </ul>
                      <p className="product-price">{data.price}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(LeftInputBar);
