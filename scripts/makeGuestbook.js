const USER = "cyubey";
const BFF = "m_alice";

let comments = [
  {
    name: "xxZANE_ROCKS_13xx",
    time: "3 years ago",
    body: "youre webapge stinks",
  },
  {
    name: "g3th@ck3d!",
    time: "3 years ago",
    body: "you have been visited by the NEOCITY NIBBLER. your page looks nice and scrumptious. share this on 13 other pages or else your neocity will get nibbled",
  },

  {
    name: BFF,
    time: "1 year ago",
    body: "Awesome site!! I also love MM!!",
  },
  {
    name: USER,
    time: "1 year ago",
    body: "@" + BFF + " madoka magica or mystic messenger lol",
  },
  {
    name: BFF,
    time: "1 year ago",
    body:
      "@" +
      USER +
      " Oh HAHA. I meant Mystic Messenger. I'm super in love with Seven. Ur kinda like him you know? Like a cool hacker type. Just sayin!",
  },
  {
    name: USER,
    time: "1 year ago",
    body:
      "@" +
      BFF +
      " >u< tysm!!!! im trying really hard to make my site cool so more people visit and subscribe to my profile",
  },
  {
    name: USER,
    time: "1 year ago",
    body: "@" + BFF + " (wink wink you should sub)",
  },
  {
    name: USER,
    time: "1 year ago",
    body: "@" + BFF + " I mean only if you want to!!!!",
  },
  {
    name: BFF,
    time: "1 year ago",
    body: "HAHA if u say so. Hey do you mind if I steal some of your background code for my site? It's just so cool",
  },
  {
    name: USER,
    time: "1 year ago",
    body:
      "@" +
      BFF +
      " tysm!!! only if u credit me hehe just link back to this website so people know where you got it from",
  },

  {
    name: BFF,
    time: "1 year ago",
    body: "You're the best! Heres a <a href='alice.html'>link</a> to my page if you wanna check it out : )\nI also have my msngr there if you wanna chat more :)",
  },

  { name: USER, time: "1 year ago", body: "will do :}" },

  {
    name: BFF,
    time: "8 months ago",
    body: "silly inside joke",
  },
  {
    name: USER,
    time: "8 months ago",
    body: "response showing deeper level of friendship",
  },
  {
    name: "meowZA",
    time: "5 months ago",
    body: "hello webmaster! youve earned one of my rarest meows. enjoy uwu!\n\
    ／＞　 フ\n\
  | 　_　_| \n\
／` ミ＿xノ \n\
/　　　　 |\n\
/　 ヽ　　 ﾉ\n\
│　　|　|　|\n\
／￣|　　 |　|　|\n\
(￣ヽ＿_ヽ_)__)\n\
＼二) ",
  },

  {
    name: "normalOrmal",
    time: "2 months ago",
    body: "aaaaaaa luv ur page. rain animation is so cute i could drink it up. hearts so sparkly they hurt my eyes. flawless. devine. byootiful.",
  },
  {
    name: USER,
    time: "2 months ago",
    body: "@normalOrmal. it is not supposed to be cute. it's supposed to be sad and dreary. bc thats how i feel.",
  },
  {
    name: "normalOrmal",
    time: "2 months ago",
    body: "@mainusernam,ehereidk oh, oki.",
  },
  {
    name: "ellabella",
    time: "1 month ago",
    body: "O i love your landing page!! but what happened :o your pages are so cute i wish you still posted",
  },
  {
    name: "spyGuy35",
    time: "2 weeks ago",
    body: "you're not the only one who lost a lot. just sayin.",
  },
  {
    name: "will_daniels_2008",
    time: "6 days ago",
    body: "you have been visited by the NEOCITY NIBBLER. your page looks nice and scrumptious. share this on 13 other pages or else your neocity will get nibbled",
  },
];
const commentContainer = document.getElementById("container");

function renderComments() {
  commentContainer.innerHTML = "";
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
}

function addComment() {
  const nameInput = document.getElementById("nameInput").value;
  const commentInput = document.getElementById("commentInput").value;

  if (!commentInput.trim()) {
    const block = document.getElementById("submitBlock");
    const warning = document.createElement("p");
    warning.id = "warning";
    warning.innerHTML = "type something before you submit, silly!";
    block.appendChild(warning);
    return;
  }

  const newComment = {
    name: nameInput || "anonymous",
    time: "just now",
    body: commentInput,
  };

  comments.push(newComment);
  renderComments();

  // Clear the input fields
  document.getElementById("nameInput").value = "";
  document.getElementById("commentInput").value = "";
}

document.getElementById("submitButton").addEventListener("click", addComment);

// Render the initial comments
renderComments();
