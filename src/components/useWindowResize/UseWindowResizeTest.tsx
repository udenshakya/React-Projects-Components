import useWindowResize from "./useWindowResize";

const UseWindowResizeTest = () => {
  const { width, height } = useWindowResize();

  return (
    <div className="text-4xl">
      <h1 className="mb-10">useWindowResize Hook</h1>
      <p>Width is: {width} </p>
      <p>Height is: {height} </p>
    </div>
  );
};

export default UseWindowResizeTest;
