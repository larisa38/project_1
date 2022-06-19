'use strict';

let numberOfFilmes;

function start() {
  numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '');
   while(numberOfFilmes == '' || numberOfFilmes == null || isNaN(numberOfFilmes)){
        numberOfFilmes = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

const personalMovieDV = {
    count: numberOfFilmes,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

//function rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDV.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if(personalMovieDV.count >= 10 && personalMovieDV.count < 30){
        console.log('Вы классический зритель');
    } else if(personalMovieDV.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

//function detectPersonalLevel();

function showMyDV(hidden) {
    if (!hidden) {
        console.log(personalMovieDV);
    }
}
showMyDV(personalMovieDV.privat);

function writeYourGenres() {
 for(let i = 1; i <= 3; i++) {
    personalMovieDV.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();

//console.log(personalMovieDV);