import React, { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../ProtectedScreens/HomePage";
import SignIn from "./../Screens/SignIn/SignIn";

const Router = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" index element={<SignIn />} />
          <Route
            path="/"
            index
            element={
              <ProtectedRoutes>
                <HomePage />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default Router;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("CurrentUserIs")) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
};
