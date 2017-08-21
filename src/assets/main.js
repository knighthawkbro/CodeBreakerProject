let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
  let input = document.getElementById('user-guess');
  //add functionality to guess function here
  if (attempt.value == '' || answer.value == '') {
    setHiddenFields();
  }

  if (!validateInput(input.value)) {
    return false;
  } else {
    attempt++;
  }
}

//implement new functions here
function setHiddenFields() {
  answer.value = pad(Math.floor(Math.random() * 10000), 4);
  attempt.value = 0;
}

function pad(n, width, z) {
  z = z || '0';
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function setMessage(message) {
  document.getElementById('message').innerHTML = message;
}

function validateInput(input) {
  if (input.length == 4) {
    return true;
  } else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false;
  }
}
