// 메세지, 시크릿숫자, 점수, 숫자 입력, 버튼
const messageE1 = document.querySelector(".message");
const numberE1 = document.querySelector(".number");
const scoreE1 = document.querySelector(".score");
const guessE1 = document.querySelector(".guess");
const btn = document.querySelector("button.check");
const againBtn = document.querySelector("button.again");
const body = document.querySelector("body");
const highEL = document.querySelector(".highscore");

let secretNumber = Math.floor(Math.random() * 20) + 1; // 1~20까지 랜덤 숫자
numberE1.textContent = "?";
let score = 20;
let highscore = 0;

// 초기화 버튼
againBtn.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  messageE1.textContent = "start guessing...";
  scoreE1.textContent = score;
  numberE1.textContent = "?";
  guessE1.value = ""; // 입력창 비우기
  body.style.backgroundColor = "#222";
  numberE1.style.width = "15rem";
});

// 체크버튼 이벤트
btn.addEventListener("click", function () {
  let guess = guessE1.value;
  console.log(guess, typeof guess);

  // 입력값이 없을 경우
  if (!guess) {
    messageE1.textContent = "⛔️No number!";
  } else if (guess === secretNumber) {
    // 맞췄을 경우
    messageE1.textContent = "🎉 Correct Number!";
    body.style.backgroundColor = "#60b347";
    numberE1.style.width = "30rem";
    numberE1.textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highEL = score;
    }
  } else {
    // 틀렸을 경우
    score--;
    scoreE1.textContent = score;
    if (score < 1) {
      score = 0;
      messageE1.textContent = "💥 You lost the game!";
    } else if (guess > secretNumber) {
      messageE1.textContent = "📈 Too high!";
    } else if (guess < secretNumber) {
      messageE1.textContent = "📉 Too low!";
    }
    scoreE1.textContent = score;
  }
});
