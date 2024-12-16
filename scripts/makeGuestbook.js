const USER = "<span class=username>cyubey</span>";
const BFF = "<span style='color: red'>m_alice</span>";

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
    body:
      "@" +
      USER +
      " HAHA if u say so. Hey do you mind if I steal some of your background code for my site? It's just so cool",
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
    body:
      "@" +
      USER +
      " You're the best! Heres a <a href='alice.html'>link</a> to my page if you wanna check it out : )\nI also have my msngr there if you wanna chat more : )",
  },

  { name: USER, time: "1 year ago", body: "@" + BFF + " will do :}" },

  {
    name: "berry",
    time: "1 year ago",
    body: "sick as hell website. this shit rocks",
  },

  { name: USER, time: "1 year ago", body: "hello and welcome and tysm!!!!" },

  {
    name: "Teef",
    time: "1 year ago",
    body: "Wow. I think this is one of my favorite sites on the web.",
  },

  {
    name: USER,
    time: "1 year ago",
    body: "@Teef omgggg >w< thats super nice of you!!! do you wanna be on my friends page???",
  },

  {
    name: "Teef",
    time: "1 year ago",
    body: "Oh wow. I mean, sure!",
  },

  {
    name: "miauau",
    time: "1 year ago",
    body: "I LOVE YOURE AESTHETIC SOSOSOSO MUICH SKSKSKKSKSKSK",
  },

  {
    name: USER,
    time: "1 year ago",
    body: "@miauau YESSS TYYYY im soso glad you appreciate :} anything you like specifically??? im happy to answer any questions about how i did the layout and things if you want!!!!",
  },

  {
    name: "alex",
    time: "1 year ago",
    body: "@miauau *your...",
  },
  {
    name: USER,
    time: "1 year ago",
    body: "@alex tysm for the comment!!! thanks for visiting the page!!",
  },
  {
    name: "sarahpie",
    time: "1 year ago",
    body:
      "I checked this out from the link from " +
      BFF +
      " and have fallen in LOOOOOOVE. instant sub",
  },
  {
    name: USER,
    time: "1 year ago",
    body:
      "ohh are you all here from " + BFF + "??? thats really cool thank you",
  },
  {
    type: "meta",
    body: "---------------------|216 comments hidden|---------------------",
  },
  {
    name: "meowZA",
    time: "11 months ago",
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
    name: "aaaaati",
    time: "10 months ago",
    body: "this site is pretty baller. what do i have to do to get on the friends page?",
  },

  {
    name: USER,
    time: "10 months ago",
    body:
      "@" +
      "aaaaati" +
      " hi and welcome!!!! the whole point of this website is for me to make friends so basically just tell me abt yourself so i can get to know you and then ill put you on there!!!!",
  },
  {
    name: "aaaaati",
    time: "10 months ago",
    body: "well i guess im a gemini",
  },
  {
    name: USER,
    time: "10 months ago",
    body:
      "@" +
      "aaaaati" +
      " thats awesome!!! im a leo, i really like media (check out my <a href='me.html'>about me</a> for more deets but im especially obsessed with madoka magica (no spoilers though ive only seen eps 1 and 2)) and im kind of a programmer (as you may have noticed from my awesome website). i also spend basically all day on neocities so if you want to chat more plssss link me your website so i can sub to you :}",
  },

  {
    name: BFF,
    time: "10 months ago",
    body: "So not to put you on blast in public but when am I getting on that friends page?? Haven't I earned it by now?? /j",
  },

  {
    name: USER,
    time: "10 months ago",
    body:
      "@" +
      BFF +
      " oooopsies.... i have something special cooking for you don't worry (wink)",
  },

  {
    name: BFF,
    time: "10 months ago",
    body: "NO WAY?? MY OWN NAME COLOR??",
  },

  {
    name: USER,
    time: "10 months ago",
    body: "haha yeah it was no big deal, actually pretty easy",
  },
  {
    name: BFF,
    time: "10 months ago",
    body: "Well I am honored. It's really cool. Not as cool as the animated name you've given yourself though lol!!",
  },
  {
    name: USER,
    time: "10 months ago",
    body: "thx hahaha i have to keep something special for myself so everyone notices when im commenting",
  },

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
    name: "normalOrmal",
    time: "1 month ago",
    body: "aaaaaaa luv ur page. rain animation is so cute i could drink it up. hearts so sparkly they hurt my eyes. flawless. devine. byootiful.",
  },
  {
    name: USER,
    time: "1 month ago",
    body: "@normalOrmal. it is not supposed to be cute. it's supposed to be sad and dreary. bc thats how i feel.",
  },
  {
    name: "normalOrmal",
    time: "1 month ago",
    body: "@mainusernam,ehereidk oh, oki.",
  },
  {
    name: "ellabella",
    time: "3 weeks ago",
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
  comments.forEach(({ name, time, body, type }) => {
    type = type ? type : "comment";

    const elem = document.createElement("div");
    if (type === "comment") {
      elem.classList = "comment";

      const header = document.createElement("p");
      header.classList = "commentHeader";
      const message = document.createElement("p");
      message.classList = "commentBody";

      name = name ? name : "anonymous";
      header.innerHTML = time + " | " + name + " says:";
      message.innerHTML = body;

      elem.appendChild(header);
      elem.appendChild(message);

      commentContainer.appendChild(elem);
    } else if (type === "meta") {
      elem.innerHTML = body;
      elem.classList = "meta";
      commentContainer.appendChild(elem);
    }
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
