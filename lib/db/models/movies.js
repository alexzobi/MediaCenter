'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // @flow

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Movie = function () {
  function Movie(name, description, rating, genre, year, studio, cast, image) {
    _classCallCheck(this, Movie);

    this._data = {
      id: (0, _uuid2.default)(),
      name: name,
      description: description,
      rating: rating,
      genre: genre,
      year: year,
      studio: studio,
      cast: cast,
      image: image,
      createdAt: new Date(),
      updatedAt: new Date()
    };
  }

  _createClass(Movie, [{
    key: 'id',
    get: function get() {
      return this._data.id;
    }
  }, {
    key: 'name',
    get: function get() {
      return this._data.name;
    },
    set: function set(name) {
      this._data.name = name;
    }
  }, {
    key: 'description',
    get: function get() {
      return this._data.description;
    },
    set: function set(description) {
      this._data.description = description;
    }
  }, {
    key: 'rating',
    get: function get() {
      return this._data.rating;
    },
    set: function set(rating) {
      this._data.rating = rating;
    }
  }, {
    key: 'genre',
    get: function get() {
      return this._data.genre;
    },
    set: function set(genre) {
      this._data.genre = genre;
    }
  }, {
    key: 'year',
    get: function get() {
      return this._data.year;
    },
    set: function set(year) {
      this._data.year = year;
    }
  }, {
    key: 'studio',
    get: function get() {
      return this._data.studio;
    },
    set: function set(studio) {
      this._data.studio = studio;
    }
  }, {
    key: 'cast',
    get: function get() {
      return this._data.cast;
    },
    set: function set(cast) {
      this._data.cast = cast;
    }
  }, {
    key: 'image',
    get: function get() {
      return this._data.image;
    },
    set: function set(image) {
      this._data.image = image;
    }
  }, {
    key: 'createdAt',
    get: function get() {
      return this._data.createdAt;
    }
  }, {
    key: 'updatedAt',
    get: function get() {
      return this._data.updatedAt;
    },
    set: function set(updatedAt) {
      this._data.updatedAt = updatedAt;
    }
  }]);

  return Movie;
}();

exports.default = Movie;