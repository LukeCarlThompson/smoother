import Smoother from "../../dist/smoother.esm.js";

const box = document.querySelector(".box");
const boxTwo = document.querySelector(".box--two");
const boxThree = document.querySelector(".box--three");

const boxRoll = new Smoother(
  {
    propName: "x",
    damping: 25,
  },
  {
    propName: "y",
    damping: 25,
  },
  function(x, y) {
    box.style.transform = `translate3d(${x.output}px, ${y.output * 0.5}px, ${x.velocity + y.output * 5}px) 
    rotateY(${y.velocity * 0.2}deg) rotateX(${y.velocity * 1}deg) rotateZ(${y.velocity * 0.2}deg)`;
    boxTwo.style.transform = `translate3d(${x.output}px, ${y.output * 0.75}px, ${x.velocity + y.output * 5}px) 
    rotateY(${y.velocity * 0.2}deg) rotateX(${y.velocity * 0.25}deg) rotateZ(${y.velocity * 0.25}deg)`;
    boxThree.style.transform = `translate3d(${x.output}px, ${y.output * 1}px, ${x.velocity + y.output * 5}px) 
    rotateY(${y.velocity * 0.2}deg) rotateX(${y.velocity * 0.1}deg) rotateZ(${y.velocity * 0.1}deg)`;
  }
);

// On scroll animate
document.addEventListener("scroll", e => {
  boxRoll.y.input = window.scrollY * -1 + 200;
  boxRoll.x.input = window.scrollY * 2;
  boxRoll.animate();
});

// let mouseDown;

// // On click and drag follow mouse
// document.addEventListener('mousedown', (e) => {
//   mouseDown = true;
// });

// document.addEventListener('mouseup', (e) => {
//   mouseDown = false;
// });

// document.addEventListener('mousemove', (e) => {
//   if(mouseDown) {
//     boxRoll.x.input = e.clientX - 200;
//     boxRoll.y.input = e.clientY - 300;
//     boxRoll.animate();
//   }
// });

console.log("Index.js file 😎");
