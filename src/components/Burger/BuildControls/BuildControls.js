import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Lettuce", type: "lettuce" },
  { label: "Cheese", type: "cheese" },
  { label: "Onion", type: "onion" },
  { label: "Tomato", type: "tomato" },
  { label: "Meat", type: "meat" }
];

const buildControls = props => {
  return (
    <div className={classes.BuildControls}>
      <p>Current Burger price:  <strong>₹ {(props.totalPrice) + 0.10*(props.totalPrice)}</strong>(incl of Taxes)</p>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            igPrice={props.igPrices[ctrl.type]}
          />
        );
      })}
      <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>Place Order</button>
    </div>
  );
};

export default buildControls;
