import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

const MenuItem = ({ pizza }) => {
  const { _id, imageUrl, name, unitPrice, ingredients, soldOut } = pizza;
  return (
    <li>
      <img alt={name} src={imageUrl} />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(", ")}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.object,
};
export default MenuItem;
