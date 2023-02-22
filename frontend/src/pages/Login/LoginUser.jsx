import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Joi from "joi";

import "./LoginUser.css";
import Logo from "../../assets/LogoHeader.svg";
import { useCurrentUserContext } from "../../contexts/CurrentUserContext";

export default function LoginUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const { setCurrentUser } = useCurrentUserContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { error: validationErrors } = Joi.object({
      email: Joi.string().max(45),
      password: Joi.string().max(255),
    }).validate({ email, password });
    if (validationErrors) {
      console.error(validationErrors);
    } else {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, {
          email,
          password,
        })
        .then(({ data }) => {
          setCurrentUser(data);
          navigate("/");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className="formsLogin">
      <Link to="/">
        <img src={Logo} alt="" className="logologin" />
      </Link>
      <form className="formslogItem" onSubmit={handleSubmit}>
        <label htmlFor="email" className="formsItem">
          Email{" "}
          <input
            type=" email"
            id="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="example@email.com"
          />
        </label>
        <label htmlFor="password" className="formsItem">
          Password{" "}
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
            placeholder="Your password"
          />
        </label>
        <p className="registerlink">
          {" "}
          Need an account? <span className="spanregister">Click here.</span>
        </p>
        <button type="submit" className="submit-btn-form">
          {" "}
          Login{" "}
        </button>
      </form>
    </div>
  );
}
