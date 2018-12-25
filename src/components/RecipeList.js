import React, { Component} from 'react';
import Recipe from './Recipe';
import RecipeSearch from './RecipeSearch';

/**
 * RecipeList
 */
export class RecipeList extends Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    const{recipes} = this.props;
    return (
      <React.Fragment>

        <RecipeSearch/>
<div className= "container my-5">
  {/* title */}
<div className="row">
  <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
     <h1 className="text-slanted">recipe list</h1>
  </div>
</div>
</div>
{/* end of title */}
        <Recipe/>
      </React.Fragment>
    );
  }
}


export default RecipeList;
