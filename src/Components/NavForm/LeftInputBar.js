import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/LeftInputBar.scss";

class LeftInputBar extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "search--txt",
      inputValue: ""
      // toggle: false
    };
  }

  textStore = e => {
    this.setState({ inputValue: e.target.value });
  };

  openInput = e => {
    // if (e.target.value === null) {
    this.setState({
      display: "search--txt__open"
    });
    // }
  };

  closeInput = e => {
    e.target.value = "";
    this.setState({
      display: "search--txt",
      inputValue: ""
    });
  };

  render() {
    return (
      // Header Search Bar
      <div className="search--container">
        <div className="search--box" onMouseLeave={this.closeInput}>
          <input
            type="text"
            className={this.state.display}
            placeholder="Type your search request"
            onChange={this.textStore}
            value={this.state.inputValue}
            // style={
            //   this.state.toggle ? { display: "block" } : { display: "none" }
            // }
            // onClick
          />
          <div className="search--btn" onMouseEnter={this.openInput}>
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
        {/* 여기는 팝업창 용 빈 디브 */}
        <div className="searchingPopup"></div>
      </div>
    );
  }
}

export default LeftInputBar;
