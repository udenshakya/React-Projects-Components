import { ReactElement, useState } from "react";

type tabItems = {
  label: string;
  content: string | ReactElement
};

type tabsContentPropsTypes = {
    tabsContent: tabItems[]
    onChange:(onchange: number)=>void
    
}

const Tabs = ({ tabsContent, onChange }:tabsContentPropsTypes) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (currentIndex: number) => {
    setCurrentTabIndex(currentIndex);
    onChange(currentIndex);
  };

  return (
    <div>
      <div className="flex gap-10  p-2">
        {tabsContent.map((tabItems, index) => (
          <div className={`${currentTabIndex === index ? "bg-blue-500":"bg-blue-400"} mb-10 transition-all duration-400 rounded-lg py-2 px-4 cursor-pointer`} key={tabItems.label} onClick={() => handleOnClick(index)}>
            <span>{tabItems.label} </span>
          </div>
        ))}
      </div>
      <div className="text-center text-xl ">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
