const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const shut = document.getElementById('shut');

if (bar){
    bar.addEventListener('click', ()=>{
        nav.classList.add('active');
    })
}


if (shut){
    shut.addEventListener('click', ()=>{
        nav.classList.remove('active');
    })
}

// tab gallery

// const MainImg = document.getElementById("mainImage");

// const smallImgs = document.querySelectorAll('.smallImg');



// function changeImage(){
//     MainImg.src = this.src;
// }

// smallImgs.forEach(smallImg =>{
//     smallImg.addEventListener("click", changeImage);
// })


// alternative way using event delegation
// we attach a single event listener to a parent element and handle events that occur on its child elements.



 

  


    