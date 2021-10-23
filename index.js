const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("description-animate")
            return;
        }
        setTimeout(()=>entry.target.classList.remove("description-animate"),3000)
        
        
    })
})
observer.observe(document.querySelector(".slice"))
observer.observe(document.querySelector(".imgs-abt img"))

var nextbtn = document.getElementById("next");
var prevbtn = document.getElementById("prev")
var cards = document.querySelectorAll(".card")
var i=0;

nextbtn.addEventListener(("click"),()=>{
    clearInterval(interv)
    if(i<cards.length){ 
        i++;  
}else{
    i=0;
    i++;
}
next(i);
interv = setInterval(helper,5000)
})
prevbtn.addEventListener(("click"),()=>{
    
    if(i!==0){
        i--;
        prev(i);
        clearInterval(interv)
        interv = setInterval(helper,5000)
    }
    
})
const helper = ()=>{
    if(i<cards.length){ 
        i++;  
}else{
    i=0;
    i++;
}
next(i);   
}
var interv =setInterval(helper,5000)




const next = (i) =>{
if(i==cards.length){
    cards[i-1].classList.remove("active");
    cards[0].classList.add("active") 
}else{
    cards[i-1].classList.remove("active");
    cards[i].classList.add("active");
}

}
const prev = (i) =>{
    cards[i+1].classList.remove("active");
    cards[i].classList.add("active")
}