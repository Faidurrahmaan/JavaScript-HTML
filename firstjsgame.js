let guess = prompt('Rule: Your number should be greater than the number we want to guess'); 
let myNum = Math.floor(Math.random() * 11)
if (guess > myNum ){
  alert('YOU WONπ₯³π₯³π₯³ .\n The number we guess is ' + myNum);
}
  else {alert('YOU LOSS πππ.\n The number we guess is ' + myNum);
        
}
