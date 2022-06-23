import React from "react";
import classes from './Header.module.css'
import HeaderCardButton from "./HeaderCartButton";
const Header = () => {
  return (
    <React.Fragment>
      <header className={classes['header']}>
        <div>
          <h1>
            ReactMeals
          </h1>
        </div>
        <div>
          <HeaderCardButton />
        </div>
      </header>
      <div id="jumbotron" className={classes["main-image"]}>
       <img src={require('../../assets/meals.jpg') } alt="meals" />
      </div>
    </React.Fragment>
  )
}

export default Header;