import React from "react";
import Button from "./Button/Button"
import { NavLink } from "react-router-dom";
import "../styles/errorpage.css";

const ErrorPage = () => {
  return (
    <div>
      <div className="error-container">
        <div>
          <h2>404 Error</h2>
          <h3>UH OH! You're Lost</h3>
          <p>
            Oops, it looks like you've stumbled upon a page that's gone on an
            unexpected vacation! Try Again or you can always hit the Home button
            and pretend this never happened 😄🚀 .
          </p>
          <NavLink to="/">
            <Button>Go Back To Home Page</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
