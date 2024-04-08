import styles from "./styles.module.css";
import Button from "react-bootstrap/Button";
import { UserContext } from "../../../Context/createContext";
import { useState } from "react";
import { useContext } from "react";

export default function Login() {
  const { user, login, logout, isInvalid } = useContext(UserContext);
  const [inputData, setInputData] = useState({ email: null, password: null });

  return (
    <>
      {user ? (
        <div className={styles.message_container}>
          <p>
            <span>Hi {user.nickname}!</span> Ready to dive into the world of
            botanical wonders at Plantopia? 🌿
          </p>
          <Button
            variant="success"
            onClick={logout}
            className={styles.logout_btn}
          >
            Log out
          </Button>
        </div>
      ) : (
        <form
          className={styles.form_container}
          onSubmit={(event) => {
            event.preventDefault();
            login(inputData);
          }}
        >
          <h3>Login to Your Account</h3>

          <div className={styles.input_container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-envelope-fill"
              viewBox="0 0 16 16"
            >
              <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
            </svg>
            <input
              type="email"
              className="form-control"
              placeholder="E-mail"
              onChange={(event) =>
                setInputData({ ...inputData, email: event.target.value })
              }
            />
          </div>

          <div className={styles.input_container}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              fill="currentColor"
              className="bi bi-lock-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" />
            </svg>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(event) =>
                setInputData({ ...inputData, password: event.target.value })
              }
            />
          </div>

          {/* {isInvalid ? <div>Invalid credentials</div> : undefined} */}

          <Button type="submit" variant="success" className={styles.submit_btn}>
            Sign in
          </Button>
        </form>
      )}
    </>
  );
}
