import React, { Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{
  state = {
    ingredients: {
      lettuce: 1,
      cheese: 2,
      meat: 1,
      tomato: 0,
      onion: 1,
    }
  }

  render(){
    return(
      <Aux>
        <Burger ingredients={this.state.ingredients}/>
        <div>BuildControls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;