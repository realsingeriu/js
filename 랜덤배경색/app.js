//alert('테스트');
const body = document.querySelector('body');
const btn = document.querySelector('button');

//버튼에 이벤트 달기
btn.addEventListener('click', changeColor);

function changeColor() {
  body.style.backgroundColor = `rgb( ${Math.round(Math.random() * 255)}, 
  ${Math.round(Math.random() * 255)}, 
  ${Math.round(Math.random() * 255)} )`;
}
