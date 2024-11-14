import Hero from "../Components/Hero";
import Container from "../Components/Container";
import RecipeCard from "../Components/RecipeCard";
import { useEffect, useState } from "react";
function Homepage() {
  const [loader, setLoader] = useState(true);
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}recipes`;
    try {
      const getRecipes = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data.slice(0, 4));
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
      <Hero />
      <Container title={"Latest Recipes"}>
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

export default Homepage;
