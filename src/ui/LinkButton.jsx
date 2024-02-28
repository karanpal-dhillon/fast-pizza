import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

const LinkButton = ({ children }) => {
  const classNames = "text-sm text-blue-500 hover:text-blue-600 hover:underline"
  return (
    <Link className={classNames} to="/menu">{children}</Link>
  )
}

LinkButton.propTypes = {
  children: PropTypes.node
}
export default LinkButton
