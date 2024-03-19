import axios from "axios";
import { useEffect, useState } from "react";

const ScrollIndicator = ({ url }: { url: string }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data.products);
        setLoading(false);
      } catch (e) {
        setError(true);
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleScrollPercentage = () => {
    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  if (loading) {
    return <div>Loading... </div>;
  }

  if (error) {
    return <div>Error Occured</div>;
  }
  console.log(scrollPercentage);

  return (
    <div className="  h-screen w-full  mx-auto ">
      <div className="bg-green-500 w-full text-center text-2xl p-4 fixed top-0 text-white">
        Custom Scroll Indicator{" "}
        <div style={{width:`${scrollPercentage}%`}} className={`bg-blue-500 h-2`} ></div>
      </div>
      <div className="flex flex-col items-center gap-4 mt-20">
        {data &&
          data?.map((item: { title: string }) => (
            <div key={item.title} className="">
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ScrollIndicator;
