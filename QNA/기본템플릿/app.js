//클래스 faq-toggle 버튼들을 모두 저장
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  //모든 토글에 클릭시 상위객체 (.parentNode) 를 찾아서 active 클래스를 토글
  toggle.addEventListener("click", () => {
    //코드 작성
    toggle.parentElement.classList.toggle("active");
  });
});
