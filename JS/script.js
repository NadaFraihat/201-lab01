'use strict';
let score=0;
let userName= prompt('Enter your name, Please!');
alert('Welcome '+ userName+' to my new web!');
let activityCase= prompt('Do I like swimming?');
switch (activityCase.toLowerCase()){
case 'yes':
//console.log('Sorry, but I hate and scared of it! I wish one day I Can face this thing');
  alert('Sorry, but I hate and scared of it! I wish one day I Can face this thing');
  break;
case 'y':
//console.log('Sorry, but I hate and scared of it! I wish one day I Can face this thing');
  alert('Sorry, but I hate and scared of it! I wish one day I Can face this thing');
  break;
case 'no':
//console.log('WOW! How did you know my secret!');
  alert('WOW! How did you know my secret!');
  score++;
  break;
case 'n':
//console.log('WOW! How did you know my secret!');
  alert('WOW! How did you know my secret!');
  score++;
  break;
default:
  alert('Why! try it! Just guess yes or no ');
  activityCase= prompt('Do I like swimming?');
  break;
}
console.log(score);
let travelingCase= prompt('Have I ever travelled before?');
switch (travelingCase.toLowerCase()){
case 'yes':
//console.log('Oh! It is my big big dream! I wish I can travel all around the world');
  alert('Oh! It is my big big dream! I wish I can travel all around the world');
  break;
case 'y':
//console.log('Oh! It is my big big dream! I wish I can travel all around the world');
  alert('Oh! It is my big big dream! I wish I can travel all around the world');
  break;
case 'no':
//console.log('Unfortunately.');
  alert('Unfortunately.');
  score++;
  break;
case 'n':
//console.log('Unfortunately.');
  alert('Unfortunately.');
  score++;
  break;
default:
  alert('Why! try it! Just guess yes or no ');
  travelingCase= prompt('Have I ever travelled before?');
  break;}
let myMovies= prompt('Do I like horror movies?');
switch (myMovies.toLowerCase()){
case 'yes':
//console.log('No! Not because I sraced. But I dont get any benifits from it! except sleeping with light On');
  alert('No! Not because I sraced. But I dont get any benifits from it! except sleeping with light On');
  break;
case 'y':
//console.log('No! Not because I sraced. But I dont get any benifits from it! except sleeping with light On');
  alert('No! Not because I sraced. But I dont get any benifits from it! except sleeping with light On');
  break;
case 'no':
//console.log('hooorry!');
  alert('hooorry!');
  score++;
  break;
case 'n':
//console.log('hooorry!');
  alert('hooorry!');
  score++;
  break;
default:
  alert('Why! try it! Just guess yes or no ');
  myMovies= prompt('Do I like horror movies?');
  break;}
let myRelations= prompt('Do I like make a big network relations?');
switch (myRelations.toLowerCase()){
case 'yes':
//console.log('Yes!!! such I am so intrested to know about you my new friend');
  score++;
  alert('Yes!!! such I am so intrested to know about you my new friend');
  break;
case 'y':
//console.log('Yes!!! such I am so intrested to know about you my new friend');
  alert('Yes!!! such I am so intrested to know about you my new friend');
  score++;
  break;
case 'no':
//console.log('I hate being lonely ');
  alert('I hate being lonely  ');
  break;
case 'n':
//console.log('I hate being lonely ');
  alert('I hate being lonely  ');
  break;
default:
  alert('Why! try it! Just guess yes or no ');
  myRelations= prompt('Do I like make a big network relations?');
  break; }
let myStatus= prompt('Am I single?');
switch (myStatus.toLowerCase()){
case 'yes':
//console.log('lol! It is fine It does not matter ');
  alert('lol! It is fine It does not matter ');
  score++;
  break;
case 'y':
//console.log('lol! It is fine It does not matter ');
  alert('lol! It is fine It does not matter ');
  score++;
  break;
case 'no':
//console.log('Oh! Where did you hear this? It is a Rumours ');
  alert('Oh! Where did you hear this? It is a Rumours');
  break;
case 'n':
//console.log('Oh! Where did you hear this? It is a Rumours ');
  alert('Oh! Where did you hear this? It is a Rumours');
  break;
default:
  alert('Why! try it! Just guess yes or no ');
  myStatus= prompt('Am I single?');
  break; }

alert( userName+' Why dont we go to the next level?');

let myMonth=11;
for(let i=0; i<4;i++){
  let guess= Number(prompt('Quess my Month BD'));
  if(guess===myMonth){
    alert('That is correct!');
    score++;
    //console.log('correct answer');
    break;
  }
  else if (guess<=6 ||guess<=10 ){
    alert('It is too low,try another number');
  //console.log('incorrect answer')
  }
  else if (guess>=12) {
    alert('It is high number');
    //console.log('incorrect answer');
  }
  else{
    alert('Choice a number between 1-12!');}
  if(i===3){
    alert('Sorry, you finished your attempts.. The correct answer is 11');
    //console.log('incorrect answer');
  }
}


let userGuess= prompt('Can you guess my lovely city in the world?');
let favCity=['london','sydney','paris','tokyo'];
for(let i=0; i<favCity.length;i++){
  if(favCity[i].toLowerCase()===userGuess){
    alert('That is correct!');
    //console.log('correct answer');
    score++;
    break;
  }
  else{
    alert('Try again');
    userGuess= prompt('Can you guess my lovely city in the world?');
    //console.log('incorrect answer');

  }
  if(i===4){
    alert('Sorry, you finished your attempts.. The correct answer is 11');
  }
}

alert('Your score is: '+score+' out of 7');

alert( userName+' ! Thank you for your time');


