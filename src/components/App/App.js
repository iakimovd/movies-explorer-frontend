import React, { useEffect, useState } from 'react';
import { Route, Redirect, Switch, useLocation, useHistory } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import mainApi from '../../utils/MainApi';
import moviesApi from '../../utils/MoviesApi';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import Preloader from "../Preloader/Preloader";
import * as auth from '../../utils/Auth';
import useWindowSize from '../../hooks/useWindowSize';
import './App.css';

function App() {

  // Массив фильмов
  const [initialMovies, setInitialMovies] = useState([]);

  // Массив найденых фильмов в /movies
  const [filteredMovies, setFilteredMovies] = useState([]);

  // Массив сохраненных фильмов
  const [savedMovies, setSavedMovies] = useState([]);

  // Работа с шириной экрана и количеством карточек
  const { width } = useWindowSize();
  // setTimeout(() => useWindowSize, 1000);
  // console.log(width);
  const [number, setNumber] = useState(0);
  const [renderedMovies, setRenderedMovies] = useState(0);

  // Параметры запроса: текст и состояние чекбокса
  const [searchValue, setSearchValue] = useState('');
  const [checkboxValue, setCheckboxValue] = useState(false);

  // Попап с ошибками
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);

  const [loggedIn, setLoggedIn] = useState(false);

  // Прелоадер
  const [isloading, setIsLoading] = React.useState(false);

  // Авторизация
  const [currentUser, setCurrentUser] = useState(null);
  const [isSuccess, setIsSuccess] = useState(null);

  const [isNotChecked, setIsNotChecked] = React.useState(true);

  const history = useHistory();
  const location = useLocation();

  // Выход из аккаунта пользователя
  const onLogout = () => {
    setLoggedIn(false);
    setCurrentUser(null);
    localStorage.clear();
    localStorage.removeItem('jwt');
    setInitialMovies([]);
    setFilteredMovies([]);
    setSavedMovies([]);
    setSearchValue([]);
    history.push("/");
  };

  // Получить данные пользователя
  useEffect(() => {
    if (loggedIn) {
      mainApi.getUserInfo()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch(err => { console.log(err) })
    }
  }, [loggedIn]);

  console.log(loggedIn);

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (!jwt) {
      setIsNotChecked(false);
      onLogout();
      // localStorage.clear();
      return;
    }
    auth.checkToken(jwt)
      .then((res) => {
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((err) => {
        onLogout();
        // history.push("/");
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(false);
        // localStorage.clear();
        console.log(err);
      })
      .finally(() => {
        setIsNotChecked(false);
      })
  }, [history, isNotChecked]);

  // Регистрация пользователя
  const onRegister = ({ name, email, password }) => {
    return auth.register({ name, email, password })
      .then(() => {
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(true);
        onLogin({ email, password });
      })
      .then(() => history.push("/movies"))
      .catch((err) => {
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
  };

  // Логин пользователя
  const onLogin = ({ email, password }) => {
    return auth.authorize({ email, password })
      .then(({ token }) => {
        setLoggedIn(true);
        localStorage.setItem('jwt', token);
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(true);
        history.push("/movies");
      })
      .catch((err) => {
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
  };

  // Редактирование пользователя
  function handleUpdateUser(data) {
    mainApi.editUserInfo(data.name, data.email)
      .then((res) => {
        setCurrentUser(res);
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(true);
      })
      .catch((err) => {
        setIsInfoTooltipPopupOpen(true);
        setIsSuccess(false);
        console.log(err);
      })
  }


  useEffect(() => {
    if (localStorage.getItem('filteredMovies')) {
      const initialSearch = JSON.parse(localStorage.getItem('filteredMovies'));
      const searchResult = findMovie(initialSearch, searchValue, checkboxValue);
      setFilteredMovies(searchResult);
    }
  }, [searchValue, checkboxValue])


  // Загрузка сохраненных карточек пользователя
  useEffect(() => {
    if (loggedIn) {
      mainApi.getSavedMovies()
        .then((savedMovies) => {
          setSavedMovies(savedMovies);
        })
        .catch(err => { console.log(err) });
    }
  }, [loggedIn]);

  function handleSearchMovie(searchValue, checkboxValue) {
    setSearchValue(searchValue);
    setCheckboxValue(checkboxValue);

    const initialMovies = JSON.parse(localStorage.getItem('initialMovies'));

    if (!initialMovies) {
      setIsLoading(true);
      moviesApi
        .getInitialMovies()
        .then((movies) => {
          setInitialMovies(movies);
          localStorage.setItem('initialMovies', JSON.stringify(movies));
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        })
        .finally(() => {
          setIsLoading(false);
        })
    } else {
      setInitialMovies(initialMovies);
    }
  }

  useEffect(() => {
    if (initialMovies.length > 0) {

      const moviesStorage = findMovie(initialMovies, searchValue, checkboxValue);
      localStorage.setItem('filteredMovies', JSON.stringify(moviesStorage));
      localStorage.setItem('searchValue', searchValue);
      localStorage.setItem('checkboxValue', checkboxValue);

      setFilteredMovies(moviesStorage);
    }
  }, [initialMovies, searchValue, checkboxValue]);


  // Функция поиска фильмов
  function findMovie(movies, searchValue, checkboxValue) {
    let shortsFilter = movies;
    let result;

    if (checkboxValue) {
      shortsFilter = shortsFilter.filter((movie) => movie.duration <= 40);
    }

    result = shortsFilter.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(searchValue.toLowerCase());
    })
    return result;
  }

  // Сохранение фильма
  const handleSaveMovie = (movie) => {
    const like = savedMovies.some((i) =>
      i.movieId === movie.id
    );
    if (!like) {
      mainApi.addMovie(movie).then(res => {
        setSavedMovies([...savedMovies, res])
      })
    } else {
      const dislike = savedMovies.find((i) => i.movieId === movie.id)
      handleDeleteMovie(dislike)
    }
  }

  const isLiked = (data) => {
    return savedMovies.some(i => i.movieId === data.id && i.owner === currentUser?._id);
    // return savedMovies.some(i => i.movieId === data.id && i.movieId === data._id && i.owner === currentUser._id)
  }

  function closeAllPopups() {
    setIsInfoTooltipPopupOpen(false);
  }

  // Удаление фильма
  function handleDeleteMovie(movie) {
    mainApi.deleteMovie(movie._id)
      .then(() => {
        const updatedSavedMovies = savedMovies.filter((data) => data._id !== movie._id);
        setSavedMovies(updatedSavedMovies);
        // localStorage.setItem("savedMovies", JSON.stringify(updatedSavedMovies));
      })
      .catch((err) => {
        console.log(err);
      })
  }

  useEffect(() => {
    if (width >= 1280) {
      setNumber(3);
      setRenderedMovies(12);
    } else if (width >= 768 && width <= 1279) {
      setNumber(2);
      setRenderedMovies(8);
    } else if (width <= 600) {
      setNumber(1);
      setRenderedMovies(5);
    }
  }, [width])

  function showMoreMovies() {
    setRenderedMovies(renderedMovies + number);
  }

  if (isNotChecked) {
    return (<Preloader />);
  };

  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">

        <Header loggedIn={loggedIn} />

        <main className="main">

          <Switch>

            <Route exact path="/">
              <Main />
            </Route>

            <Route path="/signup">
              {!loggedIn ?
                (<Register onRegister={onRegister} />)
                :
                (<Redirect to="/movies" />)}
            </Route>

            <Route path="/signin">
              {!loggedIn ?
                (<Login onLogin={onLogin} />)
                :
                (<Redirect to="/movies" />)}
            </Route>

            <ProtectedRoute
              path="/movies"
              component={Movies}
              loggedIn={loggedIn}
              currentUser={currentUser}
              movies={filteredMovies}
              renderedMovies={renderedMovies}
              onSave={handleSaveMovie}
              onDelete={handleDeleteMovie}
              onSearch={handleSearchMovie}
              isLiked={isLiked}
              isLoading={isloading}
              showMoreMovies={showMoreMovies}
            // checkboxValue={checkboxValue}
            // onChangeCheckbox={onChangeCheckbox}
            />

            <ProtectedRoute
              path="/saved-movies"
              component={SavedMovies}
              loggedIn={loggedIn}
              movies={savedMovies}
              onDelete={handleDeleteMovie}
              // onSearch={handleSearchSavedMovie}
              isLiked={isLiked}
            // checkboxValue={checkboxValue}
            // onChangeCheckbox={onChangeCheckbox}
            />

            <ProtectedRoute
              path="/profile"
              component={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              onLogout={onLogout}
            />

            <Route path="/*">
              <NotFoundPage />
            </Route>

          </Switch>

        </main>

        {location.pathname === "/" || location.pathname === "/movies" || location.pathname === "/saved-movies" ?
          <Footer /> : ''}

        <InfoTooltip
          isOpen={isInfoTooltipPopupOpen}
          onClose={closeAllPopups}
          isSuccess={isSuccess}
        />

      </div >
    </CurrentUserContext.Provider>
  );
}

export default App;