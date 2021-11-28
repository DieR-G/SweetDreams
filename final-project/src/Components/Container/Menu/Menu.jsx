import React, { useContext } from "react";
import { useNavigate } from "react-router";
import SessionContext from "../../../Contexts/SessionContext";
import Button from "../../Button/Button";

const Menu = () => {
  const { authenticated, setAuthenticated } = useContext(SessionContext);
  let navigate = useNavigate();
  const logOut = () => {
    const emptySession = {
      logged: false,
      token: "",
    };
    setAuthenticated(emptySession);
    localStorage.setItem("login", JSON.stringify(emptySession));
    navigate("/login");
  };
  return (
    <div className="min-w-screen h-24 bg-purple-500 flex flex-row justify-end p-6  u-sm:mb-10">
      <Button
        onClick={logOut}
        localStyle="bg-pink-500 text-white font-normal font-semibold p-2 w-32"
        text="Logout"
      />
    </div>
  );
};

export default Menu;
