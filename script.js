var winCounter = {
  user: 0,
  pc:0,
  tie:0
  };
  var characters = 'RPS';

function play(playersInput){
  // console.log("user pick " + playersInput)

  var randomNr = Math.floor((Math.random() * 3));
  var randomResult = characters.charAt(randomNr);
  // console.log("random pick " + randomResult);

  if ( randomResult  === playersInput) {
    // console.log("even " + randomResult + " " + playersInput )
    showSelection(playersInput,randomResult);
    showResults();
    showWhoWin("Even");
    winCounter.tie++;
  }
  else if ((randomResult === "R" && playersInput === "S") ||
          (randomResult === "P" && playersInput === "R") ||
          (randomResult === "S" && playersInput === "P")) {
    winCounter.pc++;
    showSelection(playersInput,randomResult);
    showResults();
    showWhoWin("PC win");
  }
  else if ((playersInput === "R" && randomResult === "S") ||
          (playersInput === "P" && randomResult === "R") ||
          (playersInput === "S" && randomResult === "P")) {
    winCounter.user++;
    showSelection(playersInput,randomResult);
    showResults();
    showWhoWin("You win");
  }
}

function showWhoWin(passWhoWin) {
  document.getElementById("whoWin").innerHTML = passWhoWin;
}

function changeToFull(convert){
  switch (convert) {
    case "R":
      convert = "Rock";
      break;
    case "S":
      convert = "Scissors";
      break;
    case "P":
      convert = "Paper";
      break;
  }
  return convert;
}

function showSelection(userS,pcS) {
  let userConv = changeToFull(userS);
  let pcConv = changeToFull(pcS);
  document.getElementById("userSelect").innerHTML = userConv;
  document.getElementById("pcSelect").innerHTML = pcConv;
}

function showResults() {
  document.getElementById("showResultUsr").innerHTML = winCounter.user;
  document.getElementById("showResultPC").innerHTML = winCounter.pc;
  document.getElementById("showResultTie").innerHTML = winCounter.tie;
}

function reset() {
  winCounter.user = 0;
  winCounter.pc = 0;
  winCounter.tie = 0;
  showResults();
  showSelection("-","-")
  showWhoWin("Ready");
}

function startR() {
  let clicked = document.getElementById("rock").value;
  play(clicked);
}

function startP() {
  let clicked = document.getElementById("paper").value;
  play(clicked);
}

function startS() {
  let clicked = document.getElementById("scissors").value;
  play(clicked);
}

function startReset() {
  let clicked = document.getElementById("resetCounters").value;
  reset();
}