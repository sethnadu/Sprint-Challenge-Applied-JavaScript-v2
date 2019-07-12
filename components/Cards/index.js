// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cards =  document.querySelector(".cards-container");

let cardsArray = [0, 1, 2, 3]
console.log(axios.get("https://lambda-times-backend.herokuapp.com/articles"))

cardsArray.forEach(card => {
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then(item => {

    const javascript = item.data.articles.javascript[card];
    const javascriptheadline = javascript.headline;
    const javascriptauthorPhoto = javascript.authorPhoto;
    const javascriptauthorName = javascript.authorName;
    const javascriptCard = createArticle1(javascriptheadline,javascriptauthorPhoto, javascriptauthorName)
    cards.appendChild(javascriptCard);
})

axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then (item => {
    const bootstrap = item.data.articles.bootstrap[card];
    const bootstrapheadline = bootstrap.headline;
    const bootstrapauthorPhoto = bootstrap.authorPhoto;
    const bootstrapauthorName = bootstrap.authorName;
    const bootstrapCard = createArticle1(bootstrapheadline, bootstrapauthorPhoto, bootstrapauthorName)
    cards.appendChild(bootstrapCard);
})
axios.get("https://lambda-times-backend.herokuapp.com/articles")
.then (item => {
    const technology = item.data.articles.technology[card];
    const technologyheadline = technology.headline;
    const technologyauthorPhoto = technology.authorPhoto;
    const technologyauthorName = technology.authorName;
    const technologyCard = createArticle1(technologyheadline, technologyauthorPhoto, technologyauthorName)
    cards.appendChild(technologyCard);
})
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then (item => {
    const jquery = item.data.articles.jquery[card];
    const jqueryheadline = jquery.headline;
    const jqueryauthorPhoto = jquery.authorPhoto;
    const jqueryauthorName = jquery.authorName;
    const jqueryCard = createArticle1(jqueryheadline, jqueryauthorPhoto, jqueryauthorName)
    cards.appendChild(jqueryCard);
})
axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then (item => {
    const node = item.data.articles.node[card];
    const nodeheadline = node.headline;
    const nodeauthorPhoto = node.authorPhoto;
    const nodeauthorName = node.authorName;
    const nodeCard = createArticle1(nodeheadline, nodeauthorPhoto, nodeauthorName)
    cards.appendChild(nodeCard);
})
    
.catch (error => {
    console.log("there was an error", error);
})

});


function createArticle1 (headlineArticle, imgSrc, authorsNameArticle) {
    const card = document.createElement("div")
    const headline = document.createElement("div")
    const author = document.createElement("div")
    const imgDiv = document.createElement("div")
    const img = document.createElement("img")
    const authorsName = document.createElement("span")

    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    imgDiv.classList.add("img-container");

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgDiv);
    imgDiv.appendChild(img);
    author.appendChild(authorsName);

    headline.textContent = headlineArticle;
    img.src = imgSrc;
    authorsName.textContent = authorsNameArticle;

    return card;
}



