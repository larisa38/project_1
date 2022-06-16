const numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDV ={
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');


personalMovieDV.movies[a] = b;
personalMovieDV.movies[c] = d;

console.log(personalMovieDV);