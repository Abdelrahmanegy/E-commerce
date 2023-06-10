// const container = document.querySelector('.sm-img-group');
//     const MainImg = document.getElementById('mainImage');
  
//     container.addEventListener('mouseover', function(event) {
//       if (event.target.classList.contains('smallImg')) {
//         MainImg.src = event.target.src;
//       }
//     });
  

//  function ShowImg() {
//   const urlParam = new URLSearchParams(window.location.search);
//         const img = urlParam.get('image');

//         MainImg.src = img; 
//  }  

//  ShowImg();



//  Selecting element

const container = document.querySelector('.sm-img-group');
const mainImg = document.getElementById('mainImage');
const firstImag= document.querySelector('.smallImg')


//Show Image using the data sent in the url 

function showImageFromURL() {
  const urlParams = new URLSearchParams(window.location.search);
  const imgURL = urlParams.get('image');
  mainImg.src = imgURL;
  firstImag.src = imgURL;
}

showImageFromURL();


// Handle mouseover event 

function handleImageMouseOver(event) {
  if (event.target.classList.contains('smallImg')) {
    mainImg.src = event.target.src;
  }
}

//Adding event to the Container using event delegation

container.addEventListener('mouseover', handleImageMouseOver);




