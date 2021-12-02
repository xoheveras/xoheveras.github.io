setTimeout(load, 1000);

let firtsLineStart = 0;
let TowLineStart = 0;
let twoline = false;
let CountButton = 0;
let ButtonState = null

document.getElementById("Button-Trolle").hidden = true;

let button = document.getElementById("Button-Trolle-test");

window.onload = function () {
  var a = document.querySelector('#Button-Trolle-test');
  //вешаем на него события
  // a.onmouseout = function(e) {
  //   document.getElementById('first-text').style.display='none';
  // }

  a.onmouseover = function(e) {
    CountButton++;
    if(CountButton < 10)
    {
        if(ButtonState != true)
        {
          ButtonState = true;
          button.classList.remove("button-left");
          button.classList.add("button-right");
        }
        else
        {
          ButtonState = false;
          button.classList.remove("button-right");
          button.classList.add("button-left");
        }
    }
    else
    {
      button.classList.remove("button-right");
      button.classList.remove("button-left");
    }
}
}


function load() {
  if(firtsLineStart < 300)
  {
    document.getElementById("line-one").style.width = firtsLineStart+25+'%';
    firtsLineStart+= 25;
    setTimeout(load, 500);
  }
  else
  {
    if(!twoline)
    {
      twoline = true;
      console.log("1 line");
      setTimeout(load, 500);
    }
  }

  if(twoline == true)
  {
    if(TowLineStart < 115)
    {
        document.getElementById("line-two").style.width = TowLineStart+5+'%';
        TowLineStart+= 5;
        setTimeout(load, 500);
    }
    else
    {
        console.log("2 line");
        loadbg();
    }
  }
}

function loadbg()
{
  document.getElementById("line-two").hidden = true;
  document.getElementById("line-box").hidden = true;

  document.getElementById("Button-Trolle").hidden = false;
  fadeIn(document.getElementById("Button-Trolle"), 300);
  fadeIn(document.getElementById("first-text"),300);
  fadeIn(document.getElementById("sub-text"),300);
  fadeIn(document.getElementById("Button-Trolle-test"),300);

}

function fadeIn(el, speed) {
  var step = 1 / speed;
  var interval = setInterval(function() {
    if (+el.style.opacity >= 1)
      clearInterval(interval);
      
    el.style.opacity = +el.style.opacity + step;
  }, speed / 1000);
}