const msg = document.getElementById("msg");

msg.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);

  const response = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const data = await response.json();
  console.log(data);
});

fetchmessages();
async function fetchmessages() {
  // talk to the server and ask for the array of messages
  const result = await fetch(`http://localhost:8080/messages`);
  // how to read the incoming data
  const messages = await result.json();
  generatemessages(messages);
}

function generatemessages(array) {
  for (let i = 0; i < array.length; i++) {
    const div = document.createElement("div");
    div.classList.add("message");
    const uname = document.createElement("h3");
    uname.classList.add("user");
    uname.setAttribute(array[i].username);
    const dmsg = document.createElement("p");
    dmsg.classList.add("msgtxt");
    dmsg.setAttribute(array[i].message);
    const like = document.createElement("button");
    like.id = "like" + array[i].id;
    document.createElement("button");
    container.appendChild(div);
  }
}
