console.log("Hello World");

let x = 5;
const y = 10;
var z = x + y;

// x = "text"; // This is allowed because x is declared with let
// y = "text"; // This will cause an error because y is a constant

let target = document.getElementById("target");

let content;

document.getElementById("home-post").addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e);
    console.log("Form submitted");
    await window.fetch("https://localhost:7115/home", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        // body: JSON.stringify({
        //     'id': 3,
        //     'description': "This is a test post",
        //     'author': 'John Doe',
        //     'date': '2025-09-19T07:19:06.415Z'
        // })
        body: new FormData(e.target),
    })
        .then(response => response.text())
        .then(data => console.log(data));
})

window.fetch("https://localhost:7115/contact")
    .then(response => response.text())
    .then(data => target.innerHTML = data)
    .catch(error => console.error("Error fetching data:", error));

console.log("Fetch request initiated");

function useContent() {
    console.log("This is inside useContent function");
}

const useContent2 = () => {
    return 4;
}

let b = useContent2();

console.log(b);