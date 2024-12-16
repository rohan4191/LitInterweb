const USERNAME = "cyubey";

const statuses = [
  {
    time: "2 years ago",
    body: "wishing that my dad would EVER KNOCK",
  },
];
const statusContainer = document.getElementById("entry-list");
statuses.forEach(({ time, body }) => {
  const status = document.createElement("div");
  status.className = "entry";

  const header = document.createElement("p");
  header.classList = "entry-header";
  const message = document.createElement("p");
  message.classList = "entry-content";

  header.innerHTML = USERNAME + " | " + time;
  message.innerHTML = body;

  status.appendChild(header);
  status.appendChild(message);

  statusContainer.appendChild(status);
});
