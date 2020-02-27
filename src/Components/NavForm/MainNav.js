import React from "react";
import "../../Styles/mainNav.scss";

class MainNav extends React.Component {
	render() {
		return (
			<div className='MainNav'>
				<ul className='nav--list'>
					<li className='nav--list__item'>
						<div className='item'>Home</div>
					</li>
					<li className='nav--list__item h<div>as-dropdown '>
						<div className='item'>Product</div>
					</li>
					<li className='nav--list__item'>
						<div className='item'>Blog</div>
					</li>
					<li className='nav--list__item'>
						<div className='item'>Recipes</div>
					</li>
					<li className='nav--list__item'>
						<div className='item'>Lookbook</div>
					</li>
					<li className='nav--list__item'>
						<div className='item'>Contact</div>
					</li>
					<li className='nav--list__item'>
						<div className='item'>Login</div>
					</li>
				</ul>
			</div>
		);
	}
}

export default MainNav;
