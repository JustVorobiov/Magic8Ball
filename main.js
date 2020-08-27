// create a user name
let userName = 'Oleksandr';
// make a greeting with a user name
userName ? console.log(`Hello, ${userName}!`) :
console.log('Hello, Jane!');
//create a user question
let userQuestion = 'Should i go to the store';
//print user question
console.log(`${userQuestion}, ${userName}?`);
//generate a random number
let randomNumber = Math.floor(Math.random() * 8);
//create a magic8ball
let eightBall = '';
//make a decision
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
   eightBall = 'Signs point to yes';
    break;              
}
// answer

console.log(`The eight ball answered: ${eightBall}`);
