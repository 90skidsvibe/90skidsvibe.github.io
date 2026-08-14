/* =====================================================
   90s KIDS VIBE
   YOUTUBE PLAYER
===================================================== */


/* =====================================================
   SONG DATABASE

   IMPORTANT:
   youtubeId = YouTube VIDEO ID only.

   Example:
   https://www.youtube.com/watch?v=ABC12345678

   youtubeId:
   "ABC12345678"
===================================================== */

const songs = [

    {
        id: 1,
        title: "YouTube Song",
        artist: "YouTube Music",
        year: 2010,
        type: "youtube",
        youtubeId: "Xe6Gc7NtxEs"
    },

    {
        id: 2,
        title: "YouTube Song 2",
        artist: "YouTube Music",
        year: 2011,
        type: "youtube",
        youtubeId: ""
    },

    {
        id: 3,
        title: "YouTube Song 3",
        artist: "YouTube Music",
        year: 2012,
        type: "youtube",
        youtubeId: ""
    },

    {
        id: 4,
        title: "YouTube Song 4",
        artist: "YouTube Music",
        year: 2013,
        type: "youtube",
        youtubeId: ""
    },

    {
        id: 5,
        title: "YouTube Song 5",
        artist: "YouTube Music",
        year: 2014,
        type: "youtube",
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

let skipAttempts = 0;


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
   LOAD YOUTUBE IFRAME API
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

    const firstSong =
        findFirstYouTubeSong();


    if (!firstSong) {

        title.textContent =
            "No YouTube songs";

        artist.textContent =
            "Add a YouTube video ID";

        return;

    }


    currentIndex =
        songs.findIndex(
            song =>
                song.id ===
                firstSong.id
        );


    player =
        new YT.Player(
            "youtubePlayer",
            {

                videoId:
                    firstSong.youtubeId,

                playerVars: {

                    playsinline: 1,

                    rel: 0

                },

                events: {

                    onReady:
                        function () {

                            playerReady =
                                true;

                            loadSongInformation();

                        },

                    onStateChange:
                        onPlayerStateChange,

                    onError:
                        onPlayerError

                }

            }
        );

};


/* =====================================================
   FIND FIRST YOUTUBE SONG
===================================================== */

function findFirstYouTubeSong() {

    return songs.find(
        song =>
            song.type === "youtube" &&
            song.youtubeId
    );

}


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


    if (
        song.type !== "youtube" ||
        !song.youtubeId
    ) {

        nextAvailableSong();

        return;

    }


    currentIndex =
        index;


    skipAttempts = 0;


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
   NEXT SONG
===================================================== */

function nextSong() {

    const available =
        songs.filter(
            song =>
                song.type === "youtube" &&
                song.youtubeId &&
                song.id !==
                songs[currentIndex].id
        );


    if (
        available.length === 0
    ) {

        title.textContent =
            "No other songs available";

        artist.textContent =
            "Add more YouTube video IDs";

        return;

    }


    let nextIndex;


    /* -----------------------------------------
       SHUFFLE MODE
    ----------------------------------------- */

    if (shuffle) {

        const randomSong =
            available[
                Math.floor(
                    Math.random() *
                    available.length
                )
            ];


        nextIndex =
            songs.findIndex(
                song =>
                    song.id ===
                    randomSong.id
            );

    }


    /* -----------------------------------------
       NORMAL MODE
    ----------------------------------------- */

    else {

        nextIndex =
            currentIndex + 1;


        if (
            nextIndex >=
            songs.length
        ) {

            nextIndex = 0;

        }


        /*
           Find the next song that has
           a YouTube ID.
        */

        let checked = 0;


        while (
            (
                !songs[nextIndex].youtubeId ||
                songs[nextIndex].type !==
                "youtube"
            ) &&
            checked <
            songs.length
        ) {

            nextIndex++;

            if (
                nextIndex >=
                songs.length
            ) {

                nextIndex = 0;

            }

            checked++;

        }

    }


    playSong(nextIndex);

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


    if (!song) {
        return;
    }


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
   HANDLE YOUTUBE ERRORS
===================================================== */

function onPlayerError(event) {

    console.log(
        "YouTube error:",
        event.data
    );


    /*
       Error codes:

       2   = Invalid video ID
       5   = HTML5 player error
       100 = Video removed/private
       101 = Embedding not allowed
       150 = Embedding not allowed
       153 = Client/player identification issue
    */


    const errorCodes = [
        2,
        5,
        100,
        101,
        150,
        153
    ];


    if (
        errorCodes.includes(
            event.data
        )
    ) {

        skipAttempts++;


        title.textContent =
            "Song unavailable";


        artist.textContent =
            "Skipping to another song...";


        /*
           Prevent infinite loops if
           every song is unavailable.
        */

        if (
            skipAttempts >
            songs.length
        ) {

            title.textContent =
                "No playable YouTube songs";


            artist.textContent =
                "Check your YouTube video IDs";


            return;

        }


        setTimeout(
            function () {

                nextAvailableSong();

            },
            1200
        );

    }

}


/* =====================================================
   FIND NEXT AVAILABLE SONG
===================================================== */

function nextAvailableSong() {

    const available =
        songs.filter(
            song =>
                song.type === "youtube" &&
                song.youtubeId &&
                song.id !==
                songs[currentIndex].id
        );


    if (
        available.length === 0
    ) {

        title.textContent =
            "No playable songs";


        artist.textContent =
            "Add another YouTube video ID";


        return;

    }


    nextSong();

}


/* =====================================================
   PLAY / PAUSE
===================================================== */

if (playBtn) {

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

}


/* =====================================================
   NEXT BUTTON
===================================================== */

if (nextBtn) {

    nextBtn.addEventListener(
        "click",
        function () {

            nextSong();

        }
    );

}


/* =====================================================
   PREVIOUS BUTTON
===================================================== */

if (previousBtn) {

    previousBtn.addEventListener(
        "click",
        function () {

            previousSong();

        }
    );

}


/* =====================================================
   SHUFFLE BUTTON
===================================================== */

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


            shuffleBtn.title =
                shuffle
                    ? "Shuffle ON"
                    : "Shuffle OFF";

        }
    );

}


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
       Automatically play another
       song when current song ends.
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

    if (!songList) {
        return;
    }


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

if (search) {

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

                            String(
                                song.year
                            ).includes(query)

                        );

                    }
                );


            displaySongs(
                filtered
            );

        }
    );

}


/* =====================================================
   INITIAL DISPLAY
===================================================== */

displaySongs(
    songs
);
