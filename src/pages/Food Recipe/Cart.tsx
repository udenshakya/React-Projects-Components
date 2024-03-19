import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Components/NavBar";
import { removeFromCart } from "./Redux/reducer/cartSlice";

const Cart = () => {
  const recipe = useSelector((state) => state.cart);
  console.log(recipe);

  const dispatch = useDispatch();

  return (
    <div className="container p-3 mx-auto">
      <NavBar />
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr,1fr]">
        <div className="flex flex-col gap-4 ">
          {recipe ? (
            recipe.map((i) => (
              <div key={i.id} className="flex gap-4">
                <div className="w-full flex justify-between gap-2">
                  <img
                    src={i.image_url}
                    alt={i.title}
                    className="w-[200px] h-[150px] rounded-md"
                  />
                  <p>{i.title} </p>
                <button className="bg-gray-200 rounded-lg px-3 py-1 my-auto" onClick={() => dispatch(removeFromCart(i.id))}>remove</button>
                </div>
              </div>
            ))
          ) : (
            <div>Nothing in cart</div>
          )}
        </div>

        <div>total</div>
      </div>
    </div>
  );
};

export default Cart;
