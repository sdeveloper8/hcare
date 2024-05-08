const imageSlider = document.querySelector(".background-images");
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");
const images = [
  "trainstation.jpg","wetleaf.jpg", "seaview.jpeg" ,
];
const imageCaptions = [
    "one","two","three"
];


currentIndex = 0;
const slide = ()=> {
     //images can change my clicking on left arrow button
    const leftArrow = (currentIndex)=>{
        currentIndex--;
        if(currentIndex < 0){
            currentIndex = images.length-1;
        }
    }
    //images can change my clicking on right arrow button
    const rightArrow = (currentIndex)=>{
        currentIndex++;
        //check if currentindex is greater than number of available images
        if(currentIndex > images.length - 1){
            //change first image
            currentIndex = 0;
        }
      }
      clearInterval(()=>{
      leftButton.addEventListener("click", leftArrow(currentIndex));
      rightButton.addEventListener("click", rightArrow(currentIndex));
      })

      setInterval(() => {
        currentIndex = (currentIndex + 1) % images.length;
        const imageUrl = `url('images/${images[currentIndex]}')`;
        imageSlider.style.backgroundImage = imageUrl;
        //imageSlider.classList.add('image-fade');
        imageSlider.classList.add('img-transition');
          
      }, 3000);
    }
 

  // Call the function when the page is loaded

window.onload = slide;

// let navbar = document.querySelector(".nav-bar");
// let sticky = navbar.offsetTop;

// const  stickyNavbar = () => {
//   if (window.scrollY >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
// window.onscroll = stickyNavbar;
