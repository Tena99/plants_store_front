import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import useLocalStorageState from "use-local-storage-state";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useLocalStorageState("user", {
    defaultValue: null,
  });

  async function login(inputData) {
    try {
      let { data } = await axios.post(
        "https://plants-store-backend.onrender.com/auth",
        inputData
      );
      setUser(data);
    } catch (error) {
      throw new Error("Login failed. Check your credentials");
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
