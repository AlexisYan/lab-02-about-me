'use strict';

var tally = 0;
var favoriteart = prompt ('Is renaissance my favorite period of art?');
  if (favoriteart.trim().toLowerCase() == 'yes'){
    alert ('Right');
    tally ++;
  }else{
    alert('wrong');
  }
var favoriteFood = prompt ('Is pho my favorite food?');
  if (favoriteFood.trim().toLowerCase() == 'yes'){
    alert('right');
    tally ++;
}else {
    alert('wrong');
}
var favoriteColor = prompt('Is my favorite color blue?');
  if (favoriteColor.trim().toLowerCase() == 'no'){
    alert('right');
    tally++;
  }else {
    alert('wrong');
  }
var favoritanimal = prompt('Is my favorite animal cat?');
  if(favoritanimal.trim().toLowerCase() == 'yes'){
    alert('right');
    tally++;
  }else {
    alert ('wrong');
  }
var question = prompt ('Do I think stealing from other people is right?');
  if (question.trim().toLowerCase() == 'no'){
    alert('right');
    tally++;
  }else {
    alert('wrong');
  }
var number;
var stop = true;
for (var guess = 0; guess  < 4 && stop; guess++){
  number = prompt ('how many meals do I eat every day?');
  if (number === '11' ){
    stop = !stop;
    tally++;
  }else if (guess === 3){
    alert('you don\'t have chance anymore!')
  } else{
    alert('keep guessing!')
  }
}
var countries = ['spain', 'italy', 'greece'];
var guessCountry;
var Done = true;
  for (var game = 0; game < 7 && Done; game++){
    guessCountry = prompt ('What is my favorite country to visit?');
      if (guessCountry === countries[0]|| guessCountry === countries[1]|| guessCountry === countries[2] || guessCountry === countries [3]){
        Done = !Done;
        alert('I\'d love to visit' + ' ' + countries);
        tally ++;
      }else if (game === 6){
        Done = !Done;
        alert('I\'d love to visit' + ' ' + countries);
      }else {
        alert('keep guessing!')
      }
  }
  console.log(tally);
