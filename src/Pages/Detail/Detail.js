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
      bgSelector: true,
      windowScroll: 0,
      pageTop: 0,
      data: []
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
  handleQuery = () => {
    console.log(this.props.location.search);
  };
  getData = () => {
    fetch(`http://10.58.5.105:8000/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          data: res.data
        })
      );
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

  componentDidMount() {
    this.handleQuery();
    this.getData();
  }

  componentDidMount() {
    this.handleQuery();
    this.getData();
    fetch(`http://10.58.5.105:8000/products/${this.props.match.params.id}`);
  }

  render() {
    return (
      <Main>
        <div className="detail-main" onWheel={this.getWindowScorllY}>
          <div
            className="detail-cover1"
            style={{
              backgroundImage: `url(${this.state.data.big_image1})`
            }}
          >
            <div
              style={{
                backgroundImage: `url(${this.state.data.big_image2})`
              }}
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
                    ? { backgroundImage: `url(${this.state.data.big_image1})` }
                    : this.state.bgSelector
                    ? { backgroundImage: `url(${this.state.data.big_image1})` }
                    : {
                        opacity: "1",
                        backgroundImage: `url(${this.state.data.big_image1})`
                      }
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
                    ? {
                        opacity: "1",
                        backgroundImage: `url(${this.state.data.big_image2})`
                      }
                    : this.state.bgSelector
                    ? {
                        opacity: "1",
                        backgroundImage: `url(${this.state.data.big_image2})`
                      }
                    : { backgroundImage: `url(${this.state.data.big_image2})` }
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
              data={this.state.data}
              pageTop={this.state.pageTop}
              windowScroll={this.state.windowScroll}
            />
            <DetailBottom
              data={this.state.data}
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
