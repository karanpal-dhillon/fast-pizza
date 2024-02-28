import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({ children, type, onClick, disabled, to }) => {
  const baseClasses = "bg-yellow-400 text-stone-800 uppercase inline-block font-semibold tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
  const styles = {
    primary: baseClasses + ' px-4 py-3 md:px-6 md:py-4',
    small: baseClasses + ' px-4 py-2 md:px-5 md:px-2.5 text-xs'
  }
  if (to)
    return <Link className={styles[type]} to={to}>{children}</Link>

  return (
    <button className={styles[type]} disabled={disabled} onClick={onClick} >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  to: PropTypes.string
}
export default Button
