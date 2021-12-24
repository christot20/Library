// const addBook = document.querySelector("#NB"); // button to open form
// addBook.addEventListener('click', formCreate);

// function formCreate(){
//     document.getElementById("dispForm").style.display="flex"; //form becomes visible
// }

// let close = document.getElementById("close");  //button to close form
// close.onclick = function() {
//     document.getElementById("dispForm").style.display="none";
// }

let total = document.getElementById("total");
let content = document.getElementById("libcont");

let submit = document.getElementById("submit"); //look at html for onsubmit return false
submit.onclick = function(){ //try to have it reset form instead of close
    if(document.getElementById("title").value === "" || document.getElementById("author").value === "" || document.getElementById("pages").value === ""){
        alert("You Must Enter a Value For Each Input Box!") //see if u can style the input box
    }
    else{
        addBookToLibrary();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("status").checked = false;
        // document.getElementById("dispForm").style.display="none";
    }
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
let a = 0;
let b = 0;
function addBookToLibrary() { //function to make new objects
    let title =  document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("status").checked;


    let addBooked = new Book(title, author, pages, read)

    myLibrary.push(addBooked);
    display();
}


let body = document.querySelector("body");
let container = document.getElementById("libCont")
function display(){ //function to display books
    console.log(myLibrary)
    j = 0
    for (var i = 0; i < myLibrary.length; i++){

        let element = document.createElement("div");
        element.setAttribute("class", "bdiv");
        if (j === myLibrary.length-1){
            element.setAttribute("id", j); //try to find a way to delete first elements instead fo last ones
        }
        container.appendChild(element);
        j += 1;
        //console.log(myLibrary[i]);
        
        //try to have this thing be added to different tags instead of the text of one div
        // make the title go in a h2, author and pages in another thing with pre written text and a button to check and uncheck the status
        //find way to get the title, author, pages, status and all in another type of tag !@#!@#!@#!@#!@#
        //get local sotrage to work for these too
        //maybe make a side with the form displayed and have the right be the divs with the books

        let txt = Object.values(myLibrary[myLibrary.length-1]); //see if this can be array and have values be attributed to this, old code is on code pen                     
        //element.innerHTML = txt;
        if (j != myLibrary.length){
            element.remove();
        }
        let titleTag = document.createElement("h2");
        element.appendChild(titleTag);
        titleTag.innerHTML = txt[0];

        let authorTag = document.createElement("p");
        element.appendChild(authorTag);
        authorTag.innerHTML = "Written By: "+txt[1];

        let pagesTag = document.createElement("p"); //have this have a +pages thing when adding text content
        element.appendChild(pagesTag);
        pagesTag.innerHTML = txt[2]+" Pages";
  
        let readButton = document.createElement("button"); //get read button working to change status of read through dom
        readButton.setAttribute("id", "RB");               //maybe make it so that itll say wither completed or not completed and change when it does (also get checkmark to always be off)
        element.appendChild(readButton);
        if (txt [3] === true){
                txt[3] = false;
                Book.read = txt[3];
                readButton.innerHTML = "Completed";
                readButton.style.background = "green";
            }
            else if (txt [3] === false){
                txt[3] = true;
                Book.read = txt[3];
                readButton.innerHTML = "Reading";
                readButton.style.background = "red";
                //have this value alter the color of the read button to green or red and the text to either not read or read
        }                   //example: someone does it with no check so the class is not complete, if the button is clicked itll be complete
        readButton.onclick = function(){ 
            if (txt [3] === true){
                txt[3] = false;
                Book.read = txt[3];
                readButton.innerHTML = "Completed";
                readButton.style.background = "green";
            }
            else if (txt [3] === false){
                txt[3] = true; 
                Book.read = txt[3];
                readButton.innerHTML = "Reading";
                readButton.style.background = "red";
                //have this value alter the color of the read button to green or red and the text to either not read or read
            }
        }

        let removeButton = document.createElement("button"); //delete the book for this thing and the associated div
        removeButton.setAttribute("id", "RemB");
        element.appendChild(removeButton);
        removeButton.onclick = function(e){
            //alert("augh")
            element.remove();
            y = parseInt(e.target.parentNode.id)
            myLibrary.splice(y,1);
            console.log(myLibrary);
            total.innerHTML = "Total Books: "+myLibrary.length; 

            // console.log(e)
            // console.log(e.target.parentNode.id)
            //try to make a way to delete book from array if not in dom

            //make the form a thing on the side in the dom and reserve the left for the books
        }
        let removeAllButton = document.getElementById("removeAll"); //delete the book for this thing and the associated div
        removeAllButton.onclick = function(e){
            console.log(e)
            let rDivs = document.querySelectorAll(".bdiv");
            console.log(rDivs)
            for (let y = rDivs.length-1; y >= 0; y--) {
                rDivs[y].remove();
            }
            myLibrary = []
            total.innerHTML = "Total Books: "+myLibrary.length;
            console.log(myLibrary)
        }
         //if read is checked and its clicked make it un read and if noit checked and clicked make it checked (false to true and true to false)
        removeButton.innerHTML = "Remove";
        total.innerHTML = "Total Books: "+myLibrary.length;
    }
}
//maybe find a way to find the color of the read button and use that to see how many are read and not read 2#$@#$@#!$!@#$
//find a way to have the read value in its respected object change with the button change
//get webstorage api working

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