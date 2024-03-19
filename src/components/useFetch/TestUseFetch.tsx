import useFetch from "./useFetch";

const TestUseFetch = () => {
  const { data, loading, error } = useFetch(
    "https://dummyjson.com/products"
  );

  
  if (loading) {
      return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    // Render data when available
    return (
        <div>
            <h1 className="text-center">useFetch Custom Hook</h1>
        {console.log(data)};
      {data?.products.map((product) => <div key={product.id}>{product.title}</div>)}
    </div>
  );
};

export default TestUseFetch;
