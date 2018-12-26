import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,
    url:"https://www.food2fork.com/api/search?key=c7ea33defcca426cb91feb5cf22b4e06",
      details_id: 35386
  };

  // async getRecipes(){
  //       try{
  //         const data = await fetch(this.state.url);
  //         const jsonData = await data.json()
  //         this.setState({
  //           recipes:jsonData.recipes
  //         });
  //       }
  //       catch(error){
  //         console.log(error);
  //       }
  //   }
  //
  //
  //   componentDidMount(){
  //     this.getRecipes()
  //
  //
  //   }

  render() {
    // console.log(this.state.recipes);
    return (
      <React.Fragment>
        <RecipeList recipes={this.state.recipes} />
      <RecipeDetails id={this.state.details_id}/>
      </React.Fragment>
    );
  }
}

export default App;
