console.log("Ajax in one video");

let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', buttonClickHandler)

function buttonClickHandler() {
    console.log("You have clicked the fetchBtn")

    //instantiate an xhr object
    const xhr = new XMLHttpRequest();

    //open the object
    xhr.open('GET', 'Harry.txt', true);

    //What to on progress
    xhr.onprogress=function(){
        console.log("On progress")
    }
// What to do when rresopne is ready
    xhr.onload=function(){
        console.log(this.responseText)
    }
// send the request
    xhr.send();
}