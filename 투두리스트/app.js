//alert('테스트');
const addForm = document.querySelector('form.add'); //할일 추가 폼(아래쪽)
const list = document.querySelector('.todos'); //ul 리스트
const search = document.querySelector('form.search');

addForm.addEventListener('submit', function (e) {
  e.preventDefault(); //submit이벤트 중지.
  const todo = addForm.add.value.trim(); //입력내용 공백삭제
  addTodoHtml(todo);
  addForm.add.value = ''; //입력창 클리어
});

function addTodoHtml(todo) {
  const html = `<li class="list-group-item d-flex justify-content-between align-items-center">
  <span>${todo}</span>
  <i class="far fa-trash-alt delete"></i>
</li>`;
  list.innerHTML += html;
}

//삭제하기
list.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove(); //부모요소(li)를 삭제
  }
});

search.addEventListener('keyup', function (e) {
  const term = search.search.value.trim(); //검색어
  console.log(term);
  removeFilters();
  if (term) {
    filterTodos(term);
  }
});

//검색어로 할일들을 필터링함.
function filterTodos(term) {
  //할일태그들을 배열로 만듬.
  Array.from(list.children)
    .filter((todo) => !todo.textContent.includes(term))
    .forEach((todo) => todo.classList.add('filtered'));
}

function removeFilters() {
  Array.from(list.children).forEach((todo) => todo.classList.remove('filtered'));
}
