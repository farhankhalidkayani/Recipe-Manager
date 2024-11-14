import Hero from "../Components/Hero";
import Container from "../Components/Container";
import RecipeCard from "../Components/RecipeCard";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";

function Homepage() {
  const [loader, setLoader] = useState(true);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_URL}recipes`;

    const getRecipes = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setRecipes(data.slice(0, 4)); // Fetch only the latest 4 recipes
      } catch (err) {
        console.log(`Error while Fetching ${err}`);
      } finally {
        setLoader(false);
      }
    };

    getRecipes();
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Hero />
          <Container title={"Latest Recipes"}>
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
        </>
      )}
    </>
  );
}

export default Homepage;
