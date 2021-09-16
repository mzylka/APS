export default class Modal{
    constructor(){
        this._modal = document.querySelector(".modal");
    }

    addEvents(){
        const container = document.querySelector(".modal__container");
        container.addEventListener("click", (e) => {e.stopPropagation();});

        const closeIcon = document.querySelector(".modal__close");
        closeIcon.addEventListener("click", () => {this.closeModal();});
        this._modal.addEventListener("click", () => {this.closeModal();});

        setTimeout(() => {this.closeModal()}, 4000);
    }

    closeModal(){
        this._modal.classList.remove("modal--visible");
        this._modal.classList.add("modal--hidden");
        setTimeout(() => {this._modal.classList.add("modal--deactive")}, 1000)
    }
}