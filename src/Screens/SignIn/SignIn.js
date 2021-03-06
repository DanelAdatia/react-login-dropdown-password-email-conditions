import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(0);
  const [count, setCount] = useState(0);

  const HandlePassword = (event) => {
    setPassword(event.target.value);
    CheckPasswords(event.target.value);
  };

 const CheckPasswords = (inputValue) => {
    let myArr = String(inputValue)
      .split("")
      .reduce((prevValue, curvalue) => {
        return Number(prevValue) + Number(curvalue);
      });
    setPasswordCheck(myArr);
  };

  const handleSignin = () => {
     CheckPasswords();
    console.log(passwordCheck);
    setCount(count + 1);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(email) === false) {
      window.alert("Email is not in correct");
    } else if (passwordCheck !== 10) {
      window.alert("The password sum of characters is not 10");
    } else {
      localStorage.setItem("CurrentUserIs", "d");
      navigate("/");
    }
  };
  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
        padding: 12,
      }}
    >
      <label>Email</label>
      <input
        type="email"
        placeholder="Email"
        name="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="Password"
        name="password"
        required
        value={password}
        onChange={HandlePassword}
      />
      <button onClick={handleSignin}>SignIN</button>
    </div>
  );
};

export default SignIn;
