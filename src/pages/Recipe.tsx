import React from 'react';

import Search from '../components/Search/Search';
import Meals from '../components/Meals/Meals';
import { Meal } from '../App';

export type Props = {
  userInput: string;
  handleChange: Function;
  searchedMeal?: Meal[];
  noResult?: string;
  addFavoriteMeal?: Function;
  deleteFavorite?: Function;
  totalFavorite?: number;
};

export default function Recipe({
  userInput,
  handleChange,
  searchedMeal,
  noResult,
  addFavoriteMeal,
  deleteFavorite,
  totalFavorite,
}: Props) {
  return (
    <div>
      <Search userInput={userInput} handleChange={handleChange} />
      <Meals
        searchedMeal={searchedMeal}
        noResult={noResult}
        addFavoriteMeal={addFavoriteMeal}
        deleteFavorite={deleteFavorite}
        totalFavorite={totalFavorite}
      />
    </div>
  );
}
