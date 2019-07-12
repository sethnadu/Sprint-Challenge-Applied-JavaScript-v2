// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const headerContainer = document.querySelector(".header-container");

headerContainer.appendChild(header());

function header() {
const headerDiv = document.createElement('div');
const dateSpan = document.createElement('span');
const headingLambda = document.createElement('h1');
const spanTemp = document.createElement('span');

headerDiv.classList.add("header");
dateSpan.classList.add("date");
spanTemp.classList.add("temp");

headerDiv.appendChild(dateSpan);
headerDiv.appendChild(headingLambda);
headerDiv.appendChild(spanTemp);

dateSpan.textContent = "SMARCH 28, 2019";
headingLambda.textContent = "Lambda Times";
spanTemp.textContent = "98°";

return headerDiv;
}