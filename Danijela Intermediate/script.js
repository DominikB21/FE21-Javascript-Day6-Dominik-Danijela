/* --- JavaScript, Day 6 - JSON
------ INTERMEDIATE, Exercise 1

Create a JS file which contains the following details per employee (as a JSON string):

    Unique ID
    First Name
    Last Name
    Email address
    Job Title
    Salary

Fill the JSON with meaningful data for 10 Employees. Print each employee's details in a table which will look representative and easily readable for the management team. */

let employee = `[
    {
        "uniqueID" : "001",
        "firstName" : "Dannie",
        "lastName" : "Jovic",
        "email" : "danijelajovic@gmx.at",
        "jobtitle" : "Schokomonster",
        "salary" : "50k"
    },
    {
        "uniqueID" : "002",
        "firstName" : "Gustav",
        "lastName" : "Gans",
        "email" : "gg-ez@gibtesnicht.at",
        "jobtitle" : "Elektroingeneur",
        "salary" : "60k"
    },
    {
        "uniqueID" : "003",
        "firstName" : "Albert",
        "lastName" : "Einstein",
        "email" : "eistcmalm@oderso.at",
        "jobtitle" : "Besserwisser",
        "salary" : "80k"
    },
    {
        "uniqueID" : "004",
        "firstName" : "Nikola",
        "lastName" : "Tesla",
        "email" : "stromistaus@gmx.at",
        "jobtitle" : "Schlaukopf",
        "salary" : "75k"
    },
    {
        "uniqueID" : "005",
        "firstName" : "Jack",
        "lastName" : "Sparrow",
        "email" : "Arrr@blackpearl.at",
        "jobtitle" : "Captain",
        "salary" : 0
    },
    {
        "uniqueID" : "006",
        "firstName" : "Iron",
        "lastName" : "Man",
        "email" : "tony.ist@stark.at",
        "jobtitle" : "Superheld",
        "salary" : "150k"
    },
    {
        "uniqueID" : "007",
        "firstName" : "Alice",
        "lastName" : "im Wunderland",
        "email" : "alice@wunderland.at",
        "jobtitle" : "Wundermädchen",
        "salary" : "100"
    },
    {
        "uniqueID" : "008",
        "firstName" : "Kim",
        "lastName" : "Possible",
        "email" : "callme@beepme.at",
        "jobtitle" : "Agentin",
        "salary" : "85k"
    },
    {
        "uniqueID" : "009",
        "firstName" : "Simba",
        "lastName" : "Löwe",
        "email" : "iamtheking@disney.at",
        "jobtitle" : "König",
        "salary" : "Insects"
    },
    {
        "uniqueID" : "010",
        "firstName" : "Balu",
        "lastName" : "Bär",
        "email" : "nichtmogli@dschungelbuch.at",
        "jobtitle" : "Tänzer",
        "salary" : "30k"
    }
]`;

let employeeArray = JSON.parse(employee);
console.log(employeeArray);

for(let x of employeeArray) {
    document.getElementById("inner-box").innerHTML += `
            <tr>
                <th scope="row">${x.uniqueID}</th>
                <td class="fname">${x.firstName}</td>
                <td class="lname">${x.lastName}</td>
                <td>${x.email}</td>
                <td class="text-center">${x.jobtitle}</td>
                <td class="text-center">${x.salary}</td>
            </tr>
        </tbody>
        </table>
        `;
    }
