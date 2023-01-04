
/*
    Here, I'm grabbing the user value - in this case - the zipcode to pass it to the fuction after using the getElementById
    then, invoking the event listener to get the click

*/
var input = document.getElementById("Zipcode");
document.getElementById("submit").addEventListener("click", prompting); 
//var zipcode = prompt("Enter the zip you are trying to check");

/* This function is doing few things
 A) checking if the value typed is valued 
 
 B)if valued, grabbing the value that the user typed and then going to the API we found after the page loads and then seeing if we can
        send the request

 C) trigger the load feature and call the request function below that does the retrieval process
 
*/ 
function prompting() {
        if((input.value.length <5 ) || ( input.value.length >5)  ){
            alert("Zipcode must be 5 digits");
        }
        else {
            let myRequest = new XMLHttpRequest();
            myRequest.addEventListener("load", theRequest)
            myRequest.open("GET", "https://api.zippopotam.us/us/"+input.value);
            
            
            myRequest.send();
            
        }

}
/*
 This function going and retieves the values from the API and parses it using JSON once done, we get the element input by calling
 getElementById and then using the inner html to exactly access the state in which the zipcode correspondes to 
 */
    function theRequest(){
        console.log(this.response);
        let rObject = JSON.parse(this.response);
        var state = document.getElementById("input");
        state.innerHTML =  rObject.places[0].state;
        console.log("The state you live in is: "+ rObject.places[0].state);
       // html += "Here is the state based on the zipcode you provided "+ rObject.places[0].state + "</p>\n";

    }
 
    
    /*  */