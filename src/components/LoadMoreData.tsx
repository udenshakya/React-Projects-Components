import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadMoreData = () => {
  const [count, setCount] = useState(0);
  const [productData, setProductData] = useState<string[]>([]);
  const [disableButton, setDisableButton] = useState(false);

  useEffect(() => {
    if (productData.length === 100) setDisableButton(true);
  }, [productData]);

  const { isLoading, error, isError } = useQuery({
    queryKey: ["products", count],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      setProductData((prevData) => [...prevData, ...data.products]);
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen w-full animate-spin text-4xl">
        <AiOutlineLoading3Quarters />
      </div>
    );
  }

  if (isError) return <div>{error.message} </div>;

  return (
    <div className=" container mx-auto p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-5 gap-y-5 place-items-center">
        {productData?.map((item: any) => (
          <div
            key={item.id}
            className="h-[250px] w-[200px] p-2 bg-gray-300 rounded-lg shadow-md hover:bg-gray-400 transition-all duration-400"
          >
            <img
              src={item.thumbnail}
              alt="images"
              className="w-[80%] mx-auto h-[70%] rounded-lg"
            />
            <div className="w-[80%] mx-auto">
              <h1 className="">{item.title} </h1>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setCount(count + 1)}
        disabled={disableButton}
        className="flex justify-center items-center mt-4 mx-auto p-1 px-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition-all"
      >
        Show More
      </button>
      {disableButton && <div className="text-center ">No more products</div>}
    </div>
  );
};

export default LoadMoreData;
