import React from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Styles/LeftInputBar.scss";

class LeftInputBar extends React.Component {
	constructor() {
		super();
		this.state = {
			mode: "none"
		};
	}

	render() {
		return (
			// Header Search Bar
			<div className='search--container'>
				<div className='searchBar'>
					<input
						type='search'
						className='searchInput'
						// style={{ display: this.state.mode }}
					/>
					<div className='iconSearch'>
						<FontAwesomeIcon icon={faSearch} />
					</div>
				</div>
				{/* 여기는 팝업창 용 빈 디브 */}
				<div className='searchingPopup'></div>
			</div>
		);
	}
}

export default LeftInputBar;
