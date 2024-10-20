import './Favorites.css';

const Favorites = ({ favorites, showWeather, removeFavorite }) => {

  return (
    <div className="favorites">
      <h3>Favorite Cities</h3>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <p>{favorite.city}</p>
            <button onClick={() => showWeather(favorite.city)}>Show Weather</button>
            <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
