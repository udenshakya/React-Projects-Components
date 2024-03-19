import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import ImageSlider from "./components/ImageSlider";
import RandomColor from "./components/RandomColor/RandomColor";
import Star from "./components/Star";
import Accordian from "./components/accordian/Accordian";
import LoadMoreData from "./components/LoadMoreData";
import TreeView from "./components/TreeView/TreeView";
import menus from "./components/TreeView/data";
import QRCodeGenerator from "./components/QRCode";
import LightDarkMode from "./components/LightDarkMode/LightDarkMode";
import ScrollIndicator from "./components/ScrollIndicator";
import TabTest from "./components/CustomTabs/TabTest";
import ModalMain from "./components/CustomModal/ModalMain";
import GithubProfileFinder from "./components/GithubProfileFinder";
import SearchAutoCompleteWithApi from "./components/SearchAutoCompleteWithApi";
import TicTacToe from "./components/TicTacToe";
import FeatureFlags from "./components/FeatureFlag/FeatureFlags";
import { FeatureFlagContextProvider } from "./components/FeatureFlag/context/FeatureFlagContext";
import TestUseFetch from "./components/useFetch/TestUseFetch";
import UseOutsideClickTest from "./components/useOutsideClick/useOutsideClickTest";
import UseWindowResizeTest from "./components/useWindowResize/UseWindowResizeTest";
import WeatherApp from "./components/Weather_App/WeatherApp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Food Recipe/Home";
import RecipeDetails from "./pages/Food Recipe/RecipeDetails";
import Favorites from "./pages/Food Recipe/Favorites";
import { RecipeContextProvider } from "./pages/Food Recipe/Context/RecipeContext";
import Cart from "./pages/Food Recipe/Cart";
import { Provider } from "react-redux";
import store from "./pages/Food Recipe/Redux/store";

const queryClient = new QueryClient();

function App() {
  return (
    <div>
      {/* Accordian */}
      {/* <Accordian /> */}

      {/* Random color generator */}
      {/* <RandomColor /> */}

      {/* Star */}
      {/* <Star starNumber={10} /> */}

      {/* <QueryClientProvider client={queryClient}> */}
      {/* Image Slider */}
      {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} /> */}

      {/* Load More Data  */}
      {/* <LoadMoreData /> */}
      {/* </QueryClientProvider> */}

      {/* Tree View */}
      {/* <TreeView menus={menus} /> */}

      {/* QR Code Generator */}
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url='https://dummyjson.com/products?limit=100' /> */}

      {/* Custom tabs */}
      {/* <TabTest /> */}

      {/* Custom Modal */}
      {/* <ModalMain/> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder  /> */}

      {/* Search Auto Complete With Api */}
      {/* <SearchAutoCompleteWithApi/> */}

      {/* TicTacToe */}
      {/* <TicTacToe /> */}

      {/* Feature Flag */}
      {/* <FeatureFlagContextProvider>
        <FeatureFlags />
      </FeatureFlagContextProvider> */}

      {/* useFetch Custom hook */}
      {/* <TestUseFetch /> */}

      {/* useOutsideClick custom hook */}
      {/* <UseOutsideClickTest /> */}

      {/* useWindowResize custom hook */}
      {/* <UseWindowResizeTest /> */}

      {/* Weather App */}
      {/* <WeatherApp /> */}

      {/* Food Recipe App */}
          <BrowserRouter>
      <Provider store={store}>
        <RecipeContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<RecipeDetails />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
        </RecipeContextProvider>
      </Provider>
          </BrowserRouter>
    </div>
  );
}

export default App;
