import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/LeftInputBar.scss";

class LeftInputBar extends React.Component {
  constructor() {
    super();
    this.state = {
      // mode: "none"
      toggle: "searchInput"
    };
  }

  handleInput = () => {
    if (this.state.toggle === "searchInput") {
      this.setState({
        toggle: "searchInput--open"
      });
    } else if (this.state.toggle === "searchInput--open") {
      //여기서는 닫히는게 아니라 다른 경로로 이동해야해
      this.setState({
        toggle: "searchInput"
      });
    }
  };

  render() {
    return (
      // Header Search Bar
      <div className="search--container">
        <div className="searchBar">
          <input
            type="search"
            className={this.state.toggle}
            placeholder="Type your search request"
          />
          <div className="iconSearch" onClick={this.handleInput}>
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
