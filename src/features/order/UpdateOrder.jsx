import PropTypes from 'prop-types'
import { useFetcher } from 'react-router-dom'
import { updateOrder } from '../../services/apiRestautant'
import Button from '../../ui/Button'

const UpdateOrder = ({ order }) => {
  const fetcher = useFetcher()
  return (
    <fetcher.Form className='text-right' method='PATCH'>
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  )
}

UpdateOrder.propTypes = {
  order: PropTypes.object,
}

export const action = async ({ _request, params }) => {
  const data = { priority: true }
  await updateOrder(params.id, data)
  return null
}
export default UpdateOrder
