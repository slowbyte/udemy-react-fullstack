import React, { Component } from "react";
import { pretty }  from "./styles/style.css"
class Header extends Component {

  inputChangeHandler(e){
     console.log(e.target.value);
  }
   
  render(){
      return(
        <header>
           <div className="logo">Logo</div>
           <input 
               onChange={this.inputChangeHandler}
           />    
        </header>
      )     
    }
//console.log(event.target.vaue);
}

export default Header;

