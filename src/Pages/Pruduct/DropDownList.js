import React from 'react';
import "../../Styles/DropDownList.scss"

//  옵션 선택하는 곳!

class DropDownList extends React.Component {
  constructor(){
    super();
    this.state = {
     now : "State",
     mode: "none"
    }
  }

  modeChange =() => {
    if(this.state.mode === "none"){
      this.setState({
        mode:"block"
      })
    }else if (this.state.mode === "block"){
      this.setState({
      mode:"none"
      })
    };
  }

  handleChange = (event) => {
    this.setState({
      now: event.target.value,
      mode: "hidden"
    })
  }

  render(){
      return( 
        <div className = "dropDownList">
          <div className = "dropDown">
            <button className = "dropDown__button"  onClick = {this.modeChange}>
              {this.state.now}
            </button>
            <ul className = "dropDownContainer" onClick = {this.handleChange} style = {{display : this.state.mode}}>
              <li className = "dropdown-list__item" onClick = {this.handleChange}>State</li>
              <li className = "dropdown-list__item" onClick = {this.handleChange}>Any states</li>
              <li className = "dropdown-list__item" onClick = {this.handleChange}>Fresh</li>
              <li className = "dropdown-list__item" onClick = {this.handleChange}>Frozen</li>
              <li className = "dropdown-list__item" onClick = {this.handleChange}>Dried</li>
              <li className = "dropdown-list__item" onClick = {this.handleChange}>Liquid</li>
            </ul>
          </div>
        </div>
      )
  }
}

export default DropDownList


            {/* <select className = "sortFilter"   >
              <option value="state"selected>State</option>
              <option value="any states">Any states</option>
              <option value="fresh">Fresh</option>
              <option value="frozen">Frozen</option>
              <option value="dried">Dried</option>
              <option value="liquid">Liquid</option>
            </select> */}


          {/* <select className = "sortFilter"  value={this.state.value} onClick={this.handleChange} >
            <option value="state">State</option>
            <option value="any states">Any states</option>
            <option selected value="fresh">Fresh</option>
            <option value="frozen">Frozen</option>
            <option value="dried">Dried</option>
            <option value="liquid">Liquid</option>
          </select> */}


          // <button className="dropbtn"></button>
          //   <div className="dropdown-content">
          //     <a href="#" className = "state" >State</a>
          //     <a href="#" className = "any states" >Any States</a>
          //     <a href="#" className = "fresh" >Fresh</a>
          //     <a href="#" className = "frozen" >Frozen</a>
          //     <a href="#" className = "dried" >Dried</a>
          //     <a href="#" className = "liquid" >liquid</a>
          //   </div>