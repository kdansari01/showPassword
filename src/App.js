import { useState } from "react";
import "./styles.css";

export default function App() {
  const [passwordShow, setPasswordShow] = useState(false);
  const showPassword = () => {
    setPasswordShow(!passwordShow);
  };
  return (
    <div className="App">
      Password:
      <input type={passwordShow ? "text" : "password"} />
      <br />
      show Password
      <input type="checkBox" onClick={showPassword} />
    </div>
  );
}
