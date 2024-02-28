import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../ui/Button"

const CreateUser = () => {
  const [username, setUsername] = useState('')
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <p className="mb-4 text-sm md:text-base text-stone-600"> ✋ Welcome! please start by telling us your name</p>
      <input className="w-72 input mb-4" name="username" placeholder="Your full name" type="text" value={username} onChange={e => setUsername(e.target.value)} />
      {
        username !== '' && (<div className="mt-4">
          <Button onClick={() => navigate('/order/new')}>
            Start ordering
          </Button>
        </div>)
      }
    </form>
  )
}

export default CreateUser
