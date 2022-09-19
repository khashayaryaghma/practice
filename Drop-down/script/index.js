const menu = document.querySelector(".menu");
const paraButton = document.querySelector(".paraButton");
const bottom = document.querySelector(".bottom");
const section = document.querySelector("section");
const item = document.querySelectorAll(".item")

let openMenu = false
menu.onclick = () => {
    menu.classList.toggle("menubutton");
    bottom.classList.toggle("openBottom");
    section.classList.toggle("brt");
    item.forEach((element)=>{
        element.classList.toggle("openItem")
    })
    openMenu = !openMenu
    if(openMenu){
        menu.innerHTML = `<i class="fa-solid fa-angle-up"></i>`
        bottom.innerHTML = `<p class="openBottom">ارتباط با من</p>`
    }else{
        menu.innerHTML = `<p class="paraButton">ارتباط با من</p>`
        bottom.innerHTML = ""
    }
    
}