/* eslint-disable */
import "bootstrap";
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function randomizer() {
  let Who = Math.floor(Math.random() * who.length) + 0;
  let Action = Math.floor(Math.random() * action.length) + 0;
  let What = Math.floor(Math.random() * what.length) + 0;
  let When = Math.floor(Math.random() * when.length) + 0;
  let excuse =
    who[Who] + " " + action[Action] + " " + what[What] + " " + when[When];
  return excuse;
}

console.log(randomizer());
