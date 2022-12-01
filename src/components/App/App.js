import React from 'react';
// import React, { useEffect, useState, useCallback } from 'react';
import { Route, Switch, useLocation, } from 'react-router-dom';
// import { CurrentUserContext } from '../../contexts/CurrentUserContext';

// import api from "../utils/Api";

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
// import { InfoTooltip } from './InfoTooltip/InfoTooltip';
// import * as auth from '../utils/Auth';
import './App.css';

function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  // const history = useHistory();
  const location = useLocation();

  return (
    <div className="page">
      {/* <CurrentUserContext.Provider > */}

      <Header />

      <main className="main">

        <Switch>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/signup">
            <Register />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/movies">
            <Movies />
          </Route>

          <Route path="/saved-movies">
            <SavedMovies />
          </Route>

          <Route path="/profile">
            <Profile />
          </Route>

          <Route path="/*">
            <NotFoundPage />
          </Route>

        </Switch>

      </main>

      {location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" ?
        <Footer /> : ''}

      {/* </CurrentUserContext.Provider> */}
    </div >
  );

  // return (
  //   <div className="page">
  //     {/* <CurrentUserContext.Provider > */}

  //     <Switch>

  //       <Route exact path="/">
  //         <Header />
  //         <Main />
  //         <Footer />
  //       </Route>

  //       <Route path="/signup">
  //         <Register />
  //       </Route>

  //       <Route path="/signin">
  //         <Login />
  //       </Route>

  //       <Route path="/movies">
  //         <Header />
  //         <Movies />
  //         <Footer />
  //       </Route>

  //       <Route path="/saved-movies">
  //         <Header />
  //         <SavedMovies />
  //         <Footer />
  //       </Route>

  //       <Route path="/profile">
  //         <Header />
  //         <Profile />
  //       </Route>

  //       <Route path="/*">
  //         <NotFoundPage />
  //       </Route>

  //     </Switch>

  //     {/* </CurrentUserContext.Provider> */}
  //   </div >
  // );
}

export default App;
