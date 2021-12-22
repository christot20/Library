const addBook = document.querySelector("#NB"); // button to open form
addBook.addEventListener('click', formCreate);

function formCreate(){
    document.getElementById("dispForm").style.display="flex"; //form becomes visible
}

let close = document.getElementById("close");  //button to close form
close.onclick = function() {
    document.getElementById("dispForm").style.display="none";
}

let submit = document.getElementById("submit"); //look at html for onsubmit return false
submit.onclick = function(){ //try to have it reset form instead of close
    addBookToLibrary();
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("dispForm").style.display="none";
}

let myLibrary = []; //array for adding objects
let addBooked;

class Book { //constructor
    constructor(title, author, pages, read) {
        this.title =  title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}
function addBookToLibrary() { //function to make new objects
    let title =  document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("status").checked;

    addBooked = new Book(title, author, pages, read)

    myLibrary.push(addBooked);
    console.log(addBooked);
    console.log(myLibrary);
}



// make input values equal object values
// make new object and put it in array
// display object with things in a grid list to show books



// function Book(title, author, pages, status) {
//     this.title =  title;
//     this.author = author;
//     this.pages = pages;
//     this.status = status;
//     // this.info = function() {
//     //     console.log(this.title)
//     //     console.log(this.author)
//     //     console.log(this.pages)
//     //     console.log(this.status)
//     // }
// }



// console.log(addBook.title)
// console.log(addBook.author)
// console.log(addBook.pages)
// console.log(addBook.status)


// function Books(title, author, pages, status) {
//     this.title = 
//     this.author = 
//     this.pages = 
//     this.status =   
// }

//see if u can make a form and just hide it until the button is clicked and goes away when submitted or x button (display flex and diplay none)
//have the eventlistner call new books thing instead
// function formCreate(){
//     let newForm = document.createElement("form");
//     newForm.setAttribute("id", "myForm");
//     document.body.appendChild(newForm);

//     let  title = document.createElement("input");
//     title.setAttribute("type", "text");
//     title.setAttribute("placeholder", "Title");
//     document.getElementById("myForm").appendChild(title);

//     let  author = document.createElement("input");
//     author.setAttribute("type", "text");
//     author.setAttribute("placeholder", "Author");
//     document.getElementById("myForm").appendChild(author);

//     let  pages = document.createElement("input");
//     pages.setAttribute("type", "number");
//     pages.setAttribute("placeholder", "Pages");
//     document.getElementById("myForm").appendChild(pages);

//     let  read = document.createElement("input");
//     read.setAttribute("type", "checkbox");
//     document.getElementById("myForm").appendChild(read);

//     let  submit = document.createElement("input");
//     submit.setAttribute("type", "submit");
//     document.getElementById("myForm").appendChild(submit);
//     //const newBook = new Books()
// }

// let myLibrary = [];

// function Books(title, author, pages, status) {
//     this.title =  document.getElementById("title").innerText;
//     this.author =  document.getElementById("author").innerText;
//     this.pages =  document.getElementById("pages").innerText;
//     this.status = function(){
//         if (document.getElementById("status").checked) {
//             return "checked";
//         } else {
//             return "unchecked";
//         }
//     }
//     return (title, author, pages, status); //make the submit button log this stuff
// }
// let submit = document.getElementById("submit");
// submit.onclick = function(){ //try to have it reset form instead of close
//     console.log(Books())
//     document.getElementById("dispForm").style.display="none";
//     document.getElementById("dispForm").reset
// }

// function formCreate(){
//     const newBook = new Books()
//     document.getElementById("dispForm").style.display="flex";
// }

// let close = document.getElementById("close");
// close.onclick = function() {
//     document.getElementById("dispForm").style.display="none";
// }

// const Book = document.querySelector("#NB");
// Book.addEventListener('click', formCreate);

//make input values equal object values
//make new object and put it in array
//display object with things in a grid list to show books

//const newBook = new Books()
//newBook.info()