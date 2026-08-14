/* =========================================================
   90s KIDS VIBE
   2000–2015 MUSIC PLAYER
   MP3 + YOUTUBE
========================================================= */


/* =========================================================
   SONG DATABASE
========================================================= */

const songs = [

    /* =======================
       2000
    ======================= */

    {id:1,title:"Oops!... I Did It Again",artist:"Britney Spears",year:2000,type:"youtube",youtubeId:""},
    {id:2,title:"It's Gonna Be Me",artist:"NSYNC",year:2000,type:"youtube",youtubeId:""},
    {id:3,title:"Bye Bye Bye",artist:"NSYNC",year:2000,type:"youtube",youtubeId:""},
    {id:4,title:"Music",artist:"Madonna",year:2000,type:"youtube",youtubeId:""},
    {id:5,title:"Stan",artist:"Eminem",year:2000,type:"youtube",youtubeId:""},
    {id:6,title:"The Real Slim Shady",artist:"Eminem",year:2000,type:"youtube",youtubeId:""},
    {id:7,title:"Shape of My Heart",artist:"Backstreet Boys",year:2000,type:"youtube",youtubeId:""},


    /* =======================
       2001
    ======================= */

    {id:8,title:"Hero",artist:"Enrique Iglesias",year:2001,type:"youtube",youtubeId:""},
    {id:9,title:"Whenever, Wherever",artist:"Shakira",year:2001,type:"youtube",youtubeId:""},
    {id:10,title:"Fallin'",artist:"Alicia Keys",year:2001,type:"youtube",youtubeId:""},
    {id:11,title:"Can't Get You Out of My Head",artist:"Kylie Minogue",year:2001,type:"youtube",youtubeId:""},
    {id:12,title:"All for You",artist:"Janet Jackson",year:2001,type:"youtube",youtubeId:""},
    {id:13,title:"In the End",artist:"Linkin Park",year:2001,type:"youtube",youtubeId:""},
    {id:14,title:"Dilemma",artist:"Nelly ft. Kelly Rowland",year:2002,type:"youtube",youtubeId:""},


    /* =======================
       2002
    ======================= */

    {id:15,title:"Lose Yourself",artist:"Eminem",year:2002,type:"youtube",youtubeId:""},
    {id:16,title:"In Da Club",artist:"50 Cent",year:2003,type:"youtube",youtubeId:""},
    {id:17,title:"A Thousand Miles",artist:"Vanessa Carlton",year:2002,type:"youtube",youtubeId:""},
    {id:18,title:"Complicated",artist:"Avril Lavigne",year:2002,type:"youtube",youtubeId:""},
    {id:19,title:"Sk8er Boi",artist:"Avril Lavigne",year:2002,type:"youtube",youtubeId:""},
    {id:20,title:"Whenever Wherever",artist:"Shakira",year:2002,type:"youtube",youtubeId:""},
    {id:21,title:"Whenever You Call",artist:"Mariah Carey",year:2002,type:"youtube",youtubeId:""},


    /* =======================
       2003
    ======================= */

    {id:22,title:"Crazy in Love",artist:"Beyoncé",year:2003,type:"youtube",youtubeId:""},
    {id:23,title:"Bring Me to Life",artist:"Evanescence",year:2003,type:"youtube",youtubeId:""},
    {id:24,title:"Where Is the Love?",artist:"Black Eyed Peas",year:2003,type:"youtube",youtubeId:""},
    {id:25,title:"Beautiful",artist:"Christina Aguilera",year:2003,type:"youtube",youtubeId:""},
    {id:26,title:"Hey Ya!",artist:"Outkast",year:2003,type:"youtube",youtubeId:""},
    {id:27,title:"Yeah!",artist:"Usher ft. Lil Jon & Ludacris",year:2004,type:"youtube",youtubeId:""},
    {id:28,title:"Me Against the Music",artist:"Britney Spears",year:2003,type:"youtube",youtubeId:""},


    /* =======================
       2004
    ======================= */

    {id:29,title:"Numb",artist:"Linkin Park",year:2004,type:"youtube",youtubeId:""},
    {id:30,title:"Toxic",artist:"Britney Spears",year:2004,type:"youtube",youtubeId:""},
    {id:31,title:"My Immortal",artist:"Evanescence",year:2004,type:"youtube",youtubeId:""},
    {id:32,title:"This Love",artist:"Maroon 5",year:2004,type:"youtube",youtubeId:""},
    {id:33,title:"Take Me Out",artist:"Franz Ferdinand",year:2004,type:"youtube",youtubeId:""},
    {id:34,title:"Nobody's Home",artist:"Avril Lavigne",year:2004,type:"youtube",youtubeId:""},
    {id:35,title:"Yeah!",artist:"Usher",year:2004,type:"youtube",youtubeId:""},


    /* =======================
       2005
    ======================= */

    {id:36,title:"Hollaback Girl",artist:"Gwen Stefani",year:2005,type:"youtube",youtubeId:""},
    {id:37,title:"Don't Cha",artist:"The Pussycat Dolls",year:2005,type:"youtube",youtubeId:""},
    {id:38,title:"We Belong Together",artist:"Mariah Carey",year:2005,type:"youtube",youtubeId:""},
    {id:39,title:"You're Beautiful",artist:"James Blunt",year:2005,type:"youtube",youtubeId:""},
    {id:40,title:"Bad Day",artist:"Daniel Powter",year:2005,type:"youtube",youtubeId:""},
    {id:41,title:"Wake Me Up When September Ends",artist:"Green Day",year:2005,type:"youtube",youtubeId:""},
    {id:42,title:"Don't Lie",artist:"Black Eyed Peas",year:2005,type:"youtube",youtubeId:""},


    /* =======================
       2006
    ======================= */

    {id:43,title:"Hips Don't Lie",artist:"Shakira ft. Wyclef Jean",year:2006,type:"youtube",youtubeId:""},
    {id:44,title:"Promiscuous",artist:"Nelly Furtado",year:2006,type:"youtube",youtubeId:""},
    {id:45,title:"SexyBack",artist:"Justin Timberlake",year:2006,type:"youtube",youtubeId:""},
    {id:46,title:"Smack That",artist:"Akon ft. Eminem",year:2006,type:"youtube",youtubeId:""},
    {id:47,title:"Unfaithful",artist:"Rihanna",year:2006,type:"youtube",youtubeId:""},
    {id:48,title:"Chasing Cars",artist:"Snow Patrol",year:2006,type:"youtube",youtubeId:""},
    {id:49,title:"Crazy",artist:"Gnarls Barkley",year:2006,type:"youtube",youtubeId:""},


    /* =======================
       2007
    ======================= */

    {id:50,title:"Umbrella",artist:"Rihanna ft. Jay-Z",year:2007,type:"youtube",youtubeId:""},
    {id:51,title:"Bleeding Love",artist:"Leona Lewis",year:2007,type:"youtube",youtubeId:""},
    {id:52,title:"Apologize",artist:"Timbaland ft. OneRepublic",year:2007,type:"youtube",youtubeId:""},
    {id:53,title:"Beautiful Girls",artist:"Sean Kingston",year:2007,type:"youtube",youtubeId:""},
    {id:54,title:"Big Girls Don't Cry",artist:"Fergie",year:2007,type:"youtube",youtubeId:""},
    {id:55,title:"The Way I Are",artist:"Timbaland",year:2007,type:"youtube",youtubeId:""},
    {id:56,title:"Aadat",artist:"Jal",year:2004,type:"youtube",youtubeId:""},


    /* =======================
       2008
    ======================= */

    {id:57,title:"Low",artist:"Flo Rida ft. T-Pain",year:2008,type:"youtube",youtubeId:""},
    {id:58,title:"I'm Yours",artist:"Jason Mraz",year:2008,type:"youtube",youtubeId:""},
    {id:59,title:"Poker Face",artist:"Lady Gaga",year:2008,type:"youtube",youtubeId:""},
    {id:60,title:"Just Dance",artist:"Lady Gaga",year:2008,type:"youtube",youtubeId:""},
    {id:61,title:"Viva la Vida",artist:"Coldplay",year:2008,type:"youtube",youtubeId:""},
    {id:62,title:"Disturbia",artist:"Rihanna",year:2008,type:"youtube",youtubeId:""},
    {id:63,title:"I Kissed a Girl",artist:"Katy Perry",year:2008,type:"youtube",youtubeId:""},


    /* =======================
       2009
    ======================= */

    {id:64,title:"I Gotta Feeling",artist:"Black Eyed Peas",year:2009,type:"youtube",youtubeId:""},
    {id:65,title:"Tik Tok",artist:"Kesha",year:2009,type:"youtube",youtubeId:""},
    {id:66,title:"Bad Romance",artist:"Lady Gaga",year:2009,type:"youtube",youtubeId:""},
    {id:67,title:"Party in the USA",artist:"Miley Cyrus",year:2009,type:"youtube",youtubeId:""},
    {id:68,title:"Fireflies",artist:"Owl City",year:2009,type:"youtube",youtubeId:""},
    {id:69,title:"Sexy Bitch",artist:"David Guetta ft. Akon",year:2009,type:"youtube",youtubeId:""},
    {id:70,title:"3",artist:"Britney Spears",year:2009,type:"youtube",youtubeId:""},


    /* =======================
       2010
    ======================= */

    {id:71,title:"Just the Way You Are",artist:"Bruno Mars",year:2010,type:"youtube",youtubeId:""},
    {id:72,title:"Grenade",artist:"Bruno Mars",year:2010,type:"youtube",youtubeId:""},
    {id:73,title:"Teenage Dream",artist:"Katy Perry",year:2010,type:"youtube",youtubeId:""},
    {id:74,title:"California Gurls",artist:"Katy Perry",year:2010,type:"youtube",youtubeId:""},
    {id:75,title:"Love the Way You Lie",artist:"Eminem ft. Rihanna",year:2010,type:"youtube",youtubeId:""},
    {id:76,title:"Only Girl in the World",artist:"Rihanna",year:2010,type:"youtube",youtubeId:""},
    {id:77,title:"Dynamite",artist:"Taio Cruz",year:2010,type:"youtube",youtubeId:""},


    /* =======================
       2011
    ======================= */

    {id:78,title:"Party Rock Anthem",artist:"LMFAO",year:2011,type:"youtube",youtubeId:""},
    {id:79,title:"Give Me Everything",artist:"Pitbull",year:2011,type:"youtube",youtubeId:""},
    {id:80,title:"Rolling in the Deep",artist:"Adele",year:2011,type:"youtube",youtubeId:""},
    {id:81,title:"Someone Like You",artist:"Adele",year:2011,type:"youtube",youtubeId:""},
    {id:82,title:"Moves Like Jagger",artist:"Maroon 5",year:2011,type:"youtube",youtubeId:""},
    {id:83,title:"The Lazy Song",artist:"Bruno Mars",year:2011,type:"youtube",youtubeId:""},
    {id:84,title:"Super Bass",artist:"Nicki Minaj",year:2011,type:"youtube",youtubeId:""},


    /* =======================
       2012
    ======================= */

    {id:85,title:"Call Me Maybe",artist:"Carly Rae Jepsen",year:2012,type:"youtube",youtubeId:""},
    {id:86,title:"We Are Never Ever Getting Back Together",artist:"Taylor Swift",year:2012,type:"youtube",youtubeId:""},
    {id:87,title:"Gangnam Style",artist:"PSY",year:2012,type:"youtube",youtubeId:""},
    {id:88,title:"Diamonds",artist:"Rihanna",year:2012,type:"youtube",youtubeId:""},
    {id:89,title:"Starships",artist:"Nicki Minaj",year:2012,type:"youtube",youtubeId:""},
    {id:90,title:"Locked Out of Heaven",artist:"Bruno Mars",year:2012,type:"youtube",youtubeId:""},
    {id:91,title:"Whistle",artist:"Flo Rida",year:2012,type:"youtube",youtubeId:""},


    /* =======================
       2013
    ======================= */

    {id:92,title:"Counting Stars",artist:"OneRepublic",year:2013,type:"youtube",youtubeId:""},
    {id:93,title:"Get Lucky",artist:"Daft Punk",year:2013,type:"youtube",youtubeId:""},
    {id:94,title:"Wake Me Up",artist:"Avicii",year:2013,type:"youtube",youtubeId:""},
    {id:95,title:"Royals",artist:"Lorde",year:2013,type:"youtube",youtubeId:""},


    /* =======================
       2014–2015
    ======================= */

    {id:96,title:"Happy",artist:"Pharrell Williams",year:2014,type:"youtube",youtubeId:""},
    {id:97,title:"All About That Bass",artist:"Meghan Trainor",year:2014,type:"youtube",youtubeId:""},
    {id:98,title:"Uptown Funk",artist:"Mark Ronson ft. Bruno Mars",year:2014,type:"youtube",youtubeId:""},
    {id:99,title:"See You Again",artist:"Wiz Khalifa ft. Charlie Puth",year:2015,type:"youtube",youtubeId:""},
    {id:100,title:"Sugar",artist:"Maroon 5",year:2015,type:"youtube",youtubeId:""}

];


