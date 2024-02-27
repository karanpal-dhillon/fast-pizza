import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestautant";

export const loader = async () => {
  const menu = await getMenu();
  return menu;
};
const Menu = () => {
  const menu = useLoaderData();

  return (
    <ul>
      {menu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
};

export default Menu;
