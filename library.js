let total = document.getElementById("total");
let bRead = document.getElementById("totalR");
let bNread = document.getElementById("totalNR");
let content = document.getElementById("libcont");

let submit = document.getElementById("submit"); 
submit.onclick = function(){ 
    if(document.getElementById("title").value === "" || document.getElementById("author").value === "" || document.getElementById("pages").value === ""){
        alert("You Must Enter a Value For Each Input Box!") //see if u can style the input box
    }
    else{
        addBookToLibrary();
        document.getElementById("title").value = "";
        document.getElementById("author").value = "";
        document.getElementById("pages").value = "";
        document.getElementById("status").checked = false;
    }
}

function storage() {
    localStorage.setItem(`myLibrary`, JSON.stringify(myLibrary));
}

function restore() {
    if(!localStorage.myLibrary) {
        reboot();
    }
    else {
        let objects = localStorage.getItem("myLibrary") 
        objects = JSON.parse(objects);
        myLibrary = objects;
        reboot();
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
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("status").checked;


    let addBooked = new Book(title, author, pages, read)

    myLibrary.push(addBooked);
    storage();  
    reboot();
}

function reboot() {
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

    authorTag.textContent = iNum.author;
    element.appendChild(authorTag);

    pagesTag.textContent = iNum.pages;
    element.appendChild(pagesTag);

    element.appendChild(readButton);
    if(iNum.read === false) {
        readButton.textContent = "In Progress...";
        readButton.style.backgroundColor = "red";
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
        reboot();
    }); 

    removeButton.textContent = "Remove"; 
    element.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
        myLibrary.splice(myLibrary.indexOf(iNum),1);
        storage()
        reboot();
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
        storage()
        reboot();
    }
    let a = 0;
    let b = 0;
    for (let z = 0; z < myLibrary.length; z++){
        currBook = myLibrary[z]
        for (const prop in currBook){
            console.log(currBook[prop])
            if (currBook[prop] === true){
                a++
                console.log(a+ "a")
            }
            else if (currBook[prop] === false){
                b++
                console.log(b+ "b")
            }
        }
    }
    bRead.innerHTML = "Books Completed: "+ a;
    bNread.innerHTML = "Books In Progress: "+ b;
};
restore();
   