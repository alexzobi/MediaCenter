// @flow

import uuid from 'uuid';

export default class Movie {
  constructor(
    name,
    description,
    rating,
    genre,
    year,
    studio,
    cast,
    image,
  ) {
    this._data = {
      id: uuid(),
      name,
      description,
      rating,
      genre,
      year,
      studio,
      cast,
      image,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  get id() {
    return this._data.id;
  }

  get name() {
    return this._data.name;
  }

  get description() {
    return this._data.description;
  }

  get rating() {
    return this._data.rating;
  }

  get genre() {
    return this._data.genre;
  }

  get year() {
    return this._data.year;
  }

  get studio() {
    return this._data.studio;
  }

  get cast() {
    return this._data.cast;
  }

  get image() {
    return this._data.image;
  }

  get createdAt() {
    return this._data.createdAt;
  }

  get updatedAt() {
    return this._data.updatedAt;
  }

  set name(name) {
    this._data.name = name;
  }

  set description(description) {
    this._data.description = description;
  }

  set rating(rating) {
    this._data.rating = rating;
  }

  set genre(genre) {
    this._data.genre = genre;
  }

  set year(year) {
    this._data.year = year;
  }

  set studio(studio) {
    this._data.studio = studio;
  }

  set cast(cast) {
    this._data.cast = cast;
  }

  set image(image) {
    this._data.image = image;
  }

  set updatedAt(updatedAt) {
    this._data.updatedAt = updatedAt;
  }
}
