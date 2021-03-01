// user random number from 1  to 6
var userNumber = Math.floor(Math.random() * 6) +1;
if (userNumber < 1 || userNumber > 6) {
  userNumber = prompt("The number isn't valid, please try again.. Enter a number from 1 to 6");
}
// computer random number from 1  to 6
var computerNumber = Math.floor(Math.random() * 6) +1;
var message = "the computer drew the number " + computerNumber+ ". And your number was " + userNumber + "." ;
// who's the winner
if ( userNumber == computerNumber ) {
  alert( "The result of the game is Even, " + message );
}if ( userNumber > computerNumber ) {
  alert( "You Won " + message );
}else{
  alert( "You Lost " + message );
}
