import React, { useState, useEffect, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Favorite from './pages/Favorite';
import Contact from './pages/Contact';
import NavBar from './components/NavBar/NavBar';

export type Meal = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strInstructions: string;
  strMealThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
};

function App() {
  // state
  const [userInput, setUserInput] = useState<string>('');
  const [searchedMeal, setSearchedMeal] = useState<Meal[]>([]);
  const [noResult, setNoResult] = useState<string>('');
  const [favoriteMeal, setFavoriteMeal] = useState<Meal[]>([]);
  const [totalFavorite, setTotalFavorite] = useState<number>(0);

  // url
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${userInput}`;

  // fetch data
  const fetchData = async (): Promise<void> => {
    const result = await fetch(url);
    const data = await result.json();
    const meals = data.meals;
    // set all the meals state
    setSearchedMeal(meals);
  };

  // url dependency
  const getData = useCallback(fetchData, [url]);

  // useEffect for onetime fetch data
  useEffect(() => {
    getData();
  }, [getData]);

  // search onChange function
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(event.target.value);

    // for when there is no recipe searched
    if (!searchedMeal) {
      setNoResult('Sorry we have not got this recipe yet!');
    }
  };

  // add favorite meal on click heart
  const addFavoriteMeal = (recipe: Meal) => {
    let updateArray = [...favoriteMeal];
    let recipeIndex = updateArray.findIndex(
      (item) => item.idMeal === recipe.idMeal
    );

    if (recipeIndex !== -1) {
      setFavoriteMeal(updateArray);
    } else {
      let updateRecipe = { ...recipe };
      setFavoriteMeal([...updateArray, updateRecipe]);
      setTotalFavorite(favoriteMeal.length + 1);
    }
  };

  // remove from favorite meal on click heart
  const deleteFavorite = (recipe: Meal) => {};

  return (
    <div className='App'>
      <NavBar totalFavorite={totalFavorite} />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route
          path='/recipe'
          element={
            <Recipe
              userInput={userInput}
              handleChange={handleChange}
              searchedMeal={searchedMeal}
              noResult={noResult}
              addFavoriteMeal={addFavoriteMeal}
              deleteFavorite={deleteFavorite}
              totalFavorite={totalFavorite}
            />
          }
        ></Route>
        <Route
          path='/favorite'
          element={<Favorite favoriteMeal={favoriteMeal} />}
        ></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
