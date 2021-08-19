export default function Hamburger(){
    const hamburger = document.querySelector(".hamburger");
    const navigation = document.querySelector(".header__navigation");

    hamburger.addEventListener("click", () =>{
        navigation.classList.toggle("header__navigation--visible");
        hamburger.classList.toggle("hamburger--close");
        //hamburger.firstElementChild.classList.toggle("hamburger__icon--close")
    })
}