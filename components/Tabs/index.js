// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>




axios.get("https://lambda-times-backend.herokuapp.com/topics")
.then(data => {
 const javascript  = data.data.topics[0];
 const bootstrap  = data.data.topics[1];
 const technology  = data.data.topics[2];
 const jquery  = data.data.topics[3];
 const node  = data.data.topics[4];
 
 const info = tabBar(javascript, bootstrap, technology, jquery, node);

 topics.appendChild(info);

}) 

.catch(error => {
    console.log("There was an error fetching data", error)
})

const topics = document.querySelector(".topics");



function tabBar(topic) {
    const topicDiv = document.createElement("div");

    topicDiv.classList.add("tab");

    topicDiv.textContent = topic;
    

    return topicDiv
}
