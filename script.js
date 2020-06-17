// Get HTML elements
let listContainer = document.querySelector(".listContainer");
let form = document.querySelector(".modal");
let newTitle = document.querySelector("#title");
let newAuthor = document.querySelector("#author");
let newPages = document.querySelector("#pages");
let status = document.querySelector("#complete");
let add = document.querySelector(".add");
let cancel = document.querySelector(".cancel");

/* ------------------------------ */

// Create an array to store the new books
let library = [];

// Create a constructor for the books
function Book(title, author, pages, status){
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

// Create a function to add the book to the library
addBookToLibrary();

function addBookToLibrary(){

    add.addEventListener("click", () =>{
        let checkStatus = "";
        status.checked? checkStatus = "finished":checkStatus = "unfinished";
        let newBook = new Book(newTitle.value, newAuthor.value, newPages.value, checkStatus);

     
        library.push(newBook);
        render(library);
        //clearForm();
        console.log(library);
    
        
    })
 
}

function checkEmptyForm(title, author, book){
    if(!title.value == "" && !author.value == ""){
        
    }
}


function clearForm(){
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    status.checked = false;
}

//Create a function that renders the data to the page
function render(book){
   //for (let element of library){
        let element = book[book.length-1]
        let container = document.createElement("div");
        //Make the classname of container equal to the string equivalent of its index in the library array
        container.className = library.indexOf(element).toString();
        container.id = "data";
        container.setAttribute("id", "data");

        let checkbox = document.createElement("i");
        checkbox.className = "fas fa-check-circle";
        checkbox.id = "check"
        checkbox.setAttribute("id", "check");

        let checkToggler = document.createElement("input");
        checkToggler.type = "checkbox";
        checkToggler.setAttribute("class", "checkToggler");
        if(element.checkStatus = "finished"){
            checkToggler.checked = true
        }
        else{
            checkToggler.checked = false;
        }

        let bookTitle = document.createElement("p");
        bookTitle.className = "title";
        bookTitle.textContent = element.title;
        bookTitle.setAttribute("class", "title");

        let bookAuthor = document.createElement("p");
        bookAuthor.className = "author";
        bookAuthor.textContent = element.author;
        bookAuthor.setAttribute("class", "author")

        let bookPages = document.createElement("p");
        bookPages.className = "pages";
        element.pages !== "" ? bookPages.textContent = element.pages + " pages": bookPages.textContent = "-";
        bookPages.setAttribute("class", "pages")

        let trashcan = document.createElement("i");
        trashcan.className = "fas fa-trash";
        trashcan.id = "trash";
        trashcan.setAttribute("id", "trash");
        deleteEntry(trashcan);
        // append the children
        listContainer.appendChild(container);
        container.appendChild(checkToggler);
        container.appendChild(checkbox);
        container.appendChild(bookTitle);
        container.appendChild(bookAuthor);
        container.appendChild(bookPages);
        container.appendChild(trashcan);
   // }
}

function deleteEntry(trashcan){
        trashcan.addEventListener("click", event =>{
        
            let containerToDelete = event.currentTarget.parentNode;
            library.splice(Number(containerToDelete.className), 1);
            containerToDelete.remove();
            render(library);
        })
}