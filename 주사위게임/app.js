// alert('테스트');
const img1 = document.querySelector('.tmg1');
const img2 = document.querySelector('.tmg2');
//랜덤숫자로 1~6까지 만들기 
const rand1 = Math.floor(Math.random() * 6) + 1;
const rand2 = Math.floor(Math.random() * 6) + 1;
console.log(rand1, rand2);


//set속성을 사용해서 src 속성에 이미지 주소를 입력 
img1.setAttribute('src', 'images/dice'+rand1+'.png');
img2.setAttribute('src', 'images/dice'+rand2+'.png');


// 플레이어 누가 승리 했는지 표시
const h1 = document.querySelector('h1');
h1.innerText = ''
if(rand1 > rand2) {
  h1.innerText = 'player1 wins'
} else if( rand2 > rand1) {
  h1.innerText = 'player2 wins'
} else {
  h1.innerText = 'drqw!'
}