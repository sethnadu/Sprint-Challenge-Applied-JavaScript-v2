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

axios.get("https://lambda-times-backend.herokuapp.com/articles")

.then(item => {
    // const javascriptHeadline = item.data.articles.javascript.headline;
    // const javascriptauthorPhote= item.data.articles.javascript.authorPhoto;
    // const javascriptauthorName = item.data.articles.javascript.authorName;
    // const bootstrapHeadline = item.data.articles.bootstrap.headline;
    // const bootstrapauthorPhote= item.data.articles.bootstrap.authorPhoto;
    // const bootstrapauthorName = item.data.articles.bootstrap.authorName;
    // const technologyHeadline = item.data.articles.technology.headline;
    // const technologyauthorPhote= item.data.articles.technology.authorPhoto;
    // const technologyauthorName = item.data.articles.technology.authorName;
    // const jqueryHeadline = item.data.articles.jquery.headline;
    // const jqueryauthorPhote= item.data.articles.jquery.authorPhoto;
    // const jqueryauthorName = item.data.articles.jquery.authorName;
    // const nodeHeadline = item.data.articles.node.headline;
    // const nodeauthorPhote= item.data.articles.node.authorPhoto;
    // const nodeauthorName = item.data.articles.node.authorName;

    const javaScriptCard = createCard(javascriptHeadline, javascriptauthorPhote, javascriptauthorName)
    const bootstrapCard = createCard(bootstrapHeadline, bootstrapauthorPhote, bootstrapauthorName)
    const technologyCard = createCard(technologyHeadline, technologyauthorPhote, technologyauthorName)
    const jqueryCard = createCard(jqueryHeadline, jqueryauthorPhote, jqueryauthorName);
    const nodeCard = createCard(nodeHeadline, nodeauthorPhote, nodeauthorName)


    cards.appendChild(javaScriptCard);
    cards.appendChild(bootstrapCard);
    cards.appendChild(technologyCard);
    cards.appendChild(jqueryCard);
    cards.appendChild(nodeCard);

})





function createCard (headlineArticle, imgSrc, authorsNameArticle) {
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

