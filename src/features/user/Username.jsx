import { useSelector } from "react-redux"

const Username = () => {
  const { username } = useSelector(state => state.user)
  return (
    <div className="text-sm font-semibold hidden sm:block">
      {username}
    </div>
  )
}

export default Username
