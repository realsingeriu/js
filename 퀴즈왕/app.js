//alert('테스트');
const 정답 = ['A', 'A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

//제출버튼
form.addEventListener('submit', function (e) {
  e.preventDefault(); //원래 submit이벤트시 데이터전송과 리셋을 막음.
  let score = 0; //점수변수
  const 답변 = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
  console.log(답변);
  for (let i = 0; i < 답변.length; i++) {
    if (답변[i] === 정답[i]) {
      score += 25;
    }
  }
  console.log(score);
  scrollTo(0, 0); //위쪽으로 스크롤을 올림
  result.classList.remove('d-none');

  let output = 0;
  //주기적으로 실행하는 타이머를 시작
  const timer = setInterval(function () {
    result.querySelector('span').textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer); //타이머 종료
    } else {
      output++;
    }
  }, 10);
});
