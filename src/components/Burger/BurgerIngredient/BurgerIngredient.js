/* jshint ignore:start */

import React, { Component } from "react";
import cssClasses from "./BurgerIngredient.css";
import PropsTypes from "prop-types";

class BurgerIngredient extends Component {
  render() {
    let ingredient = null;
    switch (this.props.type) {
      case "bread-bottom":
        ingredient = <div className={cssClasses.BreadBottom}> </div>;
        break;

      case "bread-top":
        ingredient = (
          <div className={cssClasses.BreadTop}>
            <div className="Seeds1"></div>
            <div className="Seeds2"></div>
          </div>
        );
        break;

      case "meat":
        ingredient = <div className={cssClasses.Meat}></div>;
        break;

      case "cheese":
        ingredient = <div className={cssClasses.Cheese}></div>;
        break;

      case "salad":
        ingredient = <div className={cssClasses.Salad}></div>;
        break;

      case "bacon":
        ingredient = <div className={cssClasses.Bacon}></div>;
        break;

      default:
        ingredient = null;
        break;
    }
    return ingredient;
  }
}

BurgerIngredient.PropsTypes = {
  type: PropsTypes.string.isRequired,
};
export default BurgerIngredient;
