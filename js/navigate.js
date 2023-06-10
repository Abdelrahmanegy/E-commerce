// const productContainer = document.querySelector(".pro-container");

//   productContainer.addEventListener('click', function(event) {
//     if (event.target.classList.contains('pro')) {
//       window.location.href = "product.html";
//     }});
    

// const products = document.querySelectorAll(".pro");



// products.forEach(product =>{
//     product.addEventListener('click',()=>{

//         const image =product.dataset.image

        
//         window.location.href = `product.html?image=${image}`;


        
       

//     })
// })


// Selecting element

const products = document.querySelectorAll(".pro");


//Handle the click event 

function handleClick(event){

    const product = event.currentTarget;
    const image = product.dataset.image;
    const url = `product.html?image=${image}`;

    window.location.href = url;
}


//Add the event to each product 

products.forEach((product) => {
    product.addEventListener('click', handleClick);
  });