/* =========================================================
   PLAYER VARIABLES
========================================================= */

let currentIndex = 0;

let shuffle = true;

let repeat = false;

let youtubePlayer = null;

let youtubeReady = false;

let history = [];

let historyPosition = -1;


/* =========================================================
   GET HTML ELEMENTS
========================================================= */

const audio =
    document.getElementById("audio");

const playBtn =
    document.getElementById("playBtn");

const previousBtn =
    document.getElementById("previousBtn");

const nextBtn =
    document.getElementById("nextBtn");

const shuffleBtn =
    document.getElementById("shuffleBtn");

const repeatBtn =
    document.getElementById("repeatBtn");

const progress =
    document.getElementById("progress");

const volume =
    document.getElementById("volume");

const playerTitle =
    document.getElementById("playerTitle");

const playerArtist =
    document.getElementById("playerArtist");

const playerCover =
    document.getElementById("playerCover");

const playerType =
    document.getElementById("playerType");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const songList =
    document.getElementById("songList");

const searchInput =
    document.getElementById("searchInput");

const youtubeContainer =
    document.getElementById("youtubeContainer");


/* =========================================================
   YOUTUBE IFRAME API
========================================================= */

const youtubeScript =
    document.createElement("script");

youtubeScript.src =
    "https://www.youtube.com/iframe_api";

