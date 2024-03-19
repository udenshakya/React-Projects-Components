import Tabs from "./Tabs";

const RandomComponent =()=>{
return <div>random content</div>
}


const TabTest = () => {

    const tabs = [
        {
            label:"Tab 1",
            content: <div>This is content for tab 1 </div>
        },
        {
            label:"Tab 2",
            content: <div>This is content for tab 2 </div>
        },
        {
            label:"Tab 3",
            content: <RandomComponent />
        },
    ]

    const handleChange = ()=>{
        
    }

  return (
    <div className="w-full h-[70%] flex justify-center">
      <Tabs tabsContent={tabs} onChange={handleChange} />
    </div>
  );
}

export default TabTest;
