import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext(null);

export const RecipeContextProvider = ({ children }: any) => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [recipeDetailData, setRecipeDetailData] = useState(null);
  const [favoriteList, setFavoriteList] = useState([])
  const navigate = useNavigate()

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`);
      setData(data.data);
      setSearch("")
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  };
  
  const handleSubmit = (e:any) => {
    e.preventDefault()
    fetchData();
    
  };

  const handleAddToFavorite = (currentItem)=>{
    let cpyFavoriteList = [...favoriteList]
    const index = cpyFavoriteList.findIndex((item)=>item.id === currentItem.id)

    if(index === -1){
        cpyFavoriteList.push(currentItem)
    }else {
        cpyFavoriteList.splice(index)
    }
    setFavoriteList(cpyFavoriteList)
  }
  console.log(favoriteList)

  return (
    <RecipeContext.Provider value={{ search, setSearch, handleSubmit,data,recipeDetailData, setRecipeDetailData,handleAddToFavorite ,favoriteList}}>
      {children}
    </RecipeContext.Provider>
  );
};
