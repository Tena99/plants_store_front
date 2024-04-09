import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import useLocalStorageState from "use-local-storage-state";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useLocalStorageState("user", {
    defaultValue: null,
  });
  const [isInvalid, setIsInvalid] = useState(false);

  async function login(inputData) {
    try {
      let { data } = await axios.post(
        "https://plants-store-backend.onrender.com/auth",
        inputData
      );

      setIsInvalid(false);
      setUser(data);
    } catch (error) {
      setIsInvalid(true);
      console.error(error);
    }
  }

  function logout() {
    setUser(null);
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
