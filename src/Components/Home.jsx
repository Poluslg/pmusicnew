import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const singin = () => {
    const link = "Login";
    navigate(link);
  };

  return (
    <div>

      <button
      className="bg-teal-500"
       onClick={singin}
       >Sing In
       </button>
    </div>
  );
};
