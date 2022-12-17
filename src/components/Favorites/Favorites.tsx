import ClearIcon from '@mui/icons-material/Clear';

import { FavoriteType } from '../../pages/Favorite';
import './Favorite.css';

export default function Favorites({
  favoriteMeal,
  deleteFavorite,
}: FavoriteType) {
  return (
    <div className='favorite-wrapper'>
      <p className='favorite-header'>Favorite Recipe List</p>
      {favoriteMeal.length === 0 ? (
        <div>
          <p>Please add your favorite recipes.</p>
        </div>
      ) : (
        favoriteMeal.map((f) => (
          <div className='favorite' key={f.idMeal}>
            <div className='favorite-text'>
              <p className='favorite-title'>{f.strMeal}</p>
              <p>
                <strong>Category:</strong> {f.strCategory}
              </p>
            </div>
            <img
              src={f.strMealThumb}
              alt={f.strMeal}
              className='favorite-img'
            />
            <div className='favorite-delete'>
              <ClearIcon
                onClick={() => deleteFavorite(f)}
                style={{ cursor: 'pointer' }}
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
}
