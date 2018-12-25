import React, { Component } from 'react';
import {recipe} from "../tempDetails";
/**
 * RecipeDetails
 */
export class RecipeDetails extends Component { // eslint-disable-line react/prefer-stateless-function
   constructor(props){
     super(props)

     this.state={
       recipe: recipe,
       url: `https://www.food2fork.com/api/search?key=c7ea33defcca426cb91feb5cf22b4e06&rId={this.props.id}`

     }
   };
  render() {
    //console.log(this.state.recipe);
    const{image_url, publisher, publisher_url, source_url,url_title,ingredients}= this.state.recipe;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-6 my-3">
                
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


export default RecipeDetails;
