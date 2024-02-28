import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom"

const LinkButton = ({ children, to }) => {
  const navigate = useNavigate()
  const classNames = "text-sm text-blue-500 hover:text-blue-600 hover:underline"
  if (to === '-1') return <button className={classNames} onClick={() => navigate(-1)}>{children}</button>
  return (
    <Link className={classNames} to={to}>{children}</Link>
  )
}

LinkButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
}
export default LinkButton
