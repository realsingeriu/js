const gameboard = document.querySelector('#gameboard');
const info = document.querySelector('#info');
const startCells = ['', '', '', '', '', '', '', '', ''];

//처음 순서 정하기
let go = 'circle';
info.textContent = 'Circle 먼저 시작';

function createBoard() {
  startCells.forEach((_cell, index) => {
    const cellElement = document.createElement('div'); //div를 만듬
    cellElement.classList.add('square'); //태그에 클래스 square를 붙임
    cellElement.id = index; //id를 인덱스 번호로 붙임
    cellElement.addEventListener('click', addGo);
    gameboard.append(cellElement); //위에서 만들 태그를 게임보드안에 붙임
  });
}

createBoard(); //함수호출

function addGo(e) {
  console.log(e.target);
  const goDisplay = document.createElement('div');
  goDisplay.classList.add(go);
  e.target.append(goDisplay); //자식으로 추가됨
  go = go === 'circle' ? 'cross' : 'circle'; //go가 서클이면 크로스
  info.textContent = go + ' 턴 입니다.';
  e.target.removeEventListener('click', addGo); //한번 사용한 이벤트리스너 삭제
  checkScore(); //승리체크
}

function checkScore() {
  const allSquares = document.querySelectorAll('.square');
  //이길수 있는 3개의 연속좌표(가로,세로,대각선)
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
}
