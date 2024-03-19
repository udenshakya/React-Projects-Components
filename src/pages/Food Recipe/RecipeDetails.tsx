import { useParams } from "react-router-dom";
import { RecipeContext } from "./Context/RecipeContext";
import { useEffect, useContext } from "react";
import axios from "axios";
import NavBar from "./Components/NavBar";
import Button from "./Components/Button";

const RecipeDetails = () => {
  const { id } = useParams();
  const {
    recipeDetailData,
    setRecipeDetailData,
    handleAddToFavorite,
    favoriteList,
  } = useContext(RecipeContext);

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      setRecipeDetailData(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recipeDetailData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-3">
      <NavBar />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        <div>
          <img
            src={recipeDetailData?.recipe.image_url}
            alt={recipeDetailData?.title}
            className="w-full rounded-md"
          />
        </div>
        <div className="">
          <h1 className="text-center font-bold mb-6">
            {recipeDetailData?.recipe.title}
          </h1>
          <div
            className=""
            onClick={() => handleAddToFavorite(recipeDetailData?.recipe)}
          >
            <Button
              title={
                favoriteList.findIndex(
                  (i) => i.id === recipeDetailData?.recipe.id
                ) !== -1
                  ? "Remove from Favorites"
                  : "Save to Favorites"
              }
            />
          </div>
          <h1 className="font-bold mb-4">Ingredients</h1>
          <div className="">
            {recipeDetailData?.recipe.ingredients.map((i, index) => (
              <div key={index} className="flex gap-10">
                <p className="w-1/2">{i.description} </p>
                <p>{i.quantity} </p>
              </div>
            ))}
          </div>
          <p className="">{recipeDetailData?.recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
