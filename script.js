/* =====================================================
   90s KIDS VIBE
   YOUTUBE MUSIC PLAYER
===================================================== */


/*
    =====================================================
    SONG DATABASE

    The first song uses the YouTube Music link you sent.

    You can add more YouTube video IDs below.
    =====================================================
*/


const songs = [

    {
        id: 1,
        title: "Song 1",
        artist: "YouTube Music",
        year: 2010,
        youtubeId: "Xe6Gc7NtxEs"
    },

    {
        id: 2,
        title: "Song 2",
        artist: "YouTube Music",
        year: 2010,
        youtubeId: ""
    },

    {
        id: 3,
        title: "Song 3",
        artist: "YouTube Music",
        year: 2011,
        youtubeId: ""
    },

    {
        id: 4,
        title: "Song 4",
        artist: "YouTube Music",
        year: 2012,
        youtubeId: ""
    },

    {
        id: 5,
        title: "Song 5",
        artist: "YouTube Music",
        year: 2013,
        youtubeId: ""
    }

];


/* =====================================================
   PLAYER VARIABLES
===================================================== */

let player = null;

let playerReady = false;

let currentIndex = 0;

let shuffle = true;

let history = [];

let historyPosition = -1;


/* =====================================================
   HTML ELEMENTS
===================================================== */

const title =
    document.getElementById("songTitle");

const artist =
    document.getElementById("songArtist");

const playBtn =
    document.getElementById("playBtn");

const nextBtn =
    document.getElementById("nextBtn");

const previousBtn =
    document.getElementById("previousBtn");

const shuffleBtn =
    document.getElementById("shuffleBtn");

const songList =
    document.getElementById("songList");

const search =
    document.getElementById("search");


/* =====================================================
   LOAD YOUTUBE API
===================================================== */

const tag =
    document.createElement("script");

tag.src =
    "https://www.youtube.com/iframe_api";

document.head.appendChild(tag);


/* =====================================================
   YOUTUBE API READY
===================================================== */

window.onYouTubeIframeAPIReady = function () {

    player =
        new YT.Player(
            "youtubePlayer",
            {

                videoId:
                    songs[0].youtubeId,

                playerVars: {

                    playsinline: 1,

                    rel: 0

                },

                events: {

                    onReady:
                        function () {

                            playerReady = true;

                            loadSongInformation();

                        },

                    onStateChange:
                        onPlayerStateChange

                }

            }
        );

};


/* =====================================================
   LOAD SONG INFORMATION
===================================================== */

function loadSongInformation() {

    const song =
        songs[currentIndex];

    if (!song) {
        return;
    }

    title.textContent =
        song.title;

    artist.textContent =
        song.artist +
        " • " +
        song.year;

}


/* =====================================================
   PLAY SONG
===================================================== */

function playSong(index) {

    if (
        index < 0 ||
        index >= songs.length
    ) {
        return;
    }

    const song =
        songs[index];

    /*
       Ignore songs where no YouTube ID
       has been entered.
    */

    if (!song.youtubeId) {

        alert(
            "This song does not have a YouTube video ID yet."
        );

        return;

    }


    currentIndex =
        index;


    addHistory(index);


    loadSongInformation();


    if (
        playerReady &&
        player
    ) {

        player.loadVideoById(
            song.youtubeId
        );

    }

}


/* =====================================================
   HISTORY
===================================================== */

function addHistory(index) {

    history =
        history.slice(
            0,
            historyPosition + 1
        );

    history.push(index);

    historyPosition =
        history.length - 1;

}


/* =====================================================
   NEXT RANDOM SONG
===================================================== */

function nextSong() {

    const available =
        songs.filter(
            song =>
                song.youtubeId &&
                song.id !==
                songs[currentIndex].id
        );


    if (
        available.length === 0
    ) {

        alert(
            "Add more YouTube video IDs to your playlist."
        );

        return;

    }


    let randomSong;


    randomSong =
        available[
            Math.floor(
                Math.random() *
                available.length
            )
        ];


    const index =
        songs.findIndex(
            song =>
                song.id ===
                randomSong.id
        );


    playSong(index);

}


/* =====================================================
   PREVIOUS SONG
===================================================== */

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


    const song =
        songs[currentIndex];


    loadSongInformation();


    if (
        playerReady &&
        player &&
        song.youtubeId
    ) {

        player.loadVideoById(
            song.youtubeId
        );

    }

}


/* =====================================================
   PLAY / PAUSE
===================================================== */

playBtn.addEventListener(
    "click",
    function () {

        if (
            !playerReady ||
            !player
        ) {

            return;

        }


        const state =
            player.getPlayerState();


        if (
            state ===
            YT.PlayerState.PLAYING
        ) {

            player.pauseVideo();

            playBtn.textContent =
                "▶";

        }

        else {

            player.playVideo();

            playBtn.textContent =
                "⏸";

        }

    }
);


/* =====================================================
   NEXT BUTTON
===================================================== */

nextBtn.addEventListener(
    "click",
    function () {

        nextSong();

    }
);


/* =====================================================
   PREVIOUS BUTTON
===================================================== */

previousBtn.addEventListener(
    "click",
    function () {

        previousSong();

    }
);


/* =====================================================
   SHUFFLE
===================================================== */

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


/* =====================================================
   YOUTUBE PLAYER STATE
===================================================== */

function onPlayerStateChange(event) {

    if (
        event.data ===
        YT.PlayerState.PLAYING
    ) {

        playBtn.textContent =
            "⏸";

    }


    if (
        event.data ===
        YT.PlayerState.PAUSED
    ) {

        playBtn.textContent =
            "▶";

    }


    /*
       When song finishes,
       automatically choose another.
    */

    if (
        event.data ===
        YT.PlayerState.ENDED
    ) {

        nextSong();

    }

}


/* =====================================================
   DISPLAY SONG LIST
===================================================== */

function displaySongs(list) {

    songList.innerHTML = "";


    list.forEach(
        function (song) {

            const item =
                document.createElement(
                    "div"
                );


            item.className =
                "song";


            item.innerHTML = `

                <div class="song-info">

                    <div class="song-title">
                        ${song.title}
                    </div>

                    <div class="song-artist">
                        ${song.artist}
                        • ${song.year}
                    </div>

                </div>

                <button>
                    ▶
                </button>

            `;


            item
                .querySelector("button")
                .addEventListener(
                    "click",
                    function () {

                        const index =
                            songs.findIndex(
                                s =>
                                    s.id ===
                                    song.id
                            );

                        playSong(index);

                    }
                );


            songList.appendChild(item);

        }
    );

}


/* =====================================================
   SEARCH
===================================================== */

search.addEventListener(
    "input",
    function () {

        const query =
            search.value
                .toLowerCase()
                .trim();


        const filtered =
            songs.filter(
                function (song) {

                    return (

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

                }
            );


        displaySongs(
            filtered
        );

    }
);


/* =====================================================
   INITIAL DISPLAY
===================================================== */

displaySongs(
    songs
);
