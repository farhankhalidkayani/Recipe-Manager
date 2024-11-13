import Container from "../Components/Container";
import RecipeCard from "../Components/RecipeCard";
import { useState, useEffect } from "react";

function AllRecipes() {
  const [loader, setLoader] = useState(true);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const url = "/api/recipes";
    try {
      const getRecipes = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data);
      };
      getRecipes();
    } catch (err) {
      console.log(`Error while Fetching ${err}`);
    } finally {
      setLoader(false);
    }
  }, []);
  return (
    <>
      <Container title={"All Recipes"}>
        {loader
          ? "Loading ..."
          : recipes.map((recipe) => {
              return (
                <RecipeCard
                  key={recipe._id}
                  id={recipe._id}
                  title={recipe.title}
                  ingredients={recipe.ingredients}
                  image={recipe.image}
                />
              );
            })}
      </Container>
    </>
  );
}

export default AllRecipes;
