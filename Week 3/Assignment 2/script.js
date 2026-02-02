const form = document.getElementById("my-form");
const li = document.getElementById("replace");

form.addEventListener("submit", function (e) {
    //Prevent reload
    e.preventDefault();
    //Make form red
    form.style.backgroundColor = 'red';
    //Make dark view
    document.body.classList.add('bg-dark');
    //Create h1
    const h1 = document.createElement('h1');
    h1.textContent = 'Hello';
    li.replaceWith(h1);
});
