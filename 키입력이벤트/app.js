// 입력할 태그 객체
const insert = document.getElementById("insert");

// 현재화면에서 키입력시 이벤트 발생
window.addEventListener("keydown", (e) => {
  console.log(e);
  insert.innerHTML = `
  <div class="key">
  ${e.key === " " ? "Space" : e.key} 
  <small>event.key</small> 
</div>

<div class="key">
  ${e.keyCode}
  <small>event.keyCode</small>
</div>

<div class="key">
  ${e.code}
  <small>event.code</small>
</div>
  `;
});
