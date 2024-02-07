let books = 
  `[
    {
      "img": "/Dominik/Advanced/pics/js-for-dummies.jpg",
      "title": "Javascript Guide",
      "author": "Rhino Red",
      "description": "With this book you will be creating interactive websites in not time!",
      "read": "false"
    },
    {
      "img": "/Dominik/Advanced/pics/cookbook.jpg",
      "title": "How to cook",
      "author": "The Chef",
      "description": "Always wanted to impress your friends and family with a delicious meal? With this books recipes you will be subprised how tasty and easy cooking can be.",
      "read": "false"
    },
    {
      "img": "/Dominik/Advanced/pics/tax-book.jpg",
      "title": "The easy guide to tax fraud",
      "author": "Mr. Buisiness",
      "description": "Are you sick of working half the year for the tax office? This book provides you with the best tax evasion tactics. Please dont tell the IRS about this book.",
      "read": "true"
    },
    {
      "img": "/Dominik/Advanced/pics/academic.jpeg",
      "title": "Academic Paper",
      "author": "Prof. Big Brain",
      "description": "Increase your brain size and brag about all your newfound knowlage in front of your friends. Complicated sentences for the simple people like you. No need to be smart if you can sound smart.",
      "read": "false"
    },
    {
      "img": "/Dominik/Advanced/pics/janitor.jpg",
      "title": "The life of a Janitor",
      "author": "Crazy Dave",
      "description": "Written by the infamous Crazy Dave, this book can be considered as the manifesto of clean floors. It is often regarded as one of the most important literary works of the 21st century.",
      "read": "true"
    }
  ]`

let booksObj = JSON.parse(books);

//console.table(booksObj);

for (let content of booksObj){

  if(content.read == "false"){
    isRead = "Not yet read"
    btnColor = "btn-secondary"
  } else {
    isRead = "Already read"
    btnColor = "btn-success"
  }

  // function changeBtn(){
  //   if(content.read == "false"){
  //     btnColor = "btn-success";
  //     isRead = "Already read"
  //   } else if(content.read == "true"){
  //     btnColor = "btn-secondary";
  //     isRead = "Not yet read"
  //   }
  // }

  // var myBtn = document.getElementById("myBtn");
  // myBtn.addEventListener("click", changeBtn);

   document.getElementById("content").innerHTML +=
   `<div class="card mb-3"">
       <div class="row g-0">
         <div class="col-md-4">
           <img src="${content.img}" class="img-fluid rounded-start">
         </div>
         <div class="col-md-8">
           <div class="card-body">
             <h5 class="card-title">${content.title}</h5>
             <p class="card-text">${content.author}</p>
             <p class="card-text mt-4">${content.description}</p>
           </div>
           <button id="myBtn" class="btn ${btnColor} mb-3 mt-3">${isRead}</button>
         </div>
       </div>
    </div>`
}