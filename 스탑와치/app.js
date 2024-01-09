// ms, 초, 분, 시간
let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
// 시간표시화면
let timerDisplay = document.querySelector(".timerDisplay");
let timer = null; // 타이머 실행변수

document.getElementById("startTimer").addEventListener("click", () => {
  // 시작버튼 클릭시 타이머 시작!
  if (timer !== null) {
    clearInterval(timer); //이미 타이머가 실행중이라면 종료하기!
  }
  timer = setInterval(displayTimer, 10);
});

document.getElementById("pauseTimer").addEventListener("click", () => {
  // 멈춤 버튼 클릭시 타이머 종료!
  clearInterval(timer);
});

document.getElementById("resetTimer").addEventListener("click", () => {
  // 리셋버튼 클릭시 타이며 종료후 초기값으로 설정!
  clearInterval(timer);
  [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0];
  timerDisplay.innerHTML = "00 : 00 : 00 : 000 ";
});

function displayTimer() {
  // 10ms에 한번씩 실행하여 10ms씩 더함
  milliseconds += 10;
  if (milliseconds == 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms =
    milliseconds < 10
      ? "00" + milliseconds
      : milliseconds < 100
      ? "0" + milliseconds
      : milliseconds;

  timerDisplay.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}
