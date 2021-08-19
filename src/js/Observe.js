export default function Observe(domCollection){
    let collect = domCollection;
    
    const conf = {
        root: null,
        rootMargin: '0px',
        threshold: 0.25
    }

    const changeStyle = (element) =>{
        element.className += "--visible";
    }

    const call = (changes, observer) =>{
        changes.forEach((change) =>{
            const {isIntersecting, intersectionRatio} = change;

            if(isIntersecting === true || intersectionRatio > 0){
                changeStyle(change.target);
                observer.unobserve(change.target);
            }   
        });
    }

    const observer = new IntersectionObserver(call, conf);

    collect.forEach((domElem) =>{
        observer.observe(domElem);
    });
}