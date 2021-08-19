export default function HeaderHandle(){
    const header = document.querySelector(".header");

    document.addEventListener("scroll", () =>{
        if(document.documentElement.scrollTop > 1){
            header.classList.add("header--scrolling");
        }
        else{
            header.classList.remove("header--scrolling");
        }
    });
}