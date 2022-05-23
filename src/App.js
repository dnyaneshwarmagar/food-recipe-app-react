
import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("veg")
  const API_ID = "6e2a588e";
  const APP_KEY = "718135d6d1913e55a0f5eaec730aa033";
  const urlForReciepe = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${API_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    try {
      const response = await fetch(urlForReciepe);
      const data = await response.json();
      setRecipes(data.hits)
      console.log('data:', data.hits)
    } catch (err) {
      console.log('err:', err.message)
    }

  }
  console.log("recipes: ", recipes)
  const updateSearch = (e) => {
    setSearch(e.target.value)
  }
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search)
    e.input.value = "";
  }
  return (
    <div className="App">

      <form onSubmit={getSearch} className='search-form'>
        <input placeholder='Search Recipies' className='search-bar' type="text" onChange={updateSearch} />
        <button className='search-button' type='submit'>Search</button>
      </form>

      <div className='recipes'>
            {recipes.map(item =>
              <Recipe title={item.recipe.label} calories={item.recipe.calories} image={item.recipe.image} ingredients={item.recipe.ingredients} key={uuidv4()}/>
              )}
      </div>

    </div>
  );
}

export default App;
