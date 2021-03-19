'use strict';
let score=0;
let userName= prompt('Enter your name, Please!');
alert('Welcome '+ userName+' to my new web!');
function q1(){
  let activityCase= prompt('Do I like swimming?');
  switch (activityCase.toLowerCase()){
  case 'yes':
    alert('Sorry, but I hate and scared of it! I wish one day I Can face this thing');
    break;
  case 'y':
    alert('Sorry, but I hate and scared of it! I wish one day I Can face this thing');
    break;
  case 'no':
    alert('WOW! How did you know my secret!');
    score++;
    break;
  case 'n':
    alert('WOW! How did you know my secret!');
    score++;
    break;
  default:
    alert('Why! try it! Just guess yes or no ');
    activityCase= prompt('Do I like swimming?');
    break;
  }
}
//console.log(score);
function q2(){
  let travelingCase= prompt('Have I ever travelled before?');
  switch (travelingCase.toLowerCase()){
  case 'yes':
    alert('Oh! It is my big big dream! I wish I can travel all around the world');
    break;
  case 'y':
    alert('Oh! It is my big big dream! I wish I can travel all around the world');
    break;
  case 'no':
    alert('Unfortunately.');
    score++;
    break;
  case 'n':
    alert('Unfortunately.');
    score++;
    break;
  default:
    alert('Why! try it! Just guess yes or no ');
    travelingCase= prompt('Have I ever travelled before?');
    break;}
}
function q3(){
  let myMovies= prompt('Do I like horror movies?');
  switch (myMovies.toLowerCase()){
  case 'yes':
    alert('No! Not because I sraced. But I dont get any benifits from it! except sleeping with light On');
    break;
  case 'y':
    alert('No! Not because I sraced. But I dont get any benifits from it! except sleeping with light On');
    break;
  case 'no':
    alert('hooorry!');
    score++;
    break;
  case 'n':
    alert('hooorry!');
    score++;
    break;
  default:
    alert('Why! try it! Just guess yes or no ');
    myMovies= prompt('Do I like horror movies?');
    break;}
}
function q4(){
  let myRelations= prompt('Do I like make a big network relations?');
  switch (myRelations.toLowerCase()){
  case 'yes':
    score++;
    alert('Yes!!! such I am so intrested to know about you my new friend');
    break;
  case 'y':
    alert('Yes!!! such I am so intrested to know about you my new friend');
    score++;
    break;
  case 'no':
    alert('I hate being lonely  ');
    break;
  case 'n':
    alert('I hate being lonely  ');
    break;
  default:
    alert('Why! try it! Just guess yes or no ');
    myRelations= prompt('Do I like make a big network relations?');
    break; }
}
function q5(){
  let myStatus= prompt('Am I single?');
  switch (myStatus.toLowerCase()){
  case 'yes':
    alert('lol! It is fine It does not matter ');
    score++;
    break;
  case 'y':
    alert('lol! It is fine It does not matter ');
    score++;
    break;
  case 'no':
    alert('Oh! Where did you hear this? It is a Rumours');
    break;
  case 'n':
    alert('Oh! Where did you hear this? It is a Rumours');
    break;
  default:
    alert('Why! try it! Just guess yes or no ');
    myStatus= prompt('Am I single?');
    break; }
  
  alert( userName+' Why dont we go to the next level?');
}
function q6(){
  let myMonth=11;
  for(let i=0; i<4;i++){
    let guess= Number(prompt('Quess my Month BD'));
    if(guess===myMonth){
      alert('That is correct!');
      score++;
      break;}
    else if (guess<=6 ||guess<=10 ){
      alert('It is too low,try another number');
    }
    else if (guess>=12) {
      alert('It is high number');
    }
    else{
      alert('Choice a number between 1-12!');}
    if(i===3){
      alert('Sorry, you finished your attempts.. The correct answer is 11');
    }
  }
}
function q7(){
  let favCity=['london','sydney','paris','tokyo'];
  for(let i=0;i<favCity.length;i++){
    let userGuess= prompt('Can you guess my lovely city in the world?');
    let userChoice=userGuess.toLowerCase();
    if (userChoice==='london' || userChoice==='sydney' ||userChoice==='paris'||userChoice==='tokyo' ){
      alert('That is correct!');
      score++;
      break;
    }
    else{
      alert('Try again');
    }
    if (i===3){
      alert('Sorry, you finished your attempts');
    }
  }
}

q1();
q2();
q3();
q4();
q5();
q6();
q7();


alert('Your score is: '+score+' out of 7');
alert( userName+' ! Thank you for your time');
