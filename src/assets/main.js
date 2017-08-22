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

  if (getResults(input)) {
    setMessage("You Win! :)");
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

function getResults(input) {
  let results = document.getElementById('results');
  let result = '<div class="row"><span class="col-md-6">' + input + '</span><span class="col-md-6">';
  let correct = 0;
  for (i = 0; i < input.length; i++) {
    if (input[i] == answer.value[i]) {
      result += '<span class="glyphicon glyphicon-ok"></span>';
      correct++;
    } else if (answer.value.indexOf(input[i]) == -1) {
      result += '<span class="glyphicon glyphicon-remove"></span>';
    } else {
      result += '<span class="glyphicon glyphicon-transfer"></span>';
    }
  }
  results.innerHTML += result + '</span></div>'
  if (correct == 4) {
    return true;
  } else {
    return false;
  }
}
