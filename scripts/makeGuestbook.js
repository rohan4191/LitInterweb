const comments = [
  { name: "", time: "", body: "" },
  {
    name: "xxZANE_ROCKS_13xx",
    time: "2 years ago",
    body: "youre webapge stinks",
  },
  { name: "alice", time: "9 months ago", body: "haiiii :3" },
];
const commentContainer = document.getElementById("container");
comments.forEach(({ name, time, body }) => {
  const comment = document.createElement("div");
  comment.classList = "comment";

  const header = document.createElement("p");
  header.classList = "commentHeader";
  const message = document.createElement("p");
  message.classList = "commentBody";

  name = name ? name : "anonymous";
  header.innerHTML = time + " | " + name + " says:";
  message.innerHTML = body;

  comment.appendChild(header);
  comment.appendChild(message);

  commentContainer.appendChild(comment);
});
