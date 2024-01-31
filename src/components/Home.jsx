import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { apiRandomRecipeKey } from "../../secret";

const Home = () => {

  const getData = async () => {
    const { data } = await axios.get(
      `https://api.spoonacular.com/recipes/random?number=12&apiKey=${apiRandomRecipeKey}`
    );
    console.log(data.recipes);
  };

  getData();

  return (
    <>
      <h1>Data</h1>
    </>
  );
};

export default Home;
