// counter 클래스가 있는 모든 객체들을 counters에 저장
const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  function updateCounter() {
    // 각각의 data-target을 가져와 숫자로(+)바꿔서 사용
    const target = +counter.getAttribute("data-target");
    //Number('1') , parseInt('1')
    console.log(target);
    const c = +counter.textContent; // 0으로 시작

    const increment = target / 5000; // 한번에 증가시킬 값

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target;
    }
  }

  updateCounter();
});
