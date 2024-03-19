import { useContext } from "react";
import { Link } from "react-router-dom";
import { RecipeContext } from "../Context/RecipeContext";

const NavBar = () => {
  const { search, setSearch,handleSubmit } = useContext(RecipeContext);

  return (
    <nav className="flex justify-between p-2">
      <div>
        <Link to={"/"}>Recipe Ninja</Link>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          placeholder="Search Recipes..."
          className="border-2 rounded-lg px-2 py-1 "
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <div className="flex gap-2">
        <Link to={"/"}>Home </Link>
        <Link to={"/favorites"}>Favorites </Link>
        <Link to={"/cart"}>Cart </Link>
      </div>
    </nav>
  );
};

export default NavBar;
