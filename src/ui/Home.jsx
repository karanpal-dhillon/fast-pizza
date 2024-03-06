import { useSelector } from "react-redux";
import Button from "./Button";
import CreateUser from "../features/user/CreateUser";

const Home = () => {
  const { username } = useSelector(state => state.user)

  return (
    <div className="my-10 text-center sm:my-16 px-4">
      <h1 className="text-xl font-bold mb-8 md:text-3xl">
        The best pizza <br />
        <span className="text-yellow-500">
          straight out of oven, straight to you.
        </span>
      </h1>
      {
        username === '' ?
          <CreateUser /> :
          <Button to="/menu" type="primary">Continue ordering, {username}</Button>
      }
    </div>
  );
};

export default Home;
