const USER = "<span class=username>cyubey</span>";
const BFF = "<span style='color: red'>m_alice</span>";

let comments = [
  {
    name: USER,
    time: "3 years ago",
    body: "got my guestbook setup and heres a first comment so you arent intimidated to leave a message!!!!! drop whatever thoughts you got in the box above plssss!!!!!",
  },
  {
    name: "lux",
    time: "3 years ago",
    body: "first",
  },
  {
    name: USER,
    time: "3 years ago",
    body: "@lux lolll thanks for being the first comment on my guestbook (besides me ofc). is there anything else you wanted to say? maybe i should add some questions to this page in case people dk what to comment",
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
    body: "@" + BFF + " madoka magica or mystic messenger lolol",
  },
  {
    name: BFF,
    time: "2 years ago",
    body:
      "@" +
      USER +
      " Oh HAHA. I meant Mystic Messenger. I'm super in love with Seven. Ur kinda like him you know? Just sayin. Like a cool hacker type. Because how did you make the cursor do that??",
  },
  {
    name: USER,
    time: "2 years ago",
    body:
      "@" +
      BFF +
      " >u< tysm!!!! im trying really hard to make my site cool so more people visit and follow my profile",
  },
  {
    name: USER,
    time: "2 years ago",
    body: "@" + BFF + " (wink wink you should follow)",
  },
  {
    name: USER,
    time: "2 years ago",
    body: "@" + BFF + " i mean only if you want to!!!!",
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
      " tysm!!! only if u credit me hehe just link back to my site so people know where you got it from",
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
      " and have fallen in LOOOOOOVE. Iiiiinstant follow",
  },
  {
    name: USER,
    time: "2 years ago",
    body:
      "ohh are you all here from " + BFF + "??? thats really cool thank you",
  },
  {
    type: "meta",
    body: "---------------------|89 comments hidden|---------------------",
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
    name: "Aspirier",
    time: "11 months ago",
    body:
      "heyyy!~~ your site is adorable >w<\nI think my favorite part is all the stickers and I found you from a link from @" +
      BFF,
  },
  {
    name: USER,
    time: "11 months ago",
    body:
      "omggg thank youuu im so glad you like the stickers. it seems like basically everyone is finding me from @" +
      BFF +
      " lol haha",
  },

  {
    name: BFF,
    time: "10 months ago",
    body: "EVERYONE. This is an important annoucement. It is Cubey's SITE BIRTHDAY!! Be sure to leave a comment, or invoke my wrath!!",
  },
  {
    name: USER,
    time: "10 months ago",
    body: "awawawawaa aliceee you didnt have to do thatttt",
  },
  {
    name: BFF,
    time: "10 months ago",
    body: "Shushhhhh. My site wouldn't have nearly as many visitors if it wasn't for your genius coding, Seven. Just sayin : )",
  },

  {
    name: "miauau",
    time: "10 months ago",
    body: "HAPPY NEOBIRTHDAY CUBEY",
  },
  {
    name: "sarahpie",
    time: "10 months ago",
    body: "Happy site bday. LOVE the most recent update",
  },
  {
    type: "meta",
    body: "---------------------|53 comments hidden|---------------------",
  },
  {
    name: USER,
    time: "10 months ago",
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
      "@Teef tysm for asking!!! yeah no im spending a lot of time helping @" +
      BFF +
      " with her site so havent been working on mine as much srryyy",
  },
  {
    name: BFF,
    time: "9 months ago",
    body: "Sorry for stealing Cubey from you all, but it's really paying off!! We've almost cracked the top 20 sites by daily viewers, which means we could get featured on the front page soon!!",
  },
  {
    name: USER,
    time: "9 months ago",
    body: "haha yeah its like im kyubey from madoka magica and im giving you magic powers",
  },
  {
    name: BFF,
    time: "9 months ago",
    body: "HAHA you're so right. I guess I'm finally going to have to watch that show now, after all you've done for me : )",
  },
  {
    name: "Teef",
    time: "9 months ago",
    body:
      "@" +
      USER +
      " But everything's good IRL? Some of your statuses make it sound like you're going through some stuff...",
  },
  {
    name: USER,
    time: "9 months ago",
    body: "ohhh plsss dw about meeee hehe but tyty for asking. im just focusing on alices website since thats whats most important!!!!",
  },

  {
    name: BFF,
    time: "8 months ago",
    body: "PSA to everyone on this board: Do NOT watch episode 3 of Madoka Magica. Just sayin.",
  },
  {
    name: "sarahpie",
    time: "8 months ago",
    body:
      "@" +
      BFF +
      " LMAOOO. I was soooo surprised to hear Cubey hadn't actually seen past episode 2 cause it is alllll over the place here.",
  },
  {
    name: BFF,
    time: "8 months ago",
    body: "HAHA yeah she didn't take it well when I told her what happens.",
  },
  {
    name: "miauau",
    time: "8 months ago",
    body: "NOOOO I JUST LOOKED IT UP WHAT THE HECK. TELL ME YOU DIDNT TELL CUBEY ABOUT THIS SHE MUST BE SO SAD",
  },
  {
    name: BFF,
    time: "8 months ago",
    body:
      "Well since I know <i>someone</i> can't help but read every comment as soon as they get it, hopefully you can forgive me @" +
      USER +
      " (and stop giving me the silent treatment)",
  },

  {
    name: USER,
    time: "8 months ago",
    body: "madoka magica is supposed to be CUTE and HAPPY but its actually been sad and evil all along????? im literally called kyubey guys and i said i was giving alice magic powers but now that means im actually cursing her like whaaattttt 😭😭😭😭",
  },
  {
    name: BFF,
    time: "8 months ago",
    body: "Cubeyyyy nooooo you're not cursing me or giving me anything dangerous. And besides, we're friends because I like you, not because you're giving me something. You're so smart and passionate and so cheerful, you helping me with my website is only like my fourth favorite thing about you. Just sayin :)",
  },
  {
    name: "miauau",
    time: "8 months ago",
    body: "CUBEY WE LOVE YOU OKAY??? and alice is right. your magic. youre site is magic. everything you do is magic <333 (but in a good way not in an evil way)",
  },
  {
    name: USER,
    time: "8 months ago",
    body: "awwwwwweeee guys hahahaaa i wasnt actually thaaaat upsetttt i was being silllyyyy. but now im actually gonna cry for real youre all sososo nice tytyty",
  },

  {
    name: BFF,
    time: "6 months ago",
    body:
      "@" +
      USER +
      " chatbox on my site is broken for some reason so I'll just keep talking here HAHA. I think most of my friends are online now but I still have a few people I'm close to IRL. How about you?",
  },
  {
    name: USER,
    time: "6 months ago",
    body:
      "@" +
      BFF +
      " hahaha thats cool im pretty much all online now just cause there arent a lot of people at my school who like the things i like ",
  },
  {
    name: BFF,
    time: "6 months ago",
    body: "Super real!! You're the only person I have I can talk about Mystic Messenger with, Seven :)\nSomething I wonder about though is what it would be like to meet one of my net friends in person.",
  },
  {
    name: USER,
    time: "6 months ago",
    body: "oh man that would be crazy. idek if i would want to. maybe for one or two people but i have so many people on my friends page who i dont even know that well online so like it deffff wouldnt go well irl",
  },
  {
    name: BFF,
    time: "6 months ago",
    body: "Cmonnnn Cubey you were just saying how your web friends are so much more similar to you than anyone IRL. Would you never even let me meet you in person??",
  },
  {
    name: USER,
    time: "6 months ago",
    body: "i said there were one or two people i wouldnt mind........ just sayin :}",
  },
  {
    name: "Teef",
    time: "6 months ago",
    body: "Chatbox is back up by the way. Has been for a while. In case you were wondering.",
  },

  {
    name: BFF,
    time: "4 months ago",
    body: "Hey everyone, if you like the aesthetic and awesome programming skillz Cubey has on display on this page (sorry for once again stealing her for a month), you should come check out the latest updated she helped me with for my <a href='alice'>site<a/>!! I think we might finally break out onto the front page soon, so any support would be fantastic!!",
  },
  {
    name: USER,
    time: "4 months ago",
    body: "cmon alice do you reallllyyyy need to advertise on my page lol? basically everyone here is from your page anyways.......",
  },
  {
    name: USER,
    time: "4 months ago",
    body: "srry srry if that sounded mean i didnt really mean it im really excited for you too",
  },

  {
    name: USER,
    time: "3 months ago",
    body:
      "hey has anyone heard from @" +
      BFF +
      "??? it looks like her site is down and idk her actual phone number or anything",
  },
  {
    name: "g3th@ck3d!",
    time: "3 months ago",
    body: "you have been visited by the NEOCITY NIBBLER. your page looks nice and scrumptious. share this on 13 other pages or else your neocity will get nibbled",
  },

  {
    name: "normalOrmal",
    time: "1 month ago",
    body: "aaaaaaa luv ur page. rain animation is so cute i could drink it up. hearts so sparkly they hurt my eyes. flawless. devine. byootiful.",
  },
  {
    name: USER,
    time: "1 month ago",
    body: "@normalOrmal. its not supposed to be cute its supposed to be sad and dreary. bc thats how i feel.",
  },
  {
    name: "normalOrmal",
    time: "1 month ago",
    body: "oh, oki.",
  },
  {
    name: "ellabella",
    time: "3 weeks ago",
    body: "O i love your landing page!! but what happened :o your pages are so cute i wish you still posted",
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
