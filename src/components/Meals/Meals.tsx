import React from 'react';

import MealCard from '../MealCard/MealCard';
import { Meal } from '../../App';
import './Meals.css';

type MealType = {
  searchedMeal?: Meal[];
  noResult?: string;
  addFavoriteMeal?: Function;
  deleteFavorite?: Function;
  totalFavorite?: number;
};

export default function Meals({
  searchedMeal,
  noResult,
  addFavoriteMeal,
  deleteFavorite,
  totalFavorite,
}: MealType) {
  return (
    <div className='mealcard-wrapper'>
      {searchedMeal ? (
        searchedMeal.map((m) => (
          <div key={m.idMeal} className='mealcard'>
            <MealCard
              meal={m}
              addFavoriteMeal={addFavoriteMeal}
              deleteFavorite={deleteFavorite}
              totalFavorite={totalFavorite}
            />
          </div>
        ))
      ) : (
        <div className='no-result'>
          <p>{noResult}</p>
        </div>
      )}
    </div>
  );
}
