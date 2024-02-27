import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

const Header = () => {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 sm:px-6 border-b border-stone-400 flex justify-between items-center">
      <Link className="tracking-widest" to="/">Fast pizza co.</Link>
      <SearchOrder />
      <Username />
    </header>
  );
};

export default Header;
