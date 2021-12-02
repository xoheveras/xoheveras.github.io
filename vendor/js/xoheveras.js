fadeIn(document.getElementById("projects"), 500);
fadeIn(document.getElementById("about"),600);
fadeIn(document.getElementById("skills"),700);
fadeIn(document.getElementById("contact"),800);


function fadeIn(el, speed) {
  var step = 1 / speed;
  var interval = setInterval(function() {
    if (+el.style.opacity >= 1)
      clearInterval(interval);
      
    el.style.opacity = +el.style.opacity + step;
  }, speed / 1000);
}