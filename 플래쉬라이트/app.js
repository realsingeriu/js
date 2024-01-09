//alert('테스트');
let lightOff = true; //불 끈상태
const light = document.getElementById('light');
const button = document.getElementById('button');

function glow() {
  if (lightOff) {
    light.style.visibility = 'visible'; //보이게함
    button.style.top = '85px';
    button.style.boxShadow = 'none';
    lightOff = false;
  } else {
    light.style.visibility = 'hidden'; //안 보이게함
    button.style.top = '80px';
    button.style.boxShadow = '0px 5px #666666';
    lightOff = true;
  }
}
