export default class FormVal{
    constructor(form){
        this._form = form;
        this._name = form.elements["name"];
        this._mail = form.elements["mail"];
        this._message = form.elements["message"];
        this._button = form.elements["formButt"];
        this._checkbox = form.elements["rodo"];
    }

    isInputEmpty(element){
        if(element.value.length === 0 || element.value === ""){
            return true;
        }
        else{
            return false;
        }
    }

    checkInputs(){
        if(this.isInputEmpty(this._name) || this.isInputEmpty(this._mail) || this.isInputEmpty(this._message) || this._checkbox.checked === false){
            this._button.textContent = "Uzupełnij wszystkie dane!";
            this._button.disabled = true;
        }
        else{
            this._button.disabled = false;
            this._button.textContent = "Wyślij";
        }
    }

    listening(){
        this._form.addEventListener("keyup", () => {
            this.checkInputs();
        });

        this._checkbox.addEventListener("click", () => {
            this.checkInputs();
        });
    }
}