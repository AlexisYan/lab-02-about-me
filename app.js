'use strict';


var favoriteart = prompt ('Is Rococo my favorite period of art?');
if (favoriteart.trim().toLowerCase() == "no"){
  var period = prompt ('Is renaissance my favorite period of art?');
  if (period.trim().toLowerCase() == "yes"){
    alert ('You are right!');
  } else{
    console.log('You are close!');
  }
} else{
  alert ('You are wrong!');
}
