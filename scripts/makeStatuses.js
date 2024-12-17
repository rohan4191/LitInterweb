const USER = "<span class=username>cyubey</span>";
const BFF = "<span style='color: red'>m_alice</span>";

const statuses = [
  {
    time: "3 months ago",
    body: "or just like comment on my guestbook or something PLEASE",
  },
  {
    time: "3 months ago",
    body: "you know i cant host one i dont have neocities premium",
  },
  {
    time: "3 months ago",
    body: "so we can talk in your chatbox",
  },
  {
    time: "3 months ago",
    body: "alice if youre reading this please please put your website back up",
  },
  {
    time: "3 months ago",
    body: "UGH GREAT A NEW COMMENT AND ITS CHAINMAIL AGAIN. DO NOT COMMENT CHAINMAIL ON MY GUESTBOOK",
  },
  {
    time: "3 months ago",
    body: "i mean ik lots of people visited from my button on alices site but now theres like NO ONE????",
  },
  {
    time: "3 months ago",
    body: "if you care about me PLEASE leave a comment on the guestbook",
  },
  {
    time: "3 months ago",
    body: "its so unfair i helped her so much",
  },
  {
    time: "3 months ago",
    body: "i worked so hard on her site and then she just deletes it??????",
  },
  {
    time: "3 months ago",
    body: "and now im getting like no visitors like what????",
  },
  {
    time: "3 months ago",
    body: "worried abt alices site like whered she go????",
  },

  {
    time: "4 months ago",
    body: "writing code for ever and ever and ever and... (recursion joke)",
  },
  {
    time: "5 months ago",
    body: "feeling special things for special people",
  },
  {
    time: "7 months ago",
    body: "casting spells of website awesomeness",
  },

  {
    time: "8 months ago",
    body: "my world is falling apart. how do i change my username",
  },

  {
    time: "9 months ago",
    body: "wishing that my dad would EVER KNOCK i stggg",
  },
  {
    time: "9 months ago",
    body: "ENRAGED that my parents wont let me watch past episode 2 of madoka magica",
  },

  {
    time: "1 year ago",
    body: "<p style='white-space: pre-wrap'>\
／＞　 フ\n\
  | 　_　_| \n\
／` ミ＿xノ \n\
/　　　　 |\n\
/　 ヽ　　 ﾉ\n\
│　　|　|　|\n\
／￣|　　 |　|　|\n\
(￣ヽ＿_ヽ_)__)\n\
＼二)</p>",
  },
  {
    time: "1 year ago",
    body: "wait i just overwrote the status now i need to set it again",
  },
  {
    time: "1 year ago",
    body: "YAYYY IT WORKED",
  },
  {
    time: "1 year ago",
    body: "<p style='white-space: pre-wrap'>\
／＞　 フ\n\
  | 　_　_| \n\
／` ミ＿xノ \n\
/　　　　 |\n\
/　 ヽ　　 ﾉ\n\
│　　|　|　|\n\
／￣|　　 |　|　|\n\
(￣ヽ＿_ヽ_)__)\n\
＼二)</p>",
  },
  {
    time: "1 year ago",
    body: "oops that didnt work",
  },
  {
    time: "1 year ago",
    body: "\n\
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
    time: "2 years ago",
    body:
      "ASTOUNDED that " +
      BFF +
      " has such a huge page and decided to raid me >u<",
  },
  {
    time: "2 years ago",
    body: "EEEEp so many COMMENTS HIII EVERYONE",
  },

  {
    time: "3 years ago",
    body: "new layout for the like 4 people who will see it!!!!!",
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
