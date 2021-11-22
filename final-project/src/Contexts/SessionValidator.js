import { useContext } from "react";
import SessionContext from "./SessionContext";

export default function ValidateSession(){
    const { setAuthenticated } = useContext(SessionContext);

    let currentSession = JSON.parse(localStorage.login);

    console.log(currentSession);

    return(<></>);
}