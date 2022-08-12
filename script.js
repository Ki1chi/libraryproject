const openPopupButtons = document.querySelectorAll("[data-popup-target]")
const overlay = document.getElementById('overlay')

openPopupButtons.forEach(button =>{
    button.addEventListener('click', ()=>{
        const popup = document.querySelector(button.dataset.popupTarget)
        openPopup(popup)
    })
})
function openPopup(popup){
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add("active") 
}

overlay.addEventListener("click",()=>{
    const popups = document.querySelectorAll('.popup.active')
    popups.forEach(popup => {
        closePopup(popup)
    }) 
})

function closePopup(popup){
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove("active") 
}




let myLibrary = [];

function Book(){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary(){
    myLibray.push(new Book(author,title,pages,read)) 
}