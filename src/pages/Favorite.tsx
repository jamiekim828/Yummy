import React from 'react';

import Favorites from '../components/Favorites/Favorites';
import { Meal } from '../App';

export type FavoriteType = {
  favoriteMeal: Meal[];
};

export default function Favorite({ favoriteMeal }: FavoriteType) {
  return (
    <div>
      <Favorites favoriteMeal={favoriteMeal} />
    </div>
  );
}
