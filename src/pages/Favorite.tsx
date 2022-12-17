import React from 'react';

import Favorites from '../components/Favorites/Favorites';
import { Meal } from '../App';

export type FavoriteType = {
  favoriteMeal: Meal[];
  deleteFavorite: Function;
};

export default function Favorite({
  favoriteMeal,
  deleteFavorite,
}: FavoriteType) {
  return (
    <div>
      <Favorites favoriteMeal={favoriteMeal} deleteFavorite={deleteFavorite} />
    </div>
  );
}
