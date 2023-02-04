const score = document.querySelector(".score span");
const holes = document.querySelectorAll(".hole");
const playBtn = document.querySelector(".buttons .play");
const stopBtn = document.querySelector(".buttons .stop");
const cursor = document.querySelector(".cursor img");

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";

//   ADJUST CURSOR.STYLE.ANIMATION BELOW - 0.1S EASE CURRENTLY
  
  window.addEventListener("click", () => {
    cursor.style.animation = "hit 0.1s ease";
    setTimeout(() => {
      cursor.style.removeProperty("animation");
    }, 100);
  });
});


//STOP BTN NOT WORKING? ADD

playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  stopBtn.style.display = "inline-block";

  let hole;
  let points = 0;

  const 
  Game = setInterval(() => {
    let arrayNo = Math.floor(Math.random() * 9);
    hole = holes[arrayNo];

    let image = document.createElement("img");
    image.setAttribute("src", "https://i.postimg.cc/L8zy3x7g/SNAKE.png");
    image.setAttribute("class", "mole");
    hole.appendChild(image);

    
//     FIX TIMEOUT, GAME IS REPEATING? 02022023
    setTimeout(() => {
      hole.removeChild(image);
    }, 600);
  }, 700);

  //POINTS INCREASE BELOW, USER CLICKS ON TARGET/HOLE...HIT BOX IS SMALL IMAGE WITHIN
  window.addEventListener("click", (e) => {
    if (e.target === hole) score.innerText = ++points;
  });

  stopBtn.addEventListener("click", () => {
    clearInterval(startGame);
    stopBtn.style.display = "none";
    playBtn.style.display = "inline-block";
    score.innerText = 0;
  });
});