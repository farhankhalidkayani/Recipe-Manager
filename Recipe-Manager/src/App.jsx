import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import AllRecipes from "./Pages/AllRecipes";
import Recipepage from "./Pages/Recipepage";
import AddRecipe from "./Pages/AddRecipe";
import EditRecipe from "./Pages/EditRecipe";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="/recipes/" element={<AllRecipes />} />
        <Route path="/recipes/:id" element={<Recipepage />} />
        <Route path="/recipes/add" element={<AddRecipe />} />
        <Route path="/recipes/:id/edit" element={<EditRecipe />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
