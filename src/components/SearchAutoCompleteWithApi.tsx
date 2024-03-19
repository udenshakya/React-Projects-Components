import axios from "axios";
import { useEffect, useState } from "react";

type ProductType = {
  title: string;
};

const SearchAutoCompleteWithApi = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    setProductData(data.products);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        placeholder="Enter product"
      />

      <div>
        {productData
          ?.filter((product) => {
            if (search === "") {
              return product;
            } else if (product.title.toLowerCase().includes(search)) {
              return product;
            }
          })
          .map((item) => (
            <div>
              <p onClick={()=>setSearch(item.title)}>{item.title} </p>{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchAutoCompleteWithApi;
