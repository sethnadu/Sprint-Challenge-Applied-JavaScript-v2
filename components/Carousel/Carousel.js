/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector(".carousel-container");

carouselContainer.appendChild(createCarousel());


function createCarousel() {
  const carousel = document.createElement("div");
  const leftButton = document.createElement("div");
  const img1 = document.createElement("img");
  img1.setAttribute("src", "./assets/carousel/mountains.jpeg" )
  const img2 = document.createElement("img");
  img2.setAttribute("src", "./assets/carousel/computer.jpeg" )
  const img3 = document.createElement("img");
  img3.setAttribute("src", "./assets/carousel/trees.jpeg" )
  const img4 = document.createElement("img");
  img4.setAttribute("src", "./assets/carousel/turntable.jpeg" )
  const rightButton = document.createElement("div");

  carousel.classList.add("carousel")
  leftButton.classList.add("left-button")
  rightButton.classList.add("right-button")

  carousel.appendChild(leftButton);
  carousel.appendChild(img1);
  carousel.appendChild(img2);
  carousel.appendChild(img3);
  carousel.appendChild(img4);
  carousel.appendChild(rightButton);




  currentIndex = 0;

  leftButton.addEventListener("click", () => {
    left();
  })

  rightButton.addEventListener("click", () => {
    right();
  })

  return carousel;

}
  function left() {
    
    const images = document.querySelectorAll('.carousel img');
        images.forEach((image) => {
            image.style.display = "none"});
            currentIndex -=1;
            if (currentIndex < 0) {
                currentIndex = 3;
            }
            if(currentIndex > 3) {
                currentIndex = 0;
            }
            imgCarousel[currentIndex].style.display = "block";
        

    };

  function right() {
    const images = document.querySelectorAll('.carousel img');
        images.forEach((image) => {
            image.style.display = "none"});
            currentIndex +=1;
            if(currentIndex < 0) {
                currentIndex = 3;
            }
            if(currentIndex > 3) {
                currentIndex = 0;
            }
            imgCarousel[currentIndex].style.display = "block";
  }
  

  

  

