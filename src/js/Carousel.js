export default class Carousel{
    constructor(element){
        this.carousel = element;
        this.carouselContainer = element.querySelector(".carousel__container");
        this.carouselItems = this.carouselContainer.getElementsByTagName('div');
        this.currentIndex = 0;
        this.timeout = null;
    }

    start(){
        this.advance();
    } 

    advance(){
        clearTimeout(this.timeout);
        this.timeout = setTimeout(()=>{
           if(this.currentIndex < this.carouselItems.length - 1){
                this.move(this.currentIndex + 1)
            }
            else{
                this.move(0);
            }
        }, 4000);
    }

    move(nextIndex){
        this.carouselItems[this.currentIndex].classList.remove("carousel__item--active");
        this.carouselItems[this.currentIndex].classList.add("carousel__item--disable");
        this.carouselItems[nextIndex].classList.add("carousel__item--active");
        this.carouselItems[nextIndex].classList.remove("carousel__item--disable");

        this.currentIndex = nextIndex;
        this.advance();
    }
}