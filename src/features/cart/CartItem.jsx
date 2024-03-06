import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'
import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch()
  const { quantity, name, totalPrice } = cartItem

  function handleClick() {
    dispatch(deleteItem(cartItem.pizzaId))
  }

  return (
    <li className='py-3 sm:flex sm:items-center sm:justify-between'>
      <p className='mb-1 sm:mb-0'>{quantity}&times; {name}</p>
      <div className='flex justify-between items-center gap-6'>
        <p className='text-sm font-bold'>{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={handleClick}>Delete</Button>
      </div>
    </li>
  )
}

CartItem.propTypes = {
  cartItem: PropTypes.shape({
    pizzaId: PropTypes.number,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired
  })
}
export default CartItem
