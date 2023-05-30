import React, { useContext } from "react";
import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { Result } from "postcss";

const SocialLogin = () => {
  const { googleSignIn, gitHubSignIn, facebookLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathName || "/";

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((Result) => {
        const loggedInUser = Result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleGitHubLogin = () => {
    gitHubSignIn()
      .then((Result) => {
        const loggedInUser = Result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleFacebookLogin = () => {
    facebookLogin()
      .then((Result) => {
        const loggedInUser = Result.user;
        console.log(loggedInUser);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex space-x-5 justify-center">
      <button onClick={handleGoogleLogin}>
        <img
          className="w-8"
          src="https://i.ibb.co/Qp0BxZ7/free-google-1772223-1507807.png"
          alt=""
        />
      </button>
      <button onClick={handleGitHubLogin}>
        <img
          className="w-8"
          src="https://i.ibb.co/9h76T0f/github-512.png"
          alt=""
        />
      </button>
      <button onClick={handleFacebookLogin}>
        <img
          className="w-9"
          src="https://i.ibb.co/vH7mtKH/facebook-circle-color-512.png"
          alt=""
        />
      </button>
    </div>
  );
};

export default SocialLogin;
