// const menu = document.querySelector(".menu");
// const menuItems = document.querySelectorAll(".menuItem");
// const hamburger= document.querySelector(".hamburger");
// const closeIcon= document.querySelector(".closeIcon");
// const menuIcon = document.querySelector(".menuIcon");


// function toggleMenu() {
//   if (menu.classList.contains("showMenu")) {
//     menu.classList.remove("showMenu");
//     closeIcon.style.display = "none";
//     menuIcon.style.display = "block";
//   } else {
//     menu.classList.add("showMenu");
//     closeIcon.style.display = "block";
//     menuIcon.style.display = "none";
//   }
// }


// hamburger.addEventListener("click", toggleMenu);


// menuItems.forEach(
//   function(menuItem) {
//     menuItem.addEventListener("click", toggleMenu);
//   }
// )






const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");


hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))






















// // https://www.youtube.com/watch?v=flItyHiDm7E&t=7s




// const holes = document.querySelectorAll('.hole');
//   const scoreBoard = document.querySelector('.score');
//   const moles = document.querySelectorAll('.mole');
//   let lastHole;
//   let timeUp = false;
//   let score = 0;


//   // Extra feature: high score board!
//   const hiscores = JSON.parse(localStorage.getItem('hiscores')) || [];
//   const scoreList = document.querySelector('.scoretable');


//   function randomTime(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
//   }


//   function randomHole(holes) {
//     const index = Math.floor(Math.random() * holes.length);
//     const hole = holes[index];
//     if (hole === lastHole) {
//       return randomHole(holes);
//     }
//     lastHole = hole;
//     return hole;
//   }


//   function peep() {
//     const time = randomTime(200, 1000);
//     const hole = randomHole(holes);
//     hole.classList.add('up');
//     setTimeout(() => {
//       hole.classList.remove('up');
//       if (!timeUp) {
//         peep();
//       } else {
//         checkScore();
//       }
//     }, time);
//   }


//   function startGame() {
//     score = 0;
//     scoreBoard.textContent = 0;
//     timeUp = false;
//     peep();
//     setTimeout(() => timeUp = true, 10000);
//   }


//   function bonk(e) {
//     if(!e.isTrusted) return; // cheater!
//     score++;
//     this.classList.remove('up');
//     scoreBoard.textContent = score;
//   }


//   function populateTable() {
//     scoreList.innerHTML = hiscores.map((row) => {
//       return `<tr><td>${row.clicker}</td><td>${row.score}</tr>`;
//     }).join('');
//   }


//   function checkScore() {
//     let worstScore = 0;
//     if (hiscores.length > 4) {
//       worstScore = hiscores[hiscores.length - 1].score;
//     }


//     if (score > worstScore) {
//       const clicker = window.prompt(`${score} – Top score! What's your name?`);
//       hiscores.push({score, clicker});
//     }


//     hiscores.sort((a, b) => a.score > b.score ? -1 : 1);


//     // Remove the worst score when table too long
//     if (hiscores.length > 5) {
//       hiscores.pop();
//     }


//     populateTable();
//     localStorage.setItem('hiscores', JSON.stringify(hiscores));
//   }


//   function clearScores() {
//     hiscores.splice(0, hiscores.length);
//     localStorage.setItem('hiscores', JSON.stringify(hiscores));
//     populateTable(hiscores, scoreList);
//   }


//   moles.forEach(mole => mole.addEventListener('click', bonk));


//   populateTable();




//DRAFT ABOVE LINES 1-94
