import React from "react";
import axios from "axios";
import { apiRandomRecipeKey } from "../../secret";

const Home = () => {
  // const api = process.env.REACT_APP_API_KEY_ONE;

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/random?number=12&apiKey=${apiRandomRecipeKey}`
    );
    console.log(data.recipes);
  };

  getData();

  return <> </>;
};

export default Home;
