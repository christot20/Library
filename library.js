let total = document.getElementById("total");
let bRead = document.getElementById("totalR");
let bNread = document.getElementById("totalNR");
let tPages = document.getElementById("totalPages");
let content = document.getElementById("libcont");

let submit = document.getElementById("submit"); 
submit.onclick = function(){ 
    if(document.getElementById("title").value === "" || document.getElementById("author").value === "" || document.getElementById("pages").value === ""){
        //alert("You Must Enter a Value For Each Input Box!") //see if u can style the input box
        modal.style.display = "block";
    }
    else{
        addBookToLibrary();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("status").checked = false;
    }
}

//stores myLibrary array
function storage() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));  
}

//reloads from save found in storage
function restore() {
    if(!localStorage.myLibrary) {
        refresh();
    }
    else {
        let objects = localStorage.getItem("myLibrary") 
        objects = JSON.parse(objects);
        myLibrary = objects;
        refresh();
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

function addBookToLibrary() { //function to make new objects
    let title =  document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = parseInt(document.getElementById("pages").value);
    let read = document.getElementById("status").checked;


    let addBooked = new Book(title, author, pages, read)

    myLibrary.push(addBooked);
    storage();  
    refresh();
}

function refresh() {
    let rDivs = document.querySelectorAll(".bdiv");
    for (let y = rDivs.length-1; y >= 0; y--) {
        rDivs[y].remove();
    }
   
    for (let i=0; i<myLibrary.length; i++){
        display(myLibrary[i]);
    }
    total.innerHTML = "Total Books: "+myLibrary.length; 
}

let container = document.getElementById("libCont")
function display(iNum){ //function to display books
    console.log(myLibrary)
    let element = document.createElement("div");
    let titleTag = document.createElement("h2");
    let authorTag = document.createElement("p");
    let pagesTag = document.createElement("p");
    let readButton = document.createElement("button");
    let removeButton = document.createElement("button");

    element.classList.add("bdiv");
    element.setAttribute("id", myLibrary.indexOf(iNum)); //sets an ID to index of object in array

    titleTag.textContent = iNum.title;
    element.appendChild(titleTag);

    authorTag.textContent = "Written By: " + iNum.author;
    element.appendChild(authorTag);

    pagesTag.textContent = "Pages: " + iNum.pages;
    element.appendChild(pagesTag);

    readButton.setAttribute("id", "readButton"); 
    element.appendChild(readButton);
    if(iNum.read === false) {
        readButton.textContent = "In Progress...";
        readButton.style.backgroundColor = "Yellow";
    }
    else {
        //try to see if u can iterate through the array with the books and get the amount of values that are true and false for status (maybe do a for loop and a for in loop inside it)
        //let style = getComputedStyle("button");
        readButton.textContent = "Completed!";
        readButton.style.backgroundColor = "green";
    }
    readButton.addEventListener("click", () => { 
        iNum.read = !iNum.read; //checks if read changes to true or false and changes display
        storage(); 
        refresh();
    }); 

    removeButton.textContent = "Delete";
    removeButton.setAttribute("id", "remButton"); 
    element.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(iNum),1);
        storage()
        refresh();
    });

    container.appendChild(element);

    let removeAllButton = document.getElementById("removeAll"); 
    removeAllButton.onclick = function(){
        let rDivs = document.querySelectorAll(".bdiv");
        for (let y = rDivs.length-1; y >= 0; y--) {
            rDivs[y].remove();
        }
        myLibrary = [] //see if u can track how many things are read and what isnt read (see if u can add how many things on the read button are green and red and use that)
        total.innerHTML = "Total Books: "+ myLibrary.length;
        bRead.innerHTML = "Books Completed: "+ 0;
        bNread.innerHTML = "Books In Progress: "+ 0;
        tPages.innerHTML = "Total Pages: "+ 0;
        storage();
        refresh();
    }
    let a = 0;
    let b = 0;
    let g = 0;
    for (let z = 0; z < myLibrary.length; z++){
        currBook = myLibrary[z]
        for (const prop in currBook){
            console.log(currBook[prop])
            if (currBook[prop] === true){ 
                console.log(currBook[prop])
                a++
            }
            else if (currBook[prop] === false){
                console.log(currBook[prop])
                b++
            }
            if (Number.isInteger(currBook[prop]) === true){ 
                console.log(currBook[prop])
                g += currBook[prop]
                console.log(g)
            }
        }
    }
    bRead.innerHTML = "Books Completed: "+ a;
    bNread.innerHTML = "Books In Progress: "+ b;
    tPages.innerHTML = "Total Pages: "+ g;
};
let modal = document.getElementById("myModal"); //popup modal at end of game
let span = document.getElementsByClassName("close")[0]; //x button of modal


modal.onclick = function() {  //exit modal if x button is clicked
  modal.style.display = "none";
  //window.location.reload(); //reload page
}

window.onclick = function(e) {  //exit if clicked outside of box
    if (e.target == modal) {    
      modal.style.display = "none";
      //window.location.reload();  //reload page
    }
}
restore();
   