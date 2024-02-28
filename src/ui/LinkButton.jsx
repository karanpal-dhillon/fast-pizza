import { Link } from "react-router-dom"
const LinkButton = () => {
  const classNames = "text-sm text-blue-500 hover:text-blue-600 hover:underline"
  return (
    <Link className={classNames} to="/menu">&larr; Back to menu</Link>
  )
}

export default LinkButton
