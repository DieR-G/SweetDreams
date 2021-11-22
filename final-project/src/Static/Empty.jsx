import { useContext, useEffect, useState } from "react";
import { GiCat } from "react-icons/gi";
import { useNavigate } from "react-router";
import SessionContext from "../Contexts/SessionContext";

export default function Empty() {
  const { authenticated, setAuthenticated } = useContext(SessionContext);
  let navigate = useNavigate();
  useEffect(() => {
    console.log(authenticated);
    if (!authenticated.logged) {
      navigate("/");
    }
  }, []);

  const logOut = () => {
    const emptySession = {
      logged: false,
      user: "",
      role: "",
      token: "",
    };
    setAuthenticated(emptySession);
    localStorage.setItem("login", JSON.stringify(emptySession));
    navigate("/login");
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="flex flex-col gap-y-10 items-center">
        <div>
          <p className="font-styled text-2xl text-purple-500">
            Hello {authenticated.user}
          </p>
        </div>
        <div className="flex font-round text-gray-800 gap-x-4 justify-center items-center w-full">
          <GiCat className="text-5xl xl:text-6xl" />
          <p className="w-6/12 text-2xl xl:text-5xl">Wow! there is nothing here</p>
        </div>
        <div>
          <button
            onClick={logOut}
            className="w-28 h-14 bg-indigo-600 hover:bg-indigo-700 font-semibold text-white rounded-xl text-2xl"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
