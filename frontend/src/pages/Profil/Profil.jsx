import axios from "axios";
import { useState } from "react";
import { NavLink, Navigate } from "react-router-dom";
import Joi from "joi";

import { useCurrentUserContext } from "../../contexts/CurrentUserContext";
import "./Profil.css";

const Profil = () => {
  const { setCurrentUser, currentUser } = useCurrentUserContext();

  const [newInfos, setNewInfos] = useState({
    id: currentUser.id,
  });

  const onChange = (e) => {
    const newData = newInfos;
    newData[e.target.id] = e.target.value;
    if (e.target.value.length < 1) {
      delete newData[e.target.id];
    }
    setNewInfos(newData);
  };

  const onSubmits = (e) => {
    const { error: validationErrors } = Joi.object({
      id: Joi.number().required(),
      firstname: Joi.string().max(50),
      birthday: Joi.date(),
      phone: Joi.string().max(50),
      email: Joi.string().max(255),
      password: Joi.string().max(255),
    }).validate(e);
    if (validationErrors) {
      console.error(validationErrors);
    } else {
      axios
        .patch(
          `${import.meta.env.VITE_BACKEND_URL}/api/users/${currentUser.id}`,
          e
        )
        .then(({ data }) => {
          setCurrentUser(data);
        })
        .catch((err) => {
          console.error(err);
          console.error("Invalid Syntax");
        });
    }
  };
  return currentUser.id ? (
    <section>
      <div className="globalContainer">
        <div className="title-name">
          <ul className="navbarProfile">
            <li className="navbarItemProfile">
              <NavLink
                to="/profile"
                className={({ isActive }) => (isActive ? "active" : "navliink")}
              >
                <span className="title-picture">Profile Setting</span>
              </NavLink>
            </li>
            <li className="navbarItemProfile">
              <NavLink
                to="/history"
                className={({ isActive }) => (isActive ? "active" : "navliink")}
              >
                <span className="title-picture-1">History</span>
              </NavLink>
            </li>
          </ul>
        </div>
        <form className="formProfil" onSubmit={onSubmits}>
          <section className="container-1">
            <div className="picture-logo">
              <div className="img_profil">
                <p className="plus">+</p>
              </div>
            </div>
            <div className="username">
              <h2>Name</h2>
              <label htmlFor="username">
                <span className="spanName">{currentUser.firstname}</span>
              </label>
            </div>
            <div className="userbirthday">
              <h2>Birthday</h2>
              <label htmlFor="userbirthday">
                <span className="spanBirthday">{currentUser.birthday}</span>
              </label>
            </div>
            <div className="userphonecontainer">
              <h2>Phone number</h2>
              <label htmlFor="userphone">
                <span className="spanPhone">{currentUser.phone}</span>
              </label>
            </div>
          </section>
          <section className="container-email-password">
            <div className="useremail">
              <h2>Change your email</h2>
              <label htmlFor="email">
                <span className="spanEmail">
                  Your Email : {currentUser.email}
                </span>
              </label>
              <label htmlFor="newemail">
                <span className="spanEmail">New Email : </span>
                <input
                  id="newemail"
                  name="newemail"
                  type="email"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  placeholder="example@example.com"
                  onChange={onChange}
                />
              </label>
            </div>
            <div className="userpassword">
              <h2>Change your password</h2>
              <label htmlFor="yourpassword">
                <span className="spanPassword">Current Password : </span>
                <input
                  id="yourpassword"
                  name="yourpassword"
                  type="password"
                  placeholder="Your current password !"
                  onChange={onChange}
                />
              </label>
              <label htmlFor="newpassword">
                <span className="spanPassword">New Password : </span>
                <input
                  id="newpassword"
                  name="newpassword"
                  type="password"
                  placeholder="New password "
                  onChange={onChange}
                />
              </label>
              <label htmlFor="repeatnewpassword">
                <span className="spanPassword">Repeat New Password : </span>
                <input
                  id="repeatnewpassword"
                  name="repeatnewpassword"
                  type="password"
                  placeholder="Repeat your password"
                  onChange={onChange}
                />
              </label>
            </div>
          </section>
          <div className="buttonContainer">
            <button className="submitButton" type="submit">
              Valid
            </button>
          </div>
        </form>
      </div>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};

export default Profil;
