import PropTypes from 'prop-types'
import { formatCurrency } from '../../utils/helpers'
const OrderItem = ({ item, ingredients, ingredientsLoading }) => {
  const { quantity, name, totalPrice } = item
  return (
    <li className='py-3'>
      <div className='flex items-center justify-between gap-4 text-sm'>
        <p><span className='font-bold'>{quantity}&times; </span>{name}</p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className='text-sm italic'>{ingredientsLoading ? 'loading....' : ingredients.join(', ')}</p>
    </li>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object,
  ingredients: PropTypes.array,
  ingredientsLoading: PropTypes.bool,
}

export default OrderItem
