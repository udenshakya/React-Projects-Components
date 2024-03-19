import MenuList from "./MenuList";

export type MenuItemType = {
    label: string;
    to: string;
    children?: MenuItemType[];
  };
  
 export type TreeViewProps = {
    menus?: MenuItemType[];
    list?:MenuItemType[]
  };

const TreeView = ({menus=[]}:TreeViewProps) => {
  return (
    <div className=" bg-blue-100 h-screen w-[30%]">
      <MenuList list={menus} />
    </div>
  );
}

export default TreeView;
