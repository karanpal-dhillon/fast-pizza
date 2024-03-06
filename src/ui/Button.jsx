import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Button = ({ children, type, onClick, disabled, to }) => {
  const baseClasses = "bg-yellow-400 text-sm text-stone-800 uppercase inline-block font-semibold tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed"
  const styles = {
    primary: baseClasses + ' px-4 py-3 md:px-6 md:py-4',
    small: baseClasses + ' px-4 py-2 md:px-5 md:px-2.5 text-xs',
    round: baseClasses + ' px-2.5 py-1 md:px-3.5 md:px-2 text-sm',
    secondary: "text-stone-400 text-sm border border-2 border-stone-300  uppercase inline-block font-semibold tracking-wide rounded-full hover:bg-stone-300 hover:text-stone-700 transition-colors duration-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 focus:bg-stone-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5"
  }
  if (to)
    return <Link className={styles[type]} to={to}>{children}</Link>

  if (onClick)
    return <button className={styles[type]} disabled={disabled} onClick={onClick} >
      {children}
    </button>

  return <button className={styles[type]} disabled={disabled}>
    {children}
  </button>
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  to: PropTypes.string
}
export default Button
