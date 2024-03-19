import { useEffect, useState } from "react";


const useFetch =  (url: string, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(url, { ...options });
      if (!res.ok) throw new Error(res.statusText);
      const resData = await res.json();
      setData(resData);
      setLoading(false);
    } catch (error: any) {
        setError(error);
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  // console.log(data)
  return { data, loading, error };
};

export default useFetch;
