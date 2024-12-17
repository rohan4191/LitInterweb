const USER = "<span class=username>cyubey</span>";

const statuses = [
  {
    time: "9 months ago",
    body: "wishing that my dad would EVER KNOCK",
  },
  {
    time: "3 years ago",
    body: "",
  },
  {
    time: "3 years ago",
    body: "got a guestbook comment notification and got super excited but it was just a chainmail :{",
  },
  {
    time: "3 years ago",
    body: "if youre reading this strwbwnny thanks for commenting youre really nice :}",
  },
  {
    time: "3 years ago",
    body: "first comment on my guestbook??? ig that means people are actually visiting!!!! if ur reading this plssss leave a comment",
  },
  {
    time: "3 years ago",
    body: "super pumped about my new website!!!!! look at my awesome status box :}",
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

  header.innerHTML = time + " | " + USER;
  message.innerHTML = body;

  status.appendChild(header);
  status.appendChild(message);

  statusContainer.appendChild(status);
});
