// JavaScript source code
//Eloquent Javascript
//04 Data Structures: Objects and Arrays ==================================
let doh = "Doh";
console.log("=== toUpperCase ===================", typeof doh.toUpperCase);
// → function
console.log(doh.toUpperCase());
// → DOH
console.log(doh.length, doh["length"], doh[0])
// → 3 3 D

var sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log("=== push ======== pop ===========", sequence);
// → [1, 2, 3, 4, 5]
console.log(sequence.pop());
// → 5
console.log(sequence);
// → [1, 2, 3, 4]


let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"],
    "touched tree": true
};
console.log("=== Object properties ========", day1.squirrel);
// → false
console.log(day1.wolf);
// → undefined
day1.wolf = false;
day1.elephant = "somwhere"
//day1.["touched tree"]= true;


var anObject = { left: 1, right: 2 };
console.log("=== Delete properties === in === Object.keys === Object.assign ======", anObject.left);
// → 1
delete anObject.left;
console.log(anObject.left);
// → undefined
console.log("left" in anObject);
// → false
console.log("right" in anObject);
// → true
console.log(Object.keys(anObject));
// → ["x", "y", "z"]
Object.assign(anObject, { right: 6, b: 3, c: 4 });
console.log(anObject);

console.log("=== Mutuability =========")
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };
console.log(object1 == object2, object1 == object3);
// → true, false
object1.value = 15;
console.log(object2.value);
// → 15

console.log("=== push object =========")
var journal = [];
function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
}
addEntry("a", "b");
console.log(journal)
// → [{events: "a", squirell: "b"}]