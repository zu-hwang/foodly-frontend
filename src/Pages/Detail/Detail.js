import React from "react";
import "../Detail/Detail.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fafacebookF } from "@fortawesome/free-regular-svg-icons";

class Detail extends React.Component {
  render() {
    return (
      <div className="detail-main">
        <div className="detail-cover" />

        <div className="detail-top">
          <div className="purchase-container">
            <div className="purchase-name">Brandywine Tomatoes</div>
            <div className="purchase-explanation">
              Harvest 2015 | In stock | kg
            </div>
            <div className="purchase">
              <div className="price-box">
                <div className="price">$8.05</div>
                <div className="kilogram">per kilogram</div>
              </div>
              <div className="purchase-box">
                <div className="purchase-quantity">
                  <button className="minus-btn">◁</button>
                  <input className="purchase-input" />
                  <button className="plus-btn">▷</button>
                  <span className="multiply">x$8.05=</span>
                </div>
                <div className="btn">
                  <button className="add-btn">ADD TO BAG</button>
                </div>
              </div>
            </div>
          </div>
          <div className="description-container">
            <div className="description-title">Description</div>
            <p className="description-text">
              Brandywine tomatoes popularly is considered among the best tasting
              available.
              <br />
              probably is caused its origin. Brandywine tomato plant is an
              heirloom cultivar of the
              <br />
              species. if you want to taste the best tomatoey flavor this tomato
              is exactly what you
              <br />
              need. This particular cultivar is extremely succulent and tasty.
              It is a beautifully sweet
              <br />
              tomato that is offset by a wonderful acidity that is a perfect
              combination for delicious
              <br />
              dishes.
            </p>
          </div>
          <div className="share-container">
            <div className="share-title">SHARE</div>
            <div className="facebook-logo" />
            {/* <FontAwesomeIcon icon={fafacebookF} /> */}
            <div className="twiter-logo" />
            <div className="pinterest-logo" />
            <div className="google-logo" />
            <div className="social-logo" />
          </div>
        </div>

        <div className="detail-bottom">
          <div className="nutritional-container">
            <div className="nutritional-title">Nutritional value</div>
            <div className="nutritional-value">
              <div className="value-box">
                <div className="energy-box">
                  <div className="energy">
                    <div>Energy</div>
                    <div className="energy-box-calorie">18Kcal</div>
                  </div>
                  <div className="carbohydrates">
                    <div>Carbohydrates</div>
                    <div className="energy-box-calorie">3.9g</div>
                  </div>
                  <div className="protein">
                    <div>Protein</div>
                    <div className="energy-box-calorie">0.9g</div>
                  </div>
                  <div className="total">
                    <div>Total Fat</div>
                    <div className="energy-box-calorie">0.2g</div>
                  </div>
                  <div className="dietary">
                    <div>Dietary Fiber</div>
                    <div className="energy-box-calorie">1.2g</div>
                  </div>
                </div>
                <div className="vitamins-box">
                  <div className="vitamins-text">Vitamins:</div>
                  <ul className="vitamins-ul">
                    <li className="vitamins-li">a</li>
                    <li className="vitamins-li">c</li>
                    <li className="vitamins-li">e</li>
                    <li className="vitamins-li">k</li>
                  </ul>
                </div>
                <div className="minerals-box">
                  <div className="minerals-title">Minerals:</div>
                  <ul className="minerals-ul">
                    <li className="minerals-li">Zn</li>
                    <li className="minerals-li">Ca</li>
                    <li className="minerals-li">Ma</li>
                    <li className="minerals-li">P</li>
                    <li className="minerals-li">Mn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="recipe-container">
            <div className="recipe-title">Special Recipe</div>
            <div className="recipe-box">
              <div className="recipe-box-bg">
                <div className="ingredients">INGREDIENTS</div>
                <img
                  src="https://www.simplyrecipes.com/wp-content/uploads/2015/09/pasta-pomodoro-shrimp-horiz-a2-2000.jpg"
                  className="recipe-img"
                  alt="recipe-img"
                />
                <div className="directions">DIRECTIONS</div>
              </div>
            </div>
            <div className="dish-name">Pasta Pomodoro with Shrimp</div>
            <div className="dish-box">
              <div className="ingredients-box">
                <ul className="ingredients-ul">
                  <li className="ingredients-li">1/2 pound angel hair pasta</li>
                  <li className="ingredients-li">
                    3/4 pound raw, peeled, deveined shrimp (medium sized)
                  </li>
                  <li className="ingredients-li">4 ripe Campari Tomatoes</li>
                  <li className="ingredients-li">3 cloves garilc. minced</li>
                  <li className="ingredients-li">
                    1/3 cup torn fresh basil leaves
                  </li>
                  <li className="ingredients-li">
                    3 Tbsp olive oil (divided, 1 Tbsp and 2 Tbsp)
                  </li>
                  <li className="ingredients-li">
                    Salt and freshly ground black pepper to taste
                  </li>
                </ul>
              </div>
              <div className="directions-box">
                1{" "}
                <p className="directions-text">
                  {" "}
                  Fill a large pot with 2 quarts of water. Bring to a boil (You
                  will be using this water to both blanch the tomatoes and boil
                  the pasta.) Core the tomatoes and use a sharp knife to cut a
                  small X into the bottom end of each tomato. When the water is
                  boiling, use a slotted spoon to lower the tomatoes into the
                  water. Blanch for no more than one minute, just enough to
                  loosen the skins. Remove tomatoes with a slotted spoon to a
                  bowl of icy water, saving the blanching water.
                </p>
                2{" "}
                <p className="directions-text">
                  {" "}
                  Peel off the tomato skins from the tomatoes. Cut the tomatoes
                  crosswise in half, and squeeze out most of the seeds and
                  juices. Chop the tomatoes into 1-inch pieces.
                </p>
                3{" "}
                <p className="directions-text">
                  {" "}
                  Heat 1 Tbsp of olive oil in a large sauté pan on medium high
                  heat. Add the shrimp to the pan and cook for 1 minute. Turn
                  the shrimp over in the pan. Lower the heat to medium.
                </p>
                4{" "}
                <p className="directions-text">
                  {" "}
                  Add the garlic, cook a minute more. Add the chopped tomatoes
                  and basil. Sprinkle with salt. Cook for a minute more and
                  remove from heat.
                </p>
                5{" "}
                <p className="directions-text">
                  {" "}
                  Add a tablespoon of salt to the water you used to blanch the
                  tomatoes. Bring to a boil again. Add the angel hair pasta and
                  cook for 3 minutes.
                </p>
                6{" "}
                <p className="directions-text">
                  {" "}
                  Drain the pasta and immediately add to pot with the shrimp and
                  tomatoes. Drizzle the pasta with 2 Tbsp of olive oil. Then
                  stir the pasta in with the shrimp and tomatoes. Serve
                  immediately or at room temp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
