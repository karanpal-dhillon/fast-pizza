import { useRouteError } from "react-router-dom";
import LinkButton from "./LinkButton";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong 😵</h1>
      <p>{error.message}</p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
};

export default Error;
