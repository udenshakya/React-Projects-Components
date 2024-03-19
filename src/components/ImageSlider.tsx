import axios from "axios";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";

type SliderPropsType = {
  url: string;
  limit: number;
};

const ImageSlider = ({ url, limit }: SliderPropsType) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  //   useEffect(() => {
  //     const  fetchImage = async() => {
  //       const {data} = await axios.get(`${url}?limit=${limit}`);
  //       console.log(data);
  //       setImages(data);
  //     };
  //     fetchImage();
  //   }, [url]);

  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["images", url, limit],
    queryFn: async () => {
      const { data } = await axios.get(`${url}?limit=${limit}`);
      return data;
    },
  });

  const handlePrev = () => {
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="w-[90%] h-[90%] mx-auto overflow-hidden  flex relative">
        <button
          className="absolute left-0 p-2 top-1/2 transform -translate-y-1/2 "
          onClick={handlePrev}
        >
          ◀️
        </button>

        {data?.map((item: any, index: number) => (
          <img
            key={index}
            src={item.download_url}
            alt="images"
            className={
              currentSlide === index
                ? "block w-full h-full object-cover transition-all"
                : "hidden"
            }
          />
        ))}
        <button
          className="absolute right-0 p-2 top-1/2 transform -translate-y-1/2 "
          onClick={handleNext}
        >
          ▶️
        </button>
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2  flex gap-1 mb-1">
          {data?.map((_:any, index: number) => (
            <button
              key={index}
              className={`bg-white rounded-full transition-all w-5 h-5 ${
                currentSlide === index ? "bg-gray-400" : ""
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ImageSlider;
