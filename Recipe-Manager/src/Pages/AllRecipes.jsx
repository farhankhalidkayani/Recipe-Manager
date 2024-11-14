import Container from "../Components/Container";
import RecipeCard from "../Components/RecipeCard";
import Loader from "../Components/Loader";
import { useState, useEffect } from "react";

function AllRecipes() {
  const [loader, setLoader] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const url = `${import.meta.env.VITE_API_URL}recipes`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data); // Only set loader to false after setting recipes
      } catch (err) {
        console.log(`Error while Fetching ${err}`);
      } finally {
        setLoader(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Container title="All Recipes">
          {recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              id={recipe._id}
              title={recipe.title}
              ingredients={recipe.ingredients}
              image={recipe.image}
            />
          ))}
        </Container>
      )}
    </>
  );
}

export default AllRecipes;
