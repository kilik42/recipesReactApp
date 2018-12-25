import React, { Component} from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

/**
 * RecipeList
 */
export class RecipeList extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <React.Fragment>
        <h1> Hello from list</h1>
        <RecipeSearch/>
        <Recipe/>
      </React.Frament>
    );
  }
}


export default RecipeList;
