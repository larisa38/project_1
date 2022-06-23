'use strict';

const personalMovieDV = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function(){
    personalMovieDV.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    while(personalMovieDV.count == '' || personalMovieDV.count == null || isNaN(personalMovieDV.count)){
      personalMovieDV.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: function(){
    for(let i = 0; i < 2; i++) {
      const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
      if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDV.movies[a] = b;
        console.log('done!');
        } else {
        console.log('error');
        i--;
        }      
      }
    },
  detectPersonalLevel: function(){
    if(personalMovieDV.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
      } else if(personalMovieDV.count >= 10 && personalMovieDV.count < 30){
      console.log('Вы классический зритель');
      } else if(personalMovieDV.count >= 30) {
      console.log('Вы киноман');
      } else {
      console.log('Произошла ошибка');
      }
    },
  showMyDV: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDV);
      }
    },
  toggleVisibleMyDV: function(){
    if(personalMovieDV.privat){
      personalMovieDV.privat = false;
      } else {
      personalMovieDV.privat = true;
      }
    },
  writeYourGenres: function () {
    for(let i = 1; i <= 2; i++) {
    //   Другой способ: (i<=3) 
    // let genre = prompt(`Ваш любимый жанр под номером ${i}`);
    //   if(genre === '' || genre === null){
    //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
    //     i--;
    //     } else {
    //     personalMovieDV.genres[i-1] = genre;
    //     }
      let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

      if(genres === '' || genres === null){
        console.log('Вы ввели некорректные данные или не ввели их вовсе');
        i--;
        } else {
        personalMovieDV.genres = genres.split(',');
        personalMovieDV.genres.sort();
        }
      }

      personalMovieDV.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i + 1} - это ${item}`);
      });
    }     
};
