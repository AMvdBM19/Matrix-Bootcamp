
//DOM

//Select HTML elements
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");

const myForm = document.getElementById("my-form");
const addName = document.getElementById("submit");

const userList = document.getElementById('user-list');

// Declare empty array
let users = [];

//Event for button
document.addEventListener("submit", function (e) {
    // Create empty array
    e.preventDefault();

    //Check for NOT null values
    if (!firstName.value || !lastName.value){
        //If empty, notify
        alert("Input values");
        

    //If value = TRUE
    } else {

        // Combine them to fullName
        let fullName = firstName.value + " " + lastName.value

        // loop through array
        function addLatestItem(arr) {
            const li = document.createElement('li');
            li.textContent = arr[arr.length - 1];
            userList.appendChild(li);
        }
        
        // Push to array
        users.push(fullName);
        addLatestItem(users);

        alert("Okay");
    }

    // Empty form
    myForm.reset()

    console.log(users)
});