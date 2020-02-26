import React from 'react';
import "../../Styles/LogoContainer.scss";

class LogoContainer extends React.Component {

    render(){
        return( 
          <div className = "headerContainer">
            {/* Header search form */}
            <div className = "searchContainer" >
              <form className = "formSearchPrimary">
                <input type = "text" name = "Q" className = "searchInput" role = "search" />
                <div className = "iconSearch" >
                  {/* 돋보기 이미지 => 일단은 이미지로 했는데 나중에는 호버해서 색깔 바뀌게 해야함...우째하지*/}
                  <img src = "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-magnifier-4.png&r=0&g=0&b=0" />  
                </div>
                {/* 여기는 팝업창 용 빈 디브 */}
                <div className = "searchingPopup"></div>
              </form>
              <label className = "exchangeRateWrapper">
                <select className = "exchangeRatePicker"></select>
                {/* 얘는 className 이 dropdown open 이런 식으로 변할 때 오픈 되더라 */}
                <div className = "dropdown"></div>
              </label>
            </div>
            {/* 로고 중앙 글귀, 홈 로고 */}
            <div className = "centerContainer">
              <span className = "storeDesc">
                Organic food by Whytes' 
              </span>
              <a className = "siteLogo">
                <img src = "https://cdn.shopify.com/s/files/1/1148/3974/files/logo_81149f76-33f4-4e96-9653-e9b0474902fe_x96.png?v=1488284668"></img>
              </a>
              <span className = "storeDesc">
                from Manitoba, Canada
              </span>
            </div>
            {/* 장바구니 오픈 버튼 */}
            <button className = "cartOpenButton" className = "cartOpenButton" type = "button">
              <span className = "cartTotal">
                <span className = "money">
                $0.00
                  {/* 로직넣어서 그날 환율로 계산되게 하자! */}
                </span>
                {/* 여기에 장바구니에서 올라온 것들의 값이 계산될거야 */}
              </span>
              <span className = "iconCartWrapper">
                {/* 여기에 장바구니 이미지 */}
                <img id = "iconCart" src = "https://image.flaticon.com/icons/svg/126/126515.svg"/>
              </span>
              <spna className = "countCart">0</spna>
            </button>
          </div>
        )
    }
}

export default LogoContainer