document.head.appendChild(
    youtubeScript
);


/* =========================================================
   YOUTUBE API READY
========================================================= */

window.onYouTubeIframeAPIReady =
    function () {

        youtubePlayer =
            new YT.Player(
                "youtubePlayer",
                {

                    height: "100%",

                    width: "100%",

                    videoId: "",

                    playerVars: {

                        playsinline: 1,

                        rel: 0

                    },

                    events: {

                        onReady:
                            function () {

                                youtubeReady =
                                    true;

                            },

                        onStateChange:
                            youtubeStateChange

                    }

                }
            );

    };


/* =========================================================
   DISPLAY SONG LIST
========================================================= */

function displaySongs(list = songs) {

    if (!songList) return;

    songList.innerHTML = "";


    list.forEach(song => {

        const item =
            document.createElement("div");


        item.className =
            "song";


        const cover =
            song.youtubeId
                ? `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`
                : "";


        item.innerHTML = `

            <img
                class="songCover"
                src="${cover}"
                alt=""
            >

            <div class="songInfo">

                <div class="songTitle">
                    ${song.title}
                </div>

                <div class="songArtist">
                    ${song.artist}
                    • ${song.year}
                </div>

                <div class="songSource">
                    ▶ YouTube
                </div>

            </div>

            <button
                onclick="playSong(${song.id})">
                ▶
            </button>

        `;


        songList.appendChild(item);

    });

}


