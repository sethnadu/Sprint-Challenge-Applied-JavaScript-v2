// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let tabsArray = [0, 1, 2, 3, 4]

tabsArray.forEach(tab => {
axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(data => {
 const tabEach  = data.data.topics[tab];
 
 const info = tabBar(tabEach);

 topics.appendChild(info);

}) 

.catch(error => {
    console.log("There was an error fetching data", error)
})

});


const topics = document.querySelector(".topics");



function tabBar(topic) {
    const topicDiv = document.createElement("div");

    topicDiv.classList.add("tab");

    topicDiv.textContent = topic;
    

    return topicDiv
}
