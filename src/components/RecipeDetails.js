import React, { Component } from 'react';
import {recipe} from "../tempDetails";
/**
 * RecipeDetails
 */
export class RecipeDetails extends Component { // eslint-disable-line react/prefer-stateless-function
  state = {
    recipes:[],
    url: "https://www.food2fork.com/api/search?key=c7ea33defcca426cb91feb5cf22b4e06"
  };


  getRecipes(){

  }
  render() {
    return (
      <React.Fragment>
        <h1> Hello from details</h1>
      </React.Fragment>
    );
  }
}


export default RecipeDetails;
