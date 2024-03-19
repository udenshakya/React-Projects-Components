import { useContext } from "react";
import { FeatureFlagContext } from "./context/FeatureFlagContext";
import LightDarkMode from "../LightDarkMode/LightDarkMode";
import TicTacToe from "../TicTacToe";
import RandomColor from "../RandomColor/RandomColor";
import Accordian from "../accordian/Accordian";
import TreeView from "../TreeView/TreeView";
import menus from "../TreeView/data";

const FeatureFlags = () => {
  const { loading, enabledFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToe",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
  ];

  const checkEnableFlags = (currentKey:string) => {
    return enabledFlags[currentKey];
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
        <h1 className="text-center text-2xl font-bold">Feature Flags</h1>
      {componentsToRender.map((item) =>
        checkEnableFlags(item.key) ? item.component : null
      )}
    </div>
  );
};

export default FeatureFlags;
