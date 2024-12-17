const USER = "<span class=username>cyubey</span>";
const BFF = "<span style='color: red'>m_alice</span>";

let comments = [
  {
    name: "lux",
    time: "3 years ago",
    body: "first",
  },
  {
    name: USER,
    time: "3 years ago",
    body: "@lux lolll thanks for being the first comment on my guestbook. is there anything else you wanted to say? maybe i should add some questions to this page in case people dk what to comment",
  },
  {
    name: "strwbwnny",
    time: "3 years ago",
    body: "your site is super cute ^_^ can't wait to see how it grows!",
  },
  {
    name: USER,
    time: "3 years ago",
    body: "@strwbwnny thanks!!! i hope you stick around cuz im planning even more awesome stuff in the future!!!",
  },
  {
    name: "g3th@ck3d!",
    time: "3 years ago",
    body: "you have been visited by the NEOCITY NIBBLER. your page looks nice and scrumptious. share this on 13 other pages or else your neocity will get nibbled",
  },

  {
    name: BFF,
    time: "2 years ago",
    body: "Awesome site!! I also love MM!!",
  },
  {
    name: USER,
    time: "2 years ago",
    body: "@" + BFF + " madoka magica or mystic messenger lol",
  },
  {
    name: BFF,
    time: "2 years ago",
    body:
      "@" +
      USER +
      " Oh HAHA. I meant Mystic Messenger. I'm super in love with Seven. Ur kinda like him you know? A cool hacker type. Like how did you make the cursor do that?? Just sayin!",
  },
  {
    name: USER,
    time: "2 years ago",
    body:
      "@" +
      BFF +
      " >u< tysm!!!! im trying really hard to make my site cool so more people visit and subscribe to my profile",
  },
  {
    name: USER,
    time: "2 years ago",
    body: "@" + BFF + " (wink wink you should sub)",
  },
  {
    name: USER,
    time: "2 years ago",
    body: "@" + BFF + " I mean only if you want to!!!!",
  },
  {
    name: BFF,
    time: "2 years ago",
    body:
      "@" +
      USER +
      " HAHA if u say so. Hey do you mind if I steal some of your background code for my site? It's just so cool",
  },
  {
    name: USER,
    time: "2 years ago",
    body:
      "@" +
      BFF +
      " tysm!!! only if u credit me hehe just link back to this website so people know where you got it from",
  },

  {
    name: BFF,
    time: "2 years ago",
    body:
      "@" +
      USER +
      " You're the best! Heres a <a href='alice.html'>link</a> to my page if you wanna check it out : )\nI also have a chatbox there if you wanna talk more : )",
  },

  { name: USER, time: "2 years ago", body: "@" + BFF + " will do :}" },

  {
    name: "berry",
    time: "2 years ago",
    body: "sick as hell website. this shit rocks",
  },

  { name: USER, time: "2 years ago", body: "hello and welcome and tysm!!!!" },

  {
    name: "Teef",
    time: "2 years ago",
    body: "Wow. I think this is one of my favorite sites on the web.",
  },

  {
    name: USER,
    time: "2 years ago",
    body: "@Teef omgggg >w< thats super nice of you!!! do you wanna be on my friends page???",
  },

  {
    name: "Teef",
    time: "2 years ago",
    body: "Oh wow. I mean, sure!",
  },

  {
    name: "miauau",
    time: "2 years ago",
    body: "I LOVE YOURE AESTHETIC SOSOSOSO MUICH SKSKSKKSKSKSK",
  },

  {
    name: USER,
    time: "2 years ago",
    body: "@miauau YESSS TYYYY im soso glad you appreciate :} anything you like specifically??? im happy to answer any questions about how i did the layout and things if you want!!!!",
  },

  {
    name: "alex",
    time: "2 years ago",
    body: "@miauau *your...",
  },
  {
    name: USER,
    time: "2 years ago",
    body: "@alex tysm for the comment!!! thanks for visiting the page!!",
  },
  {
    name: "sarahpie",
    time: "2 years ago",
    body:
      "I checked this out from the link from " +
      BFF +
      " and have fallen in LOOOOOOVE. instant sub",
  },
  {
    name: USER,
    time: "2 years ago",
    body:
      "ohh are you all here from " + BFF + "??? thats really cool thank you",
  },
  {
    type: "meta",
    body: "---------------------|116 comments hidden|---------------------",
  },
  {
    name: "meowZA",
    time: "1 year ago",
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
    time: "1 year ago",
    body: "this site is pretty baller. what do i have to do to get on the friends page?",
  },

  {
    name: USER,
    time: "1 year ago",
    body:
      "@" +
      "aaaaati" +
      " hi and welcome!!!! the whole point of this website is for me to make friends so basically just tell me abt yourself so i can get to know you and then ill put you on there!!!!",
  },
  {
    name: "aaaaati",
    time: "1 year ago",
    body: "well i guess im a gemini",
  },
  {
    name: USER,
    time: "1 year ago",
    body:
      "@" +
      "aaaaati" +
      " thats awesome!!! im a leo, i really like media (check out my <a href='me.html'>about me</a> for more deets but im especially obsessed with madoka magica (no spoilers though ive only seen eps 1 and 2)) and im kind of a programmer (as you may have noticed from my awesome website). i also spend basically all day on neocities so if you want to chat more plssss link me your website so i can sub to you :}",
  },

  {
    name: BFF,
    time: "1 year ago",
    body: "So not to put you on blast in public but when am I getting on that friends page?? Haven't I earned it by now?? /j",
  },

  {
    name: USER,
    time: "1 year ago",
    body:
      "@" +
      BFF +
      " oooopsies.... i have something special cooking for you don't worry (wink)",
  },

  {
    name: BFF,
    time: "1 year ago",
    body: "NO WAY?? MY OWN NAME COLOR??",
  },

  {
    name: USER,
    time: "1 year ago",
    body: "haha yeah it was no big deal, actually pretty easy",
  },
  {
    name: BFF,
    time: "1 year ago",
    body: "Well I am honored. It's really cool. Not as cool as the animated name you've given yourself though lol!!",
  },
  {
    name: USER,
    time: "1 year ago",
    body: "thx hahaha i have to keep something special for myself so everyone notices when im commenting",
  },

  {
    name: BFF,
    time: "11 months ago",
    body: "EVERYONE. This is an important annoucement. It is Cubey's SITE BIRTHDAY!! Be sure to leave a comment, or invoke my wrath!!",
  },
  {
    name: USER,
    time: "11 months ago",
    body: "awawawawaa aliceee you didnt have to do thatttt",
  },
  {
    name: BFF,
    time: "11 months ago",
    body: "Shushhhhh. My site wouldn't have nearly as many visitors if it wasn't for your genius coding, Seven :)",
  },

  {
    name: "miauau",
    time: "11 months ago",
    body: "HAPPY NEOBIRTHDAY CUBEY",
  },
  {
    name: "sarahpie",
    time: "11 months ago",
    body: "Happy site bday. LOVE the most recent update",
  },
  {
    type: "meta",
    body: "---------------------|53 comments hidden|---------------------",
  },
  {
    name: USER,
    time: "11 months ago",
    body: "guysss plsss tysm i cant even respond to everyone 😭",
  },

  {
    name: "Teef",
    time: "9 months ago",
    body: "Hey. Is this site still getting updated? It's been almost a month since the last changes.",
  },
  {
    name: USER,
    time: "9 months ago",
    body:
      "@Teef tysm for asking!!! yeah no im spending a lot of time helping " +
      BFF +
      " with her site so havent been working on mine as much srryyy",
  },
  {
    name: BFF,
    time: "9 months ago",
    body: "Sorry for stealing Cubey from you all, but it's really paying off!! We've almost cracked the top 50 sites by daily viewers, which means we'll get featured on the front page soon!!",
  },
  {
    name: USER,
    time: "9 months ago",
    body: "haha yeah its like im kyubey from madoka magica and im giving you magic powers",
  },
  {
    name: BFF,
    time: "9 months ago",
    body: "HAHA you're so right. I guess I'm finally going to have to watch that show now, after all you've done for me :)",
  },
  {
    name: "Teef",
    time: "9 months ago",
    body: "But everything's good IRL? Some of your statuses make it sound like you're going through some stuff...",
  },
  {
    name: USER,
    time: "9 months ago",
    body: "ohhh plsss dw about meeee but tyty for asking. im just focusing on alices website since thats whats most important!!!!",
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
