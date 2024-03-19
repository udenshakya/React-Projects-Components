import useLocalStorage from "./useLocalStorage";

const LightDarkMode = () => {
  // const [theme, setTheme] = useState("light");

  const [theme, setTheme] = useLocalStorage("theme", "light");

  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div
      className={`conatiner h-screen flex flex-col gap-10 justify-center items-center ${theme==="light"?"bg-white":"bg-gray-800"} transition-all duration-500  `}
    >
      <h1
        className={`text-2xl capitalize text-${
          theme === "dark" ? "white" : "black"
        }`}
      >
        {`This is ${theme} Mode`}
      </h1>
      <button
        onClick={ToggleTheme}
        className={`px-4 py-2 font-semibold ${theme==="light"?"bg-black":"bg-white"} ${theme==="light"?"text-white":"text-black"} rounded-full `}
      >
        Change Theme{" "}
      </button>
    </div>
  );
};

export default LightDarkMode;
