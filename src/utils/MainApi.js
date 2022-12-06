export class MainApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _getToken() {
    return localStorage.getItem('jwt');
  }

  _injectBearerToken(headers) {
    if (!this._getToken()) {
      return headers;
    }
    return {
      ...this._headers, 'Authorization': `Bearer ${this._getToken()}`,
    }
  }

  _returnFetchResult(res) {
    if (res.ok) {
      return res.json();
    }
    return res.json()
      .then((err) => {
        err.statusCode = res.status;
        return Promise.reject(err);
      });
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._injectBearerToken(this._headers),
    })
      .then(this._returnFetchResult);
  }

  getSavedMovies() {
    return fetch(`${this._url}/movies`, {
      method: 'GET',
      headers: this._injectBearerToken(this._headers),
    })
      .then(this._returnFetchResult);
  }

  editUserInfo(userName, userEmail) {
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._injectBearerToken(this._headers),
      body: JSON.stringify({
        name: userName,
        email: userEmail
      })
    })
      .then(this._returnFetchResult);
  }

  addMovie(data) {
    return fetch(`${this._url}/movies`, {
      method: 'POST',
      headers: this._injectBearerToken(this._headers),
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `https://api.nomoreparties.co/${data.image.url}`,
        trailerLink: data.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${data.image.formats.thumbnail.url}`,
        movieId: data.id,
        nameRU: data.nameRU,
        nameEN: data.nameEN,
      })
    })
      .then(this._returnFetchResult);
  }

  deleteMovie(id) {
    return fetch(`${this._url}/movies/${id}`, {
      method: 'DELETE',
      headers: this._injectBearerToken(this._headers),
    })
      .then(this._returnFetchResult);
  }
}

// changeLikeCardStatus(id, isLiked) {
//   return fetch(`${this._url}/movies/${id}/likes`, {
//     method: (isLiked ? "PUT" : "DELETE"),
//     headers: this._injectBearerToken(this._headers),
//   })
//     .then(this._returnFetchResult);
// }

// const mainApi = new MainApi({
//   baseUrl: 'https://api.mesto.project.nomoredomains.icu',
//   headers: {
//     'Content-Type': 'application/json'
//   }
// });

const mainApi = new MainApi({
  baseUrl: 'http://localhost:4000',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default mainApi;