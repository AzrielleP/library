// Get HTML elements

// For displaying books

let read = document.querySelector(".check")
let title = document.querySelector(".title");
let author = document.querySelector(".author");
let pages = document.querySelector(".pages");
let trash = document.querySelector(".fa-trash");
let listContainer = document.querySelector(".listContainer");

// For adding books
let newButton = document.querySelector(".new");
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
showHideForm();
function addBookToLibrary(){
    
}

function showHideForm(){
    newButton.addEventListener("click", () =>{
        form.style.visibility = "visible";
    })

    cancel.addEventListener("click", () =>{
        form.style.visibility = "hidden";
    })
}