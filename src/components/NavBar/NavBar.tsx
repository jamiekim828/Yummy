import { Link } from 'react-router-dom';
import './NavBar.css';

type Total = {
  totalFavorite: number;
};

export default function NavBar({ totalFavorite }: Total) {
  const style = { textDecoration: 'none' };
  return (
    <div className='navbar'>
      <div className='logo'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/2388/2388956.png'
          alt='logo'
        />
        <p>YUMYUM</p>
      </div>
      <div className='menu'>
        <Link style={style} to='/'>
          <span>HOME</span>
        </Link>
        <Link style={style} to='/recipe'>
          <span>RECIPE</span>
        </Link>
        <Link style={style} to='/favorite'>
          <span>FAVORITE</span>
          <span className='badge badge-warning' id='lblCartCount'>
            {totalFavorite}
          </span>
        </Link>
        <Link style={style} to='/contact'>
          <span>CONTACT</span>
        </Link>
      </div>
    </div>
  );
}
