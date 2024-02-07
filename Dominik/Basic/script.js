var sandwiches = 
`{  "sandwich": "hamburger", 
    "calories": "260" }`;
var fries = 
`{  "fries_size": "Large French Fries", 
    "calories": "570" }`;

let sandwichesObj = JSON.parse(sandwiches);
let friesObj = JSON.parse(fries);

// console.log(sandwichesObj.sandwich);
// console.log(friesObj.fries_size);
document.getElementById("result").innerHTML += `My favorite sandwich is a ${sandwichesObj.sandwich} which has approximately ${sandwichesObj.calories} calories, along with it I enjoy eating ${friesObj.fries_size} which have about ${friesObj.calories} calories.`;