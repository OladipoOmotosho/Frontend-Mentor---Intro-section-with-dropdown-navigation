const burgerMenu = document.getElementById("hamMenu");
const modal = document.getElementById("overlay");
const closeModal = document.getElementById("closeBtn");

hamMenu.addEventListener("click", () => {
    modal.style.display ="block"
    // console.log("12345")
} )

closeBtn.addEventListener("click", closemodal);

function closemodal (){
    modal.style.display ="none"
}