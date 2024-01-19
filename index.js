let index = 0;
let images = document.getElementsByClassName("ca-item");
let dots = document.getElementsByClassName("bi-circle-fill");
let interval = setInterval(automaticSlider,3000);



document.getElementById("next").addEventListener("click",function(event){
    showNewActiveItem(event);
})


document.getElementById("previous").addEventListener("click",function(event){
    showNewActiveItem(event);
})

document.getElementById("dot-container").addEventListener("click",function(event){
    showNewActiveItem(event);

})

function showNewActiveItem(event){
    clearInterval(interval);
    images[index].classList.remove("active");
    dots[index].classList.remove("active");
    if(event.target.classList.contains("bi-chevron-left")){
        index = (--index < 0) ? images.length-1 : index;
    }
    else if(event.target.classList.contains("bi-chevron-right")){
        index = (++index == images.length) ? 0 : index; 
    }
    else{
        for(let i = 0 ; i < dots.length ; i++){
            if(dots[i] == event.target){
                index  = i;
            }
        }
        
    }
    
    images[index].classList.add("active");
    dots[index].classList.add("active");
    interval = setInterval(automaticSlider, 3000);
}

function automaticSlider(){
        images[index].classList.remove("active");
        dots[index].classList.remove("active");
        index = (++index == images.length) ? 0 : index;  
        images[index].classList.add("active");
        dots[index].classList.add("active");
}
