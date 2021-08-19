export default class Modal{
    constructor(){
        this._carosuelItems = document.querySelectorAll(".carousel__item--hero");
        this._modal = document.querySelector(".modal");
        this._services = [
            {
                title: "Ekspresy do kawy",
                desc: "Zapewniamy pełną opiekę serwisową (gwarancjną i pogwarancjną) ekspresów do kawy marki Philips i Saeco. Pomożemy w przypadku awarii, a także dokonamy bieżącej konwersacji. Oferujemy również zakup akcesorii niezbędnych do konwersacji ekspresów. Oferujemy również w sprzedaży kawę.",
                list: ["Ekspresy Philips", "Ekspresy Saeco"]
            },
            {
                title: "RTV",
                desc: "Wykonujemy naprawy gwarancyjne TV takich producentów jak:",
                list: ["Philips", "Sony", "Sharp"]
            },
            {
                title: "AGD",
                desc: "W ramach gwarancji producenta i pogwarancyjnie naprawiamy urządzenia drobnego AGD:",
                list: ["Philips", "Remingotn"]
            }
        ]
    }

    addEvents(){
        for(let i = 0; i < this._carosuelItems.length; i++){
            this._carosuelItems[i].addEventListener("click", () => {this.openModal(i);});
        }

        const container = document.querySelector(".modal__container");
        container.addEventListener("click", (e) => {e.stopPropagation();});

        const closeIcon = document.querySelector(".modal__close");
        closeIcon.addEventListener("click", () => {this.closeModal();});
        this._modal.addEventListener("click", () => {this.closeModal();});
    }

    openModal(index){
        const h3 = document.getElementById("modalH3");
        const p = document.getElementById("modalP");
        const ul = document.getElementById("modalList");

        h3.textContent = this._services[index].title;
        p.textContent = this._services[index].desc;

        ul.innerHTML = "";
        for(let i = 0; i < this._services[index].list.length; i++){
            const li = document.createElement("li");
            ul.appendChild(li).textContent = this._services[index].list[i];
        }

        this._modal.classList.add("modal--active");
    }

    closeModal(){
        this._modal.classList.remove("modal--active");
    }
}