import { useEffect, useState } from "react";
import { createContext } from "react";
import axios from "axios";
import useLocalStorageState from "use-local-storage-state";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useLocalStorageState("user", {
    defaultValue: null,
  });
  const API_URL = import.meta.env.VITE_API_URL;

  async function login(inputData) {
    try {
      let { data } = await axios.post(`${API_URL}/auth`, inputData);
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
