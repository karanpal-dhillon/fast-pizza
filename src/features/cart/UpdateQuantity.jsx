import { useDispatch } from "react-redux"
import Button from "../../ui/Button"
import PropTypes from 'prop-types'
import { increaseQuantity, decreaseQuantity } from "./cartSlice"

const UpdateQuantity = ({ pizzaId, quantity }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-1">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>-</Button>
      {quantity}
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>+</Button>
    </div>
  )
}

UpdateQuantity.propTypes = {
  pizzaId: PropTypes.number,
  quantity: PropTypes.number
}

export default UpdateQuantity
