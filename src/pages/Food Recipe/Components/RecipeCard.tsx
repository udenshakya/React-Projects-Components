import { Link } from "react-router-dom";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/reducer/cartSlice";

const RecipeCard = ({ recipe, dispatch}) => {
  // console.log(recipe)

  return (
    <div className="p-2 bg-gray-200 rounded-lg ">
      <div>
        <div className="h-[200px] w-[200px] mx-auto">
          <img
            src={recipe.image_url}
            alt="image"
            className="h-full w-full rounded-md object-cover overflow-hidden"
          />
        </div>
        <h1 className="text-center text-lg font-bold mt-3">{recipe.title} </h1>
        <div className="flex justify-center items-center gap-2">
          <Link to={`/detail/${recipe.id}`}>
            <Button title={"Recipe Details"} />
          </Link>
          <div onClick={() => dispatch(addToCart(recipe))}>
            <Button title={"Add to Cart"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
