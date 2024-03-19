import MenuItem from "./MenuItem";
import { TreeViewProps } from "./TreeView";

const MenuList = ({list=[]}:TreeViewProps) => {
  return (
    <ul className="flex flex-col mx-2 my-1">
      {list && list.length && list.map((listItem)=><MenuItem item={listItem} /> ) }
    </ul>
  );
}

export default MenuList;
