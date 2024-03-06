import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import Button from '../../ui/Button'
import { formatCurrency } from "../../utils/helpers";
import { addItem, getQuantityById } from "../cart/cartSlice";
import { useSelector } from "react-redux";
import DeleteItem from "../cart/DeleteItem";

const MenuItem = ({ pizza }) => {
  const { id, imageUrl, name, unitPrice, ingredients, soldOut } = pizza;
  const quantityInCart = useSelector(getQuantityById(id))
  const isInCart = quantityInCart > 0
  const dispatch = useDispatch()

  const handleClick = () => {
    const newItem = {
      pizzaId: id, name, quantity: 1, unitPrice, totalPrice: unitPrice * 1
    }
    dispatch(addItem(newItem))
  }

  return (
    <li className="flex gap-4 py-2">
      <img alt={name} className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`} src={imageUrl} />
      <div className="flex flex-col grow pt-0.5 ">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">{ingredients.join(", ")}</p>
        <div className="mt-auto flex justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm font-medium uppercase text-stone-500">Sold out</p>}
          {
            !soldOut && (
              !isInCart ?
                <Button type="small" onClick={handleClick}>Add to cart</Button> :
                <DeleteItem pizzaId={id} />
            )
          }
        </div>
      </div>
    </li>
  );
};

MenuItem.propTypes = {
  pizza: PropTypes.object,
};
export default MenuItem;
