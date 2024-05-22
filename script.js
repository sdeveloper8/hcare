const imageSlider = document.querySelector(".background-images");
const leftButton = document.querySelector(".left-arrow");
const rightButton = document.querySelector(".right-arrow");
const burger = document.querySelector(".nav-burger");
const menu = document.querySelector(".menu");
const cancelBurger = document.querySelector(".cancel-burger");

const dropMenu = document.querySelector(".drop-menu");
const dropdownContent = document.querySelector(".dropdown-content");
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
        imageSlider.classList.add('img-transition');  
      }, 2000);
    }
  // Call the function when the page is loaded
window.onload = slide;

dropMenu.addEventListener("mouseenter",(()=>{
    dropdownContent.style.display = "flex";
    }))
dropMenu.addEventListener("mouseleave",(()=>{
    dropdownContent.style.display = "none";
}))

burger.addEventListener("click", (()=>{
  menu.style.display = "grid";
  menu.style.gridTemplateColumns = "auto";
  menu.style.width = "100vw";
  menu.style.height = "auto";
  menu.style.backgroundColor = " rgba(0, 0, 0, 0.6)";
  menu.style.justifyContent = "center";
  menu.style.alignItems = "center";
  
   burger.style.display = "none";
   cancelBurger.style.display = "flex";
   cancelBurger.style.width = "2rem";
   cancelBurger.style.height = "2rem";
}))
cancelBurger.addEventListener("click",(()=>{
  cancelBurger.style.display = "none";
  burger.style.display = "flex";
  menu.style.display = "none";
}))
// .menu{
//   display: flex;
//   justify-content: flex-end;
//   align-items: center;
//   position: relative;
// }