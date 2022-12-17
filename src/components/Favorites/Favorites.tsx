import ClearIcon from '@mui/icons-material/Clear';

import { FavoriteType } from '../../pages/Favorite';
import './Favorite.css';

export default function Favorites({
  favoriteMeal,
  deleteFavorite,
}: FavoriteType) {
  console.log(favoriteMeal);
  return (
    <div className='favorite-wrapper'>
      <p className='favorite-header'>Favorite Recipe List</p>
      <p className='click'>Click the image to watch the video.</p>
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
            <a href={f.strYoutube} target='_blank' rel='noreferrer'>
              <img
                src={f.strMealThumb}
                alt={f.strMeal}
                className='favorite-img'
              />
            </a>
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
