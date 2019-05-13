// Write your solution here!
const testArray = ["Milo", "Otis", "Garfield"];
// const append, prepend, removeLast, removeFirst;

const append = ["Milo", "Otis", "Garfield"];
const prepend = ["Milo", "Otis", "Garfield"];
const removeLast = ["Milo", "Otis", "Garfield"];
const removeFirst = ["Milo", "Otis", "Garfield"];

append.splice(append.length, 0, "Odie");
prepend.splice(0, 0, "Odie");
removeLast.splice(-1);
removeFirst.splice(0, 1);
