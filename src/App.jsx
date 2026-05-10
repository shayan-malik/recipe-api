import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  const myRecipe = async() => {
    try{
      const recipe = await axios.get("https://dummyjson.com/recipes");
      setProducts(recipe.data.recipes);
    }

    catch(error){
      console.log("Error", error)
    }
    
  }

  useEffect(() => {
    myRecipe()
  }, [])

  return (
    <div className="app">
      <div className="main">
        <div className="cards">
          {products.map((eachRecipe) => {
            return(
              <div className="card" key={eachRecipe.id}>
                <div className="recImage">
                  <img src={eachRecipe.image} alt={eachRecipe.name} />
                </div>

                <div className="info">
                <h3>{eachRecipe.name}<span>New</span></h3>
                  <div className="tags">
                    <p>{eachRecipe.tags[0]}</p>
                    <p>{eachRecipe.mealType[0]}</p>
                    <p>{eachRecipe.cookTimeMinutes}mins</p>
                    </div>

                    <div className="btn">
                      <button>Add to Cart</button>
                    </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
