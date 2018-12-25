import React, { Component } from "react";
import "./App.css";
import { recipes } from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetail from "./components/RecipeDetail";

class App extends Component {
  state = {
    recipes: [],
    url:
      "https://www.food2fork.com/api/search?key=c7ea33defcca426cb91feb5cf22b4e06"
  };

async   getRecipes(){
  try{
    const data = await fetch(this.state.url);
    const jsonData = await data.json()
    this.setState({
      recipes:jsonData.recipes
    });
  }
  catch(error){
    console.log(error);
  }


  }
  render() {
    return (
      <React.Fragment>
        <RecipeList />
        <RecipeDetails />
      </React.Fragment>
    );
  }
}

export default App;
