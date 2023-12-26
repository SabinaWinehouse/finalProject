import { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import About from "../About/About";
import Footer from "../Footer/Footer";
import NewsCardsList from "../NewsCardsList/NewsCardsList";
import Background from "../Background/Background";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Header from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import "./App.css";
import cardMocks from "../../mocks/cardMocks";
import SuccessPopup from "../SuccessPopup/SuccessPopup";

function App() {
  const [isLoginPopupOpened, setIsLoginPopupOpened] = useState(false);
  const [isRegisterPopupOpened, setIsRegisterPopupOpened] = useState(false);
  const [isSuccessPopupOpened, setIsSuccessPopupOpened] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const openLoginPopup = () => {
    setIsRegisterPopupOpened(false);
    setIsSuccessPopupOpened(false);
    setIsLoginPopupOpened(true);
  };

  const openRegisterPopup = () => {
    setIsLoginPopupOpened(false);
    setIsSuccessPopupOpened(false);
    setIsRegisterPopupOpened(true);
  };

  const closePopups = () => {
    setIsLoginPopupOpened(false);
    setIsRegisterPopupOpened(false);
    setIsSuccessPopupOpened(false);
  };

  const handleLogin = () => {
    setLoggedIn(true);
    closePopups();
  }

  const handleRegister = () => {
    setIsRegisterPopupOpened(false);
    setIsSuccessPopupOpened(true);
  }

  useEffect(() => {
    function handleEscapeClose(evt) {
      if (evt.key === "Escape") {
        closePopups();
      }
    }
    document.addEventListener("keydown", handleEscapeClose);
    return () => document.removeEventListener("keydown", handleEscapeClose);
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Background onOpen={openLoginPopup} />
          <NewsCardsList cards={cardMocks} />
          <About />
        </Route>
        <ProtectedRoute path="/saved-news" loggedIn={loggedIn}>
          <Header />
          <NewsCardsList cards={cardMocks} />
        </ProtectedRoute>
      </Switch>
      <Footer />
      <Login
        isOpened={isLoginPopupOpened}
        onClose={closePopups}
        type="login"
        openRegisterPopup={openRegisterPopup}
        handleLogin={handleLogin}
      />
      <Register
        isOpened={isRegisterPopupOpened}
        onClose={closePopups}
        type="register"
        openLoginPopup={openLoginPopup}
        handleRegister={handleRegister}
      />
      <SuccessPopup
        isOpened={isSuccessPopupOpened}
        onClose={closePopups}
        type="success"
        openLoginPopup={openLoginPopup}
      />
    </div>
  );
}

export default App;
