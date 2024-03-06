import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { deleteItem } from './cartSlice'
import Button from '../../ui/Button'

const DeleteItem = ({ pizzaId }) => {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(deleteItem(pizzaId))
  }

  return (
    <div>
      <Button type="small" onClick={handleClick}>Delete</Button>
    </div>
  )
}

DeleteItem.propTypes = {
  pizzaId: PropTypes.number
}
export default DeleteItem
