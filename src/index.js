import "./scss/main.scss";
import FormVal from "./js/FormVal";
import observe from "./js/Observe";
import headerHandle from "./js/HeaderHandle";
import hamburgerHandle from "./js/Hamburger";
import Carousel from "./js/Carousel";
import Modal from "./js/Modal";

function loadCarousel(){
    const heroCarousel = document.getElementById("hero-carousel");
    const serviceCarousel = document.getElementById("service-carousel");
    const carousel1 = new Carousel(heroCarousel);
    const carousel2 = new Carousel(serviceCarousel);
    carousel1.start();
    carousel2.start();
}

function loadForm(){
    const form = document.getElementById("contactForm");
    const formval = new FormVal(form);
    formval.listening();
}

function loadModal(){
    const modal = new Modal();
    modal.addEvents();
}

function start(){
    loadForm();
        
    const domElements = document.querySelectorAll(".observable");
    observe(domElements);
        
    headerHandle();
    hamburgerHandle();

    loadCarousel();
    loadModal();
}

document.addEventListener("DOMContentLoaded", function(event){
    start();
});
