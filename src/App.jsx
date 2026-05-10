import { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import img from "./images/chef.png"

function App() {
  const [products, setProducts] = useState([]);
  const [color, setColor] = useState(true);

  const myRecipe = async () => {
    try {
      const recipe = await axios.get("https://dummyjson.com/recipes");
      setProducts(recipe.data.recipes);
    }

    catch (error) {
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
            return (
              <div className="card" key={eachRecipe.id}>
                <div className="recImage">
                  <img src={eachRecipe.image} alt={eachRecipe.name} />
                </div>

                <div className="info">
                  <div className="c-top">
                  <span>New</span>
                  <h3>{eachRecipe.name}</h3>
                  <p className='descr'>{eachRecipe.instructions[0]}</p>
                  <div className="tags">
                    <p>{eachRecipe.tags[0]}</p>
                    <p>{eachRecipe.mealType[0]}</p>
                    <p>{eachRecipe.cookTimeMinutes}mins</p>
                  </div>

                  </div>

                  <div className="flex">
                    <div className="btn">
                      <div className="diff">
                        <img src={img} className='rating' alt="" />
                        <p>{eachRecipe.difficulty}</p>
                      </div>


                      <div className="rat">
                        <div className="d">
                          <img src="https://cdn-icons-png.flaticon.com/128/2077/2077502.png" className='rating' alt="" />
                          <p>{eachRecipe.rating}</p>
                        </div>

                        <div className="d">
                          <img src="https://cdn-icons-png.flaticon.com/128/11213/11213197.png" className='rating' alt="" />
                          <p>{eachRecipe.reviewCount}</p>
                        </div>
                      </div>
                    </div>
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
