'use strict';

/*{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}*/

const zoom = document.querySelectorAll(".zoom");
const zoomback = document.getElementById("zoomback");
const zooming = document.getElementById("zooming");

zoom.forEach(function (value) {
    value.addEventListener("click", kakudai);
})

function kakudai(e) {
    zoomback.style.display = "flex";
    zooming.setAttribute("src", e.target.getAttribute("src"));
}

zoomback.addEventListener("click", modosu);
function modosu() {
    zoomback.style.display = "none";
}