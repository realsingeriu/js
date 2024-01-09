//alert('테스트');
let show = true;
const container = document.querySelector('.container');
const menu = document.getElementById('menu');
const add = document.getElementById('add');
const items = document.querySelectorAll('.item');
const numbers = ['one', 'two', 'three', 'four', 'five', 'six'];

container.addEventListener('click', function () {
  if (show) {
    add.style.transform = 'rotate(45deg)';
    menu.style.transform = 'scale(1)';

    for (let i = 0; i < items.length; i++) {
      items[i].classList.add(numbers[i]);
    }
    // items[0].classList.add('one');
  } else {
    add.style.transform = 'rotate(0deg)';
    menu.style.transform = 'scale(0.9)';

    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove(numbers[i]);
    }
  }
  show = !show; //show를 반대로 true,false,true,false....
});
