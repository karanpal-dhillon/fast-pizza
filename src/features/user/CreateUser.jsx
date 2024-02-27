import { useState } from "react"
import { Link } from "react-router-dom"

const CreateUser = () => {
  const [username, setUsername] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm md:text-base text-stone-600"> ✋ Welcome! please start by telling us your name</p>
      <input className="w-72" name="username" placeholder="Your full name" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      {
        username !== '' && <div className="mt-4"><Link to="/order/new" >Start ordering</Link></div>
      }
    </form>
  )
}

export default CreateUser
