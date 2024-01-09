//새노트 작성 +
const addBox = document.querySelector('.add-box');
//노트 입력창
const popupBox = document.querySelector('.popup-box');
//제목
const popupTitle = popupBox.querySelector('header p');
//노트 삭제 X버튼
const closeIcon = popupBox.querySelector('header i');
//제목 입력
const titleTag = popupBox.querySelector('input');
//노트내용 입력
const descTag = popupBox.querySelector('textarea');
//노트 추가 버튼
const addBtn = popupBox.querySelector('button');

//브라우저에 저장된 노트 리스트 불러오기
const notes = JSON.parse(localStorage.getItem('notes') || '[]');
let isUpdate = false; //업데이트 할경우 true , 입력할 경우 false
let updateId; //업데이트할 노트번호

addBox.addEventListener('click', () => {
  //원래 보이지 않는 팝업창을 표시(show)하고 창의 제목,버튼 넣기
  popupTitle.innerText = '새 노트 추가하기';
  addBtn.innerText = '노트 추가';
  popupBox.classList.add('show');
  if (window.innerWidth > 660) titleTag.focus(); //커서 제목에
});

closeIcon.addEventListener('click', () => {
  // X 클릭시 팝업창 다시 안보이게 종료
  titleTag.value = descTag.value = ''; //제목 내용 삭제
  popupBox.classList.remove('show');
});

function showNotes() {
  if (!notes) return; //저장된 노트가 하나도 없을시 함수종료
  document.querySelectorAll('.note').forEach((li) => li.remove());
  notes.forEach((note, id) => {
    let filterDesc = note.description.replaceAll('\n', '<br/>');
    let liTag = `<li class="note">
                      <div class="details">
                          <p>${note.title}</p>
                          <span>${filterDesc}</span>
                      </div>
                      <div class="bottom-content">
                          <span>${note.date}</span>
                          <div class="settings">
                              <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
                              <ul class="menu">
                                  <li onclick="updateNote(${id}, '${note.title}', '${filterDesc}')"><i class="uil uil-pen"></i>수정</li>
                                  <li onclick="deleteNote(${id})"><i class="uil uil-trash"></i>삭제</li>
                              </ul>
                          </div>
                      </div>
                  </li>`;
    addBox.insertAdjacentHTML('afterend', liTag);
  });
}
showNotes();

function showMenu(elem) {
  elem.parentElement.classList.add('show');
  document.addEventListener('click', (e) => {
    if (e.target.tagName != 'I' || e.target != elem) {
      elem.parentElement.classList.remove('?');
    }
  });
}

function deleteNote(noteId) {
  let confirmDel = confirm('정말로 이 노트를 삭제할까요?');
  if (!confirmDel) return;
  notes.splice(noteId, 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  showNotes();
}

function updateNote(noteId, title, filterDesc) {
  let description = filterDesc.replaceAll('<br/>', '\r\n');
  updateId = noteId;
  isUpdate = true;
  addBox.click();
  titleTag.value = title;
  descTag.value = description;
  popupTitle.innerText = '노트 수정하기';
  addBtn.innerText = '수정하기';
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  let title = titleTag.value.trim(),
    description = descTag.value.trim();

  if (title || description) {
    let currentDate = new Date(),
      month = currentDate.getMonth(),
      day = currentDate.getDate(),
      year = currentDate.getFullYear();

    let noteInfo = { title, description, date: `${year}년 ${month}월 ${day}일` };

    //업데이트가 아니면 입력하고 맞으면 해당id의 값을 수정하기
    if (!isUpdate) {
      notes.push(noteInfo);
    } else {
      isUpdate = false;
      notes[updateId] = noteInfo;
    }
    localStorage.setItem('notes', JSON.stringify(notes));
    showNotes();
    closeIcon.click();
  }
});
