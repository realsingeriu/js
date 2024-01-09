// alert("테스트");
const screenDisplay = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");

let calculation = [];
let acc;

buttons.forEach((button) => {
  button.addEventListener("click", () => calculate(button));
});

function calculate(button) {
  // console.log(button);
  const value = button.textContent;
  if (value === "CLEAR") {
    //클리어문자열
    calculation = []; // 초기화
    screenDisplay.textContent = ".";
  } else if (value === "=") {
    // 계산한다
    screenDisplay.textContent = eval(acc);
  } else {
    // 숫자와 연산자를 넣는다
    calculation.push(value); // 한자한자 배열에 넣음
    acc = calculation.join(""); // 문자열로 만듬
    screenDisplay.textContent = acc;
  }
  console.log(acc);
}
