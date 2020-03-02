import React from "react";
import Main from "../Main/Main";
import DetailTop from "../../Components/DetailTop";
import DetailBottom from "../../Components/DetailBottom";
import Footer from "../../Components/Footer/Footer";
import "../Detail/Detail.scss";

class Detail extends React.Component {
  constructor() {
    super();
    this.page = React.createRef();
    this.state = {
      bgSelector: null,
      windowScroll: 0,
      pageTop: 0
    };
  }

  bgChange = e => {
    if (e.target.name === "btn1" && this.state.bgSelector !== null) {
      this.setState({ bgSelector: true }, () =>
        console.log("bg", this.state.bgSelector)
      );
    } else if (e.target.name === "btn2") {
      this.setState({ bgSelector: false }, () =>
        console.log("bg", this.state.bgSelector)
      );
    }
  };

  getWindowScorllY = () => {
    this.setState(
      {
        windowScroll: window.pageYOffset,
        pageTop: this.page.current.offsetTop
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <Main>
        <div className="detail-main" onWheel={this.getWindowScorllY}>
          <div className="detail-cover1">
            <div
              className={
                this.state.bgSelector === null
                  ? "detail-cover2"
                  : this.state.bgSelector
                  ? "detail-cover2 bg-opacity2"
                  : "detail-cover2 bg-opacity1"
              }
            />
            <div className="btn-container">
              <button
                className={
                  this.state.bgSelector ? "btn-cover1-off" : "btn-cover1"
                }
                name="btn1"
                style={
                  this.state.bgSelector === null
                    ? null
                    : this.state.bgSelector
                    ? null
                    : { opacity: "1" }
                }
                onClick={this.bgChange}
              ></button>
              <button
                className={
                  !this.state.bgSelector ? "btn-cover2-off" : "btn-cover2"
                }
                name="btn2"
                onClick={this.bgChange}
                style={
                  this.state.bgSelector === null
                    ? { opacity: "1" }
                    : this.state.bgSelector
                    ? { opacity: "1" }
                    : null
                }
              ></button>
            </div>
          </div>
          <div
            className="detail-page-container"
            ref={this.page}
            style={{ zIndex: "15" }}
          >
            <DetailTop
              pageTop={this.state.pageTop}
              windowScroll={this.state.windowScroll}
            />
            <DetailBottom
              pageTop={this.state.pageTop}
              windowScroll={this.state.windowScroll}
            />
            <Footer />
          </div>
        </div>
      </Main>
    );
  }
}

export default Detail;
