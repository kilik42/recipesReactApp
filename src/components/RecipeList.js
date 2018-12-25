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

        <RecipeSearch/>

        
        <Recipe/>
      </React.Fragment>
    );
  }
}


export default RecipeList;
