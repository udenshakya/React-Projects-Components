import { useContext } from "react";
import NavBar from "./Components/NavBar";
import RecipeCard from "./Components/RecipeCard";
import { RecipeContext } from "./Context/RecipeContext";
import { useDispatch } from "react-redux";

const Favorites = () => {
  const { favoriteList } = useContext(RecipeContext);
  const dispatch = useDispatch()


  return (
    <div className="container mx-auto p-3">
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-6 mt-10">

        {favoriteList?.map((data,index) => {
            return <div key={index}>
              <RecipeCard  recipe={data} dispatch={dispatch} />
            </div>

              
        })}
      </div>
    </div>
  );
}

export default Favorites;
