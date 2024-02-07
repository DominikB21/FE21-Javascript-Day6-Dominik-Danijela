/* --- JavaScript, Day 6 - JSON
------ BASIC, Exercise 1

Based on the following two Objects definitions:

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

print the following message within the browser:
My favorite sandwich is a Hamburger which has approximately 260 calories, along with it I enjoy eating Large French Fries which have about 570 calories. */

var sandwiches = `{
    "sandwich": "Hamburger",
    "calories": "260"
}`;
var fries =`{
    "friesSize": "Large French Fries",
    "calories": "570"
}`;

let sandwArray = JSON.parse(sandwiches);
let friesArray = JSON.parse(fries);
console.log(sandwArray.sandwich);
console.log(friesArray.calories);

let favfood = {
    message: function () {
        return `My favorite sandwich is a ${sandwArray.sandwich} which has approximately ${sandwArray.calories} calories, along with it I enjoy eating ${friesArray.friesSize} which have about ${friesArray.calories} calories.`;
    }
}

console.log(favfood.message());
document.getElementById("inner-box").innerHTML = favfood.message();