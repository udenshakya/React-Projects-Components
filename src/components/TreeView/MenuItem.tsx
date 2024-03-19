import { useState } from "react";
import MenuList from "./MenuList";
import { MenuItemType } from "./TreeView";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";


type VisibilityStatus = {
  [key: string]: boolean;
};

const MenuItem = ({ item }: { item: MenuItemType }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState<VisibilityStatus>({});

  const handleToggleChildren = (currentLabel: any) => {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [currentLabel]: !displayCurrentChildren[currentLabel],
    });
  };

  return (
    <li>
      <div className="flex gap-2">
        <p>{item.label}</p>
        {item && item.children && item.children.length && (
          <span onClick={() => handleToggleChildren(item.label)}>{displayCurrentChildren[item.label] ?<FaMinus/> :<FaPlus/> } </span>
        )}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] && (
        <MenuList list={item.children} />
      )}
    </li>
  );
};

export default MenuItem;
