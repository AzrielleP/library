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
        let checkStatus = null;
        (status.checked)? checkStatus = true : checkStatus = false;
        
        let newBook = new Book(newTitle.value, newAuthor.value, newPages.value, checkStatus);
 
        library.push(newBook);

        clearForm();
       
        console.log(library);
        render();
    
        
    })
    return library;
 
}

// Create a function that clears the form whenever we add a new entry
function clearForm(){
    newTitle.value = "";
    newAuthor.value = "";
    newPages.value = "";
    status.checked = false;
}

//Create a function that renders the data to the page
function render(){

    //Remove the contents of listcontainer first so that we will start with a new container when we delete an entry
    listContainer.innerHTML = "";
   for (let element of library){
      
        let container = document.createElement("div");

        //Make the classname of container equal to the string equivalent of its index in the library array
        container.className = library.indexOf(element).toString();
        container.id = "data";
        container.setAttribute("id", "data");

        // Display the items on the page
        let checkToggler = document.createElement("input");
        checkToggler.type = "checkbox";
        checkToggler.setAttribute("class", "checkToggler");
        if(element.status){
            checkToggler.checked = true
        }
        else if(!element.status){
            checkToggler.checked = false;
        }
        changeStatus(checkToggler);

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

        // Append the children
        listContainer.appendChild(container);
        container.appendChild(checkToggler);
        container.appendChild(bookTitle);
        container.appendChild(bookAuthor);
        container.appendChild(bookPages);
        container.appendChild(trashcan);
    }
}

// Create a function for the trash icon
function deleteEntry(trashcan){
        trashcan.addEventListener("click", event =>{
        
            let containerToDelete = event.currentTarget.parentNode;
            library.splice(Number(containerToDelete.className), 1);
            containerToDelete.remove();
            // Use render again so that the className of the remaining containers will correspond with its index number
            render(library);
        })
}

// Create a function which lets the user change the status of the entry
function changeStatus(checkToggler){
    checkToggler.addEventListener("click", event =>{
        let indexInLibrary = Number(event.currentTarget.parentNode.className);
        if(checkToggler.checked){
            library[indexInLibrary].status = true;
        }
        else library[indexInLibrary].status = false;
    })
}