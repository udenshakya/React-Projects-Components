import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const WeatherApp = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async (param: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=94ad0dd90e943aeb149b6b7ccab13db1`
      );

      setWeather(data);
      setLoading(false);
    } catch (error: any) {
      console.error("Error fetching weather data:", error);
      setLoading(true);
      setError(error);
      throw error; // Re-throw the error to handle it in the component
    }
  };

  console.log(weather);

  //   useEffect(() => {
  //     fetchData("patan");
  //   }, []);

  const handleSearch = async () => {
    fetchData(search);
  };

  const getCurrentDate = () => {
    const date = new Date();
    return date.toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  function kelvinToCelsius(kelvin: number) {
    return kelvin - 273.15;
  }

  // Example usage
  // const temperatureKelvin = 298.48;
  // const temperatureCelsius = kelvinToCelsius();
  // console.log("Temperature in Celsius:", temperatureCelsius.toFixed(2));

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className=" w-full h-screen mx-auto flex justify-center items-center ">
      <div className="bg-orange-200 h-[70%] w-1/2 flex flex-col justify-center items-center  p-4 gap-10 rounded-lg">
        <div className=" flex gap-3">
          <input
            type="text"
            value={search}
            placeholder="Enter City Name"
            className="px-3 py-2 border-2 rounded-lg"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="px-3 py-2 bg-green-300 rounded-lg"
            onClick={handleSearch}
          >
            Search{" "}
          </button>
        </div>
        {/* Display weather data here */}
        {loading ? (
          <div className="animate-spin text-4xl flex justify-center items-center mt-56">
            <BiLoaderAlt />
          </div>
        ) : (
          <>
            <div className="text-2xl font-bold">
              {weather?.name},<span>{weather?.sys?.country} </span>{" "}
            </div>
            <div>
              <p>{getCurrentDate()} </p>{" "}
            </div>
            <div className="text-4xl font-bold">
              <h1>{kelvinToCelsius(weather?.main.temp).toFixed(2)} </h1>
            </div>
            <div className="text-xl">
              <h2>{weather?.weather[0].description} </h2>{" "}
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col gap-2">
                <h2 className="text-center font-bold">
                  {weather?.main.humidity}%{" "}
                </h2>
                <h2>Humidity </h2>
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="text-center font-bold">
                  {weather?.wind.speed}{" "}
                </h2>
                <h2>Wind Speed </h2>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
