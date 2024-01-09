// 태그들의 부모태그
const tagsEl = document.getElementById("tags");
// 글자 입력창
const textarea = document.getElementById("textarea");

textarea.focus(); //입력가능하게 커서를 여기로 이동
// 입력창에 콤마포함 문자열을 적으면 태그로 입력되고 엔터키를 입력시
textarea.addEventListener("keyup", (e) => {
  createTags(e.target.value);
  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = ""; // 입력창 클리어
    }, 10);
    randomSelect();
  }
});
function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = 랜덤태그();
    if (randomTag !== undefined) {
      하이라이트(randomTag);
      setTimeout(() => {
        하이라이트제거(randomTag);
      }, 100);
    }
  }, 100);
  setTimeout(() => {
    clearInterval(interval); // 반복되는 인터벌 중지
  }, times * 30);
}

function 랜덤태그() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

// 입력된 문자열
function createTags(input) {
  // 문자열 .split ('나눌문자') => 배열로 리턴됨
  const tags = input
    .split(",")
    .filter((tag) => tag.trim() !== "") // 공백의 입력을 막음
    .map((tag) => tag.trim()); //tag의 공백을 업앤후 대체
  console.log(tags); //콤마로 분리된 배열확인

  tagsEl.innerHTML = "";

  // 각각의 태그로 만들기
  tags.forEach((tag) => {
    const tagEl = document.createElement("span"); // span태그 생성
    tagEl.classList.add("tag"); // 클래스 tag 넣기
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl); // 부모태그에
  });
}

//키입력시 입력된 문자열들로 태그를 만들고 랜덤 선택함
// textarea.addEventListener("keyup", (e) => {
//   createTags(e.target.value);

//   if (e.key === "Enter") {
//     setTimeout(() => {
//       e.target.value = ""; // 입력창 클리어
//     }, 10);

//     randomSelect(); //랜덤 선택
//   }
// });

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = 랜덤태그();

    if (randomTag !== undefined) {
      하이라이트(randomTag);

      setTimeout(() => {
        하이라이트제거(randomTag);
      }, 100);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = 랜덤태그();

      하이라이트(randomTag);
    }, 100);
  }, times * 100);
}

function 랜덤태그() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}

function 하이라이트(tag) {
  tag.classList.add("highlight");
}

function 하이라이트제거(tag) {
  tag.classList.remove("highlight");
}
