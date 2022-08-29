const openPopupButtons = document.querySelectorAll("[data-popup-target]")
const overlay = document.getElementById('overlay')
const form = document.querySelector(".form-container")

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



let myLibrary = []

function switchButton(button){
    if (button == null) return
    button.classList.add("active")
    button.classList.add("off")
}


form.addEventListener("submit", callbackFunction);

function addDiv(){
    const div = document.createElement("div")
    div.className = "item";
    const main = document.querySelector(".main")
    main.appendChild(div);
    const title = document.createElement("p")
    div.appendChild(title)
    const author = document.createElement("p")
    div.appendChild(author)
    const page = document.createElement("p")
    div.appendChild(page)
    const buttonSwitch = document.createElement("button")
    div.appendChild(buttonSwitch)
    const removeButton = document.createElement("button")
    div.appendChild(removeButton)
    removeButton.innerText = "X"


    myLibrary.forEach((key, index) => {
        title.innerText = JSON.stringify(key.title)
        author.innerText = (key.author)
        page.innerText = (key.page)
        if (key.check == "on"){
            buttonSwitch.classList.remove("off")
            buttonSwitch.classList.add("activebutton")
            buttonSwitch.innerText = "Read"
        }
        if (key.check == null){
            buttonSwitch.classList.add("off")
            buttonSwitch.innerText = "Not Read"
        }

        removeButton.addEventListener("click", ()=>{
            myLibrary.splice(index, 1);
            main.removeChild(div)
    })
        
    })
    buttonSwitch.addEventListener("click" ,()=>{
        if (buttonSwitch.innerText == "Not Read"){
            buttonSwitch.classList.remove("off")
            buttonSwitch.classList.add("activebutton")
            buttonSwitch.innerText = "Read"
        } else{
            buttonSwitch.classList.add("off")
            buttonSwitch.classList.remove("activebutton")
            buttonSwitch.innerText = "Not Read"
        }
    })

}


function callbackFunction(e){
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    myLibrary.push(formDataObj)
    form.reset(); 
    popup.classList.remove('active')
    overlay.classList.remove("active")
    console.log(myLibrary)
    addDiv()
}