/* =========================================================
   PLAY SONG
========================================================= */

function playSong(id) {

    const index =
        songs.findIndex(
            song => song.id === id
        );


    if (index === -1) return;


    currentIndex =
        index;


    addToHistory(
        currentIndex
    );


    loadSong();

}


/* =========================================================
   LOAD SONG
========================================================= */

function loadSong() {

    const song =
        songs[currentIndex];


    if (!song) return;


    if (playerTitle)
        playerTitle.textContent =
            song.title;


    if (playerArtist)
        playerArtist.textContent =
            song.artist;


    if (playerType)
        playerType.textContent =
            `▶ YouTube • ${song.year}`;


    if (playerCover) {

        if (song.youtubeId) {

            playerCover.src =
                `https://img.youtube.com/vi/${song.youtubeId}/hqdefault.jpg`;

        }

    }


    /*
       YouTube ID missing
    */

    if (!song.youtubeId) {

        alert(
            `"${song.title}" needs a YouTube video ID.`
        );

        return;

    }


    /*
       Show YouTube player
    */

    if (youtubeContainer) {

        youtubeContainer.style.display =
            "block";

    }


    /*
       Load video
    */

    if (
        youtubePlayer &&
        youtubeReady
    ) {

        youtubePlayer.loadVideoById(
            song.youtubeId
        );

    }

}


