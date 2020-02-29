import React from "react";
import "../../Styles/ImgProduct.scss";

class ImgProduct extends React.Component {
	render() {
		return (
			<div className='product grid--in-row'>
				<div className='product__visuals'>
					<div className='product__link '>
						<div className='img-holder'>
							<img
								src='//cdn.shopify.com/s/files/1/1148/3974/products/Capia-Pepper-above_grande.jpeg?v=1456211049'
								alt=''
							/>
							<div className='product__cart'></div>
						</div>
					</div>
					<div className='product__cart'></div>
				</div>
				<div className='product__info'>
					<h4>
						<a href='I' title='capia-pepper'>
							Capia Pepper
						</a>
					</h4>
					<div className='vertical-bar'></div>
					<span>oz</span>
				</div>
			</div>
		);
	}
}

export default ImgProduct;
