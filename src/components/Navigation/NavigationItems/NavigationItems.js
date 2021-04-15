import React from "react";
import cssClasses from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";

export default function NavigationItems(props) {
  return (
    <div className={cssClasses.hideForMobile}>
      <ul className={cssClasses.NavigationItems}>
        <NavigationItem link="/" active>
          Burger Builder
        </NavigationItem>
        <NavigationItem link="/checkout/"> Check out</NavigationItem>
      </ul>
    </div>
  );
}