/* =========================================================
   ADD TO RANDOM HISTORY
========================================================= */

function addToHistory(index) {

    history =
        history.slice(
            0,
            historyPosition + 1
        );


    history.push(index);


    historyPosition =
        history.length - 1;

}


/* =========================================================
   NEXT — RANDOM
========================================================= */

function nextSong() {

    if (songs.length < 2)
        return;


    let nextIndex;


    do {

        nextIndex =
            Math.floor(
                Math.random() *
                songs.length
            );

    }

    while (
        nextIndex ===
        currentIndex
    );


    currentIndex =
        nextIndex;


    addToHistory(
        currentIndex
    );


    loadSong();

}


/* =========================================================
   PREVIOUS — PLAY HISTORY
========================================================= */

function previousSong() {

    if (
        historyPosition <= 0
    ) {

        return;

    }


    historyPosition--;


    currentIndex =
        history[
            historyPosition
        ];


    loadSong();

}


/* =========================================================
   NEXT BUTTON
========================================================= */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        nextSong
    );

}


/* =========================================================
   PREVIOUS BUTTON
========================================================= */

if (previousBtn) {

    previousBtn.addEventListener(
        "click",
        previousSong
    );

}


/* =========================================================
   PLAY / PAUSE
========================================================= */

if (playBtn) {

    playBtn.addEventListener(
        "click",
        function () {

            if (
                !youtubePlayer ||
                !youtubeReady
            )
                return;


            const state =
                youtubePlayer.getPlayerState();


            if (
                state ===
                YT.PlayerState.PLAYING
            ) {

                youtubePlayer.pauseVideo();

                playBtn.textContent =
                    "▶";

            }

            else {

                youtubePlayer.playVideo();

                playBtn.textContent =
                    "⏸";

            }

        }
    );

}


/* =========================================================
   SHUFFLE
========================================================= */

if (shuffleBtn) {

    shuffleBtn.addEventListener(
        "click",
        function () {

            shuffle =
                !shuffle;


            shuffleBtn.style.opacity =
                shuffle
                    ? "1"
                    : "0.5";

        }
    );

}


/* =========================================================
   REPEAT
========================================================= */

if (repeatBtn) {

    repeatBtn.addEventListener(
        "click",
        function () {

            repeat =
                !repeat;


            repeatBtn.style.opacity =
                repeat
                    ? "1"
                    : "0.5";

        }
    );

}


/* =========================================================
   YOUTUBE STATE
========================================================= */

function youtubeStateChange(event) {

    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        if (playBtn)
            playBtn.textContent =
                "⏸";

    }


    if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        if (playBtn)
            playBtn.textContent =
                "▶";

    }


    /*
       Song finished
    */

    if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        if (repeat) {

            youtubePlayer.playVideo();

        }

        else {

            nextSong();

        }

    }

}


/* =========================================================
   SEARCH
========================================================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const query =
                searchInput.value
                    .toLowerCase()
                    .trim();


            const results =
                songs.filter(
                    song =>

                        song.title
                            .toLowerCase()
                            .includes(query)

                        ||

                        song.artist
                            .toLowerCase()
                            .includes(query)

                        ||

                        String(song.year)
                            .includes(query)

                );


            displaySongs(
                results
            );

        }
    );

}


/* =========================================================
   VOLUME
========================================================= */

if (volume) {

    volume.addEventListener(
        "input",
        function () {

            if (
                youtubePlayer &&
                youtubeReady
            ) {

                youtubePlayer.setVolume(
                    Number(volume.value) * 100
                );

            }

        }
    );

}


/* =========================================================
   INITIALIZE
========================================================= */

displaySongs();


/* =========================================================
   SERVICE WORKER
========================================================= */

if (
    "serviceWorker" in navigator
) {

    window.addEventListener(
        "load",
        function () {

            navigator.serviceWorker.register(
                "./sw.js"
            );

        }
    );

}
