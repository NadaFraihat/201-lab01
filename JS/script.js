'use strict';
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
  break;
case 'n':
//console.log('WOW! How did you know my secret!');
  alert('WOW! How did you know my secret!');
  break;
default:
  alert('Why! try it! Just guess yes or no ')
  activityCase= prompt('Do I like swimming?');
  break;
}
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
  break;
case 'n':
//console.log('Unfortunately.');
  alert('Unfortunately.');
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
  break;
case 'n':
//console.log('hooorry!');
  alert('hooorry!');
  break;
default:
  alert('Why! try it! Just guess yes or no ')
  myMovies= prompt('Do I like horror movies?');
  break;}
let myRelations= prompt('Do I like make a big network relations?');
switch (myRelations.toLowerCase()){
case 'yes':
//console.log('Yes!!! such I am so intrested to know about you my new friend');
  alert('Yes!!! such I am so intrested to know about you my new friend');
  break;
case 'y':
//console.log('Yes!!! such I am so intrested to know about you my new friend');
  alert('Yes!!! such I am so intrested to know about you my new friend');
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
  alert('Why! try it! Just guess yes or no ')
  myRelations= prompt('Do I like make a big network relations?');
  break; }
let myStatus= prompt('Am I single?');
switch (myStatus.toLowerCase()){
case 'yes':
//console.log('lol! It is fine It does not matter ');
  alert('lol! It is fine It does not matter ');
  break;
case 'y':
//console.log('lol! It is fine It does not matter ');
  alert('lol! It is fine It does not matter ');
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
  alert('Why! try it! Just guess yes or no ')
  myStatus= prompt('Am I single?');
  break; }

alert( userName+' ! Thank you for your time');


