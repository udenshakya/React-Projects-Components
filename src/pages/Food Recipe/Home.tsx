import { useContext } from "react";
import NavBar from "./Components/NavBar";
import RecipeCard from "./Components/RecipeCard";
import { RecipeContext } from "./Context/RecipeContext";
import { useDispatch } from "react-redux";

const Home = () => {
  const { data } = useContext(RecipeContext);
  const dispatch = useDispatch()


  return (
    <div className="container mx-auto p-3">
      <NavBar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3   lg:grid-cols-4 gap-6 mt-10">

        {data ?  data?.recipes?.map((dataList) => {
            
            return <RecipeCard dispatch={dispatch}  recipe={dataList} />;
        }):<div className="text-center text-2xl font-bold w-screen mx-auto">Search for recipes</div>  }
      </div>
    </div>
  );
};

export default Home;
