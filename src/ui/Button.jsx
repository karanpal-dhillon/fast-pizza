import PropTypes from 'prop-types'
const Button = ({ children, onClick, disabled }) => {
  return (
    <button className="bg-yellow-400 text-stone-800 uppercase px-4 py-3 inline-block font-semibold tracking-wide rounded-full hover:bg-yellow-300 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4" disabled={disabled} onClick={onClick} >
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
}
export default Button
