import { getMenu } from "../../services/apiRestautant";
export const loader = async () => {
  const menu = await getMenu();
  console.log(menu);
  return menu;
};
const Menu = () => {
  return <div>menu</div>;
};

export default Menu;
