import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'lost', 'destroyed', 'brokes'];
  let what = ['my homework', 'my phone', 'the car', 'million dollars'];
  let when = [
    'before the event',
    'when I was sleeping',
    'yesterday',
    'while I was taking a shower'
  ];

  const getRandom = arr => arr[Math.floor(Math.random() * arr.length)];

  const excuse =
    getRandom(who) +
    ' ' +
    getRandom(action) +
    ' ' +
    getRandom(what) +
    ' ' +
    getRandom(when) +
    '.';

  document.getElementById('excuse').innerText = excuse;
};

  

