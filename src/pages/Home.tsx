import food from '../assets/food.jpeg';
import cake from '../assets/cake.avif';
import shrimp from '../assets/shrimp.avif';
import pizza from '../assets/pizza.webp';
import salad from '../assets/salad.avif';
import chicken from '../assets/chicken.avif';

export default function Home() {
  return (
    <div className='home-img'>
      <p className='home-head'>Healty delicious recipes</p>
      <img src={food} alt='logo' />
      <p className='popular'>Popular food</p>
      <p className='popular-intro'>
        We provides a variety of food and beverage recipes with height taste
        from famous chefs
      </p>
      <div className='popular-images'>
        <a>
          <img src={cake} alt='cake' />
        </a>
        <a>
          <img src={shrimp} alt='shrimp' />
        </a>
        <a>
          <img src={pizza} alt='pizza' />
        </a>
        <a>
          <img src={salad} alt='salad' />
        </a>
        <a>
          <img src={chicken} alt='chicken' />
        </a>
      </div>
    </div>
  );
}
