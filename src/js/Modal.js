export default class Modal{
    constructor(){
        this._modal = document.querySelector(".modal");
    }

    addEvents(){
        const closeIcon = document.querySelector(".modal__close");
        closeIcon.addEventListener("click", () => {this.closeModal();});
        this._modal.addEventListener("click", () => {this.closeModal();});

        setTimeout(() => {this.closeModal()}, 3400);
    }

    closeModal(){
        this._modal.classList.remove("modal--visible");
        this._modal.classList.add("modal--hidden");
        setTimeout(() => {this._modal.classList.add("modal--deactive")}, 1000)
    }
}