import React from "react";
import "../../Components/DetailBottom/DetailBottom.scss";

class DetailBottom extends React.Component {
  constructor() {
    super();
    this.state = {
      textArea: null,
      nameInput: null,
      emailInput: null,
      data: []
    };
  }

  focusIn = state => {
    this.setState({ [state]: true }, () => console.log(this.state));
  };
  focusOut = state => {
    this.setState({ [state]: false }, () => console.log(this.state));
  };

  componentDidMount() {
    fetch("http://localhost:3000/Data/detail.json")
      .then(res => res.json())
      .then(res => {
        this.setState(
          {
            data: res.data
          },
          () => {
            console.log(this.state.data);
          }
        );
      });
  }

  render() {
    return (
      <div className="detail-bottom">
        <div className="nutritional-a-container">
          <div
            className={
              this.props.pageTop < this.props.windowScroll + 100
                ? "nutritional-container container-move"
                : "nutritional-container"
            }
          >
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
                    <li>a</li>
                    <li>c</li>
                    <li>e</li>
                    <li>k</li>
                  </ul>
                </div>
                <div className="minerals-box">
                  <div className="minerals-title">Minerals:</div>
                  <ul className="minerals-ul">
                    <li>Zn</li>
                    <li>Ca</li>
                    <li>Ma</li>
                    <li>P</li>
                    <li>Mn</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recipe-a-container">
          <div
            className={
              this.props.pageTop < this.props.windowScroll - 300
                ? "recipe-container container-move"
                : "recipe-container"
            }
          >
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
                    3/4 pound raw, peeled, deveined shrimp <br /> (medium sized)
                  </li>
                  <li className="ingredients-li">4 ripe Campari Tomatoes</li>
                  <li className="ingredients-li">3 cloves garilc. minced</li>
                  <li className="ingredients-li">
                    1/3 cup torn fresh basil leaves
                  </li>
                  <li className="ingredients-li">
                    3 Tbsp olive oil <br /> (divided, 1 Tbsp and 2 Tbsp)
                  </li>
                  <li className="ingredients-li">
                    Salt and freshly ground black pepper <br /> to taste
                  </li>
                </ul>
              </div>
              <div className="directions-box">
                <ol className="directions-ol">
                  <li className="directions-li">
                    {" "}
                    Fill a large pot with 2 quarts of water. Bring to a boil
                    (You will be using this water to both blanch the tomatoes
                    and boil the pasta.) Core the tomatoes and use a sharp knife
                    to cut a small X into the bottom end of each tomato. When
                    the water is boiling, use a slotted spoon to lower the
                    tomatoes into the water. Blanch for no more than one minute,
                    just enough to loosen the skins. Remove tomatoes with a
                    slotted spoon to a bowl of icy water, saving the blanching
                    water.
                  </li>
                  <li className="directions-li">
                    {" "}
                    Peel off the tomato skins from the tomatoes. Cut the
                    tomatoes crosswise in half, and squeeze out most of the
                    seeds and juices. Chop the tomatoes into 1-inch pieces.
                  </li>
                  <li className="directions-li">
                    {" "}
                    Heat 1 Tbsp of olive oil in a large sauté pan on medium high
                    heat. Add the shrimp to the pan and cook for 1 minute. Turn
                    the shrimp over in the pan. Lower the heat to medium.
                  </li>
                  <li className="directions-li">
                    {" "}
                    Add the garlic, cook a minute more. Add the chopped tomatoes
                    and basil. Sprinkle with salt. Cook for a minute more and
                    remove from heat.
                  </li>
                  <li className="directions-li">
                    {" "}
                    Add a tablespoon of salt to the water you used to blanch the
                    tomatoes. Bring to a boil again. Add the angel hair pasta
                    and cook for 3 minutes.
                  </li>
                  <li className="directions-li">
                    {" "}
                    Drain the pasta and immediately add to pot with the shrimp
                    and tomatoes. Drizzle the pasta with 2 Tbsp of olive oil.
                    Then stir the pasta in with the shrimp and tomatoes. Serve
                    immediately or at room temp.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="commet-a-container">
          <div
            className={
              this.props.pageTop < this.props.windowScroll - 1600
                ? "comment-container container-move"
                : "comment-container"
            }
          >
            <div className="comment-title">LET'S HAVE A CHAT</div>
            <div className="comment-box">
              <div className="textarea-box">
                <div className="relative">
                  <label
                    className={
                      this.state.textArea === null
                        ? null
                        : this.state.textArea
                        ? "labelUp1"
                        : "labelDown1"
                    }
                  >
                    My message...
                  </label>
                  <textarea
                    onFocus={() => {
                      this.focusIn("textArea");
                    }}
                    onBlur={() => {
                      this.focusOut("textArea");
                    }}
                    className="comment-textarea"
                  />
                </div>
              </div>
              <div className="comment-input-box">
                <div className="relative">
                  <label
                    className={
                      this.state.nameInput === null
                        ? null
                        : this.state.nameInput
                        ? "labelUp2"
                        : "labelDown2"
                    }
                  >
                    My name is...
                  </label>
                  <input
                    className="comment-name-input"
                    onFocus={() => {
                      this.focusIn("nameInput");
                    }}
                    onBlur={() => {
                      this.focusOut("nameInput");
                    }}
                  />
                </div>
                <div className="relative">
                  <label
                    className={
                      this.state.emailInput === null
                        ? null
                        : this.state.emailInput
                        ? "labelUp2"
                        : "labelDown2"
                    }
                  >
                    Reply me to email...
                  </label>
                  <input
                    className="comment-email-input"
                    onFocus={() => {
                      this.focusIn("emailInput");
                    }}
                    onBlur={() => {
                      this.focusOut("emailInput");
                    }}
                  />
                </div>
              </div>
              <div className="comment-btn-box">
                <button className="comment-btn">SEND MY MESSAGE</button>
              </div>
            </div>
          </div>
        </div>
        <div className="similar-a-container">
          <div
            className={
              this.props.pageTop < this.props.windowScroll - 2000
                ? "similar-container container-move"
                : "similar-container"
            }
          >
            <div className="similar-title">Similar Products</div>
            <div className="similar-box">
              {this.state.data.map((el, index) => {
                return (
                  <div key={index} className="similar">
                    <img
                      className="similar-img"
                      src={el.small_image}
                      alt={`${el.name + index}`}
                    />
                    <div className="similar-product-name">{el.name}</div>
                    <div className="similar-product-explanation">
                      {el.price}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailBottom;
