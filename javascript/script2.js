const button = document.querySelector("#myButton");

console.log("button", button);

button.addEventListener("click", () => alert("Welcome to CampusHub"));

const texts = document.querySelectorAll(".text");
console.log("selector all", texts)

const title = document.querySelector("#heading");

title.textContent = "Welcome to campusHub";

title.innerHTML = "<span>This is a span</span>"

console.log("title", title)

const container = document.querySelector("#events");

const newElement = document.createElement("p");

newElement.textContent = "Web Development Workshop";

container.appendChild(newElement);

const card = document.querySelector(".event-card");

const addBtn = document.querySelector("#add-css");

addBtn.addEventListener("click", () => {
    card.classList.add("highlight")
})

const removeBtn = document.querySelector("#remove-css");

removeBtn.addEventListener("click", () => {
    card.classList.remove("highlight")
})

const toggleBtn = document.querySelector("#toggle-css");

toggleBtn.addEventListener("click", () => {
    card.classList.toggle("highlight")
})

const form = document.querySelector("#contactForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message-text").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields");
        return;
    } else {
        alert("Form submitted");

        localStorage.setItem("username", "studenti");

    }

    form.clear();

})

const value = localStorage.getItem("username");
console.log("value", value)

localStorage.removeItem("username")

localStorage.clear();

const localevents = [
    "Workshop",
    "Career Day",
    "Hackathon"
]

localStorage.setItem("events", JSON.stringify(localevents))

const savedEvents = JSON.parse(localStorage.getItem("events"))
console.log("saved", savedEvents)

const obj = {
    name: "Workshop",
    location: "Room 100"
}

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((response) => response.json())
// .then((data) => console.log("data", data))
// .catch((error) => console.log("Error", error))

const postsContainer = document.querySelector("#posts")

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())
.then((data) => {
    console.log("data", data)
    data.slice(0, 5).forEach((post) => {
        console.log("post", post);
        const title = document.createElement("h3");
        title.textContent = post.title;
        postsContainer.appendChild(title);
    })
})
.catch((error) => console.log("Error", error))
