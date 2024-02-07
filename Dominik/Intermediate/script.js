let employees = `
  [
    {
      "uniqueID": "4658",
      "firstName": "John",
      "lastName": "Doe",
      "email": "jd@gmail.com",
      "jobTitle": "Manager",
      "salary": "4000"
    },
    {
      "uniqueID": "1679",
      "firstName": "James",
      "lastName": "Foe",
      "email": "jf@gmail.com",
      "jobTitle": "Sales employee",
      "salary": "2000"
    },
    {
      "uniqueID": "1673",
      "firstName": "Sarah",
      "lastName": "Valara",
      "email": "sv@gmail.com",
      "jobTitle": "Intern",
      "salary": "1000"
    },
    {
      "uniqueID": "1677",
      "firstName": "Bobby",
      "lastName": "Brown",
      "email": "bb@gmail.com",
      "jobTitle": "Truck driver",
      "salary": "2500"
    },
    {
      "uniqueID": "9731",
      "firstName": "Maxim",
      "lastName": "Markov",
      "email": "mm@gmail.com",
      "jobTitle": "Sales employee",
      "salary": "2000"
    },
    {
      "uniqueID": "4672",
      "firstName": "Crazy Dave",
      "lastName": "Power",
      "email": "cdp@gmail.com",
      "jobTitle": "Janitor",
      "salary": "1800"
    },
    {
      "uniqueID": "1097",
      "firstName": "Super",
      "lastName": "Duper",
      "email": "sp@gmail.com",
      "jobTitle": "Sales employee",
      "salary": "2000"
    },
    {
      "uniqueID": "1346",
      "firstName": "John",
      "lastName": "Gone",
      "email": "jg@gmail.com",
      "jobTitle": "Sales employee",
      "salary": "2000"
    },
    {
      "uniqueID": "2090",
      "firstName": "Viv",
      "lastName": "Krivs",
      "email": "vk@gmail.com",
      "jobTitle": "Sales employee",
      "salary": "2000"
    },
    {
      "uniqueID": "6716",
      "firstName": "Mike",
      "lastName": "Check",
      "email": "mc@gmail.com",
      "jobTitle": "Cashier",
      "salary": "1900"
    }
  ]`

let employeesObj = JSON.parse(employees);

console.table(employeesObj);

for (let x of employeesObj){
  document.getElementById("result").innerHTML += 
  `<tr>
  <td>${x.uniqueID}</th>
  <td>${x.firstName}</td>
  <td>${x.lastName}</td>
  <td>${x.email}</td>
  <td>${x.jobTitle}</td>
  <td>${x.salary}</td>
</tr>`
}

