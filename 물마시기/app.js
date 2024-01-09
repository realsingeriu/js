// 상수 정의
const smallCups = document.querySelectorAll(".cup-small");
const liters = document.getElementById("liters");
const percentage = document.getElementById("percentage");
const remained = document.getElementById("remained");

//큰컵물채우기();

//forEach( (아이템,인덱스) => {})
smallCups.forEach((cup, idx) => {
  cup.addEventListener("click", () => 작은컵들채우기(idx));
});

function 작은컵들채우기(idx) {
  //console.log(idx);
  if (idx === 7 && smallCups[idx].classList.contains("full")) idx--;
  else if (
    smallCups[idx].classList.contains("full") &&
    !smallCups[idx].nextElementSibling.classList.contains("full")
  ) {
    idx--;
  }

  // 반복문으로 인덱스번호 이하는 전부 full클래스 넣기
  smallCups.forEach((cup, idx2) => {
    if (idx2 <= idx) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  큰컵물채우기();
}

//큰컵물채우기();
function 큰컵물채우기() {
  // 현재 물이 채워져 있는 작은컵의 갯수를 셈
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCups.length; // 작은컵8개

  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0; // 물높이 0
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 330}px`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
  }
}
