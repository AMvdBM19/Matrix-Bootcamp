//Select HTML elements
// Inputs
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
// Form and submit
const myForm = document.getElementById("my-form");
const addName = document.getElementById("submit");
// List element <ul>
const userList = document.getElementById('user-list');

// Declare empty users array
let users = [];

//Event for button
document.addEventListener("submit", function (e) {
    // Prevent reload on submit
    e.preventDefault();

    //Check for NOT null values
    if (!firstName.value || !lastName.value){
        //If empty, notify
        alert("Please input values!");

    //If value = TRUE
    } else {

        // Combine them to fullName
        let fullName = firstName.value + " " + lastName.value

        // Define Add <li> element function
        function addLatestItem(arr) {
            const li = document.createElement('li');
            li.textContent = arr[arr.length - 1];
            userList.appendChild(li);
        }
        
        // Push to array
        users.push(fullName);
        // Call <li> creation function
        addLatestItem(users);
    }

    // Empty form
    myForm.reset()
    //Debug
    console.log(users)
});