/* jshint ignore:start */
import React from "react";
import cssClasses from "./BuildControl.css";

const buildControl = (props) => (
  <div className={cssClasses.BuildControl}>
    <div className={cssClasses.Label}>{props.label}</div>
    <div className={cssClasses.buttonParent}>
      <button
        className={cssClasses.Less}
        onClick={props.removed}
        disabled={props.disabled}
      >
        Less
      </button>
      <button className={cssClasses.More} onClick={props.added}>
        More
      </button>
    </div>
  </div>
);

export default buildControl;
