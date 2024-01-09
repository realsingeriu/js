// alert('테스트')
// 사용할 태그들을 선택하자.

const h3 = document.querySelector('h3'); // h3선택
const color1 = document.querySelector('.color1'); // 첫번째 입력
const color2 = document.querySelector('.color2'); // 첫번째 입력
const body = document.querySelector('body'); // body 선택


// 이벤트를 사용하자!
color1.addEventListener('change', colorChange);
color2.addEventListener('change', colorChange);


function colorChange(){
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  h3.innerText = body.style.background;
}

