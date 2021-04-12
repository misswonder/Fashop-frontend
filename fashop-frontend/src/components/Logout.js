import { useEffect } from "react";

function Logout({ history, logout }) {
  useEffect(() => {
    logout();
    history.push("/login");
  }, []);

  return null;
}

export default Logout;