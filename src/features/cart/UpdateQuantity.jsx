import PropTypes from 'prop-types'
import { useDispatch } from "react-redux"
import { decreaseQuantity, increaseQuantity } from "./cartSlice"
import Button from "../../ui/Button"

const UpdateQuantity = ({ pizzaId, quantity }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex gap-2 md:gap-3 items-center">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>-</Button>
      <span className='font-semibold text-sm'> {quantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>+</Button>
    </div>
  )
}

UpdateQuantity.propTypes = {
  pizzaId: PropTypes.number,
  quantity: PropTypes.number
}

export default UpdateQuantity
