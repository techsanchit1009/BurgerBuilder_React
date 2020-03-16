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
  console.log(props.disabled);
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => {
        return (
          <BuildControl
            key={ctrl.label}
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
          />
        );
      })}
    </div>
  );
};

export default buildControls;
