/* =====================================================
   90s KIDS VIBE
   MP3 MUSIC PLAYER
===================================================== */

const songs = [

    {
        title: "Alan Walker - Faded",
        artist: "Alan Walker",
        file: "Alan_Walker_-_Faded.mp3"
    },

    {
        title: "Edward Maya feat. Vika Jigulina - Stereo Love",
        artist: "Edward Maya",
        file: "Edward_Maya_feat._Vika_Jigulina_-_Stereo_Love_(Official_Video).mp3"
    },

    {
        title: "Eminem - Not Afraid",
        artist: "Eminem",
        file: "Eminem_-_Not_Afraid.mp3"
    },

    {
        title: "Kygo & Ava Max - Whatever",
        artist: "Kygo & Ava Max",
        file: "Kygo,_Ava_Max_-_Whatever_(Official_Video).mp3"
    },

    {
        title: "Lost Frequencies - Are You With Me",
        artist: "Lost Frequencies",
        file: "Lost_Frequencies_-_Are_You_With_Me_(Official_Music_Video).mp3"
    },

    {
        title: "Myles Smith - Stargazing",
        artist: "Myles Smith",
        file: "Myles_Smith_-_Stargazing_(Lyric_Video).mp3"
    },

    {
        title: "Shawn Mendes - Treat You Better",
        artist: "Shawn Mendes",
        file: "Shawn_Mendes_-_Treat_You_Better.mp3"
    },

    {
        title: "Sia - Chandelier",
        artist: "Sia",
        file: "Sia_-_Chandelier_(Official_Video).mp3"
    },

    {
        title: "Stand My Ground",
        artist: "90s Kids Vibe",
        file: "Stand_My_Ground.mp3"
    },

    {
        title: "The Chainsmokers - Don't Let Me Down",
        artist: "The Chainsmokers",
        file: "The_Chainsmokers_-_Don't_Let_Me_Down_(Official_Video)_ft._Daya.mp3"
    }

];


/* =====================================================
   PLAYER
===================================================== */

const audio =
    document.getElementById("audio");

const playBtn =
    document.getElementById("playBtn");

const nextBtn =
    document.getElementById("nextBtn");

const previousBtn =
    document.getElementById("previousBtn");

const shuffleBtn =
    document.getElementById("shuffleBtn");

const repeatBtn =
    document.getElementById("repeatBtn");

const progress =
    document.getElementById("progress");

const volume =
    document.getElementById("volume");

const title =
    document.getElementById("songTitle");

const artist =
    document.getElementById("songArtist");

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const songList =
    document.getElementById("songList");

const search =
    document.getElementById("search");

const status =
    document.getElementById("status");


/* =====================================================
   VARIABLES
===================================================== */

let currentIndex = 0;

let shuffle = true;

let repeat = false;


/* =====================================================
   FORMAT TIME
===================================================== */

function formatTime(seconds) {

    if (!isFinite(seconds)) {
        return "0:00";
    }

    const minutes =
        Math.floor(seconds / 60);

    const secs =
        Math.floor(seconds % 60);

    return (
        minutes +
        ":" +
        String(secs).padStart(2, "0")
    );

}


/* =====================================================
   LOAD SONG
===================================================== */

function loadSong(index, autoplay = false) {

    if (
        index < 0 ||
        index >= songs.length
    ) {
        return;
    }

    currentIndex = index;

    const song =
        songs[currentIndex];

    title.textContent =
        song.title;

    artist.textContent =
        song.artist;

    audio.src =
        "music/" +
        encodeURIComponent(song.file);

    audio.load();

    progress.value = 0;

    currentTime.textContent =
        "0:00";

    duration.textContent =
        "0:00";

    if (autoplay) {

        audio.play()
            .then(() => {

                playBtn.textContent =
                    "⏸";

            })
            .catch(() => {

                playBtn.textContent =
                    "▶";

            });

    }

    highlightSong();

}


/* =====================================================
   PLAY / PAUSE
===================================================== */

playBtn.addEventListener(
    "click",
    function () {

        if (!audio.src) {

            loadSong(
                currentIndex,
                false
            );

        }

        if (audio.paused) {

            audio.play()
                .then(() => {

                    playBtn.textContent =
                        "⏸";

                })
                .catch(() => {

                    alert(
                        "The song could not be played. Check that the MP3 file exists in the music folder."
                    );

                });

        }

        else {

            audio.pause();

            playBtn.textContent =
                "▶";

        }

    }
);


/* =====================================================
   NEXT SONG
===================================================== */

function nextSong() {

    let nextIndex;

    if (shuffle) {

        if (songs.length <= 1) {

            nextIndex =
                currentIndex;

        }

        else {

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

        }

    }

    else {

        nextIndex =
            currentIndex + 1;

        if (
            nextIndex >=
            songs.length
        ) {

            nextIndex = 0;

        }

    }

    loadSong(
        nextIndex,
        true
    );

}


/* =====================================================
   PREVIOUS SONG
===================================================== */

function previousSong() {

    let previousIndex =
        currentIndex - 1;

    if (
        previousIndex < 0
    ) {

        previousIndex =
            songs.length - 1;

    }

    loadSong(
        previousIndex,
        true
    );

}


/* =====================================================
   BUTTONS
===================================================== */

nextBtn.addEventListener(
    "click",
    nextSong
);

previousBtn.addEventListener(
    "click",
    previousSong
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
            shuffle ? "1" : "0.45";

    }
);


/* =====================================================
   REPEAT
===================================================== */

repeatBtn.addEventListener(
    "click",
    function () {

        repeat =
            !repeat;

        repeatBtn.style.opacity =
            repeat ? "1" : "0.45";

    }
);


/* =====================================================
   SONG FINISHED
===================================================== */

audio.addEventListener(
    "ended",
    function () {

        if (repeat) {

            audio.currentTime = 0;

            audio.play();

        }

        else {

            nextSong();

        }

    }
);


/* =====================================================
   PROGRESS
===================================================== */

audio.addEventListener(
    "loadedmetadata",
    function () {

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);


audio.addEventListener(
    "timeupdate",
    function () {

        if (
            audio.duration
        ) {

            progress.value =
                (
                    audio.currentTime /
                    audio.duration
                ) * 100;

        }

        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

    }
);


progress.addEventListener(
    "input",
    function () {

        if (
            audio.duration
        ) {

            audio.currentTime =
                (
                    progress.value /
                    100
                ) *
                audio.duration;

        }

    }
);


/* =====================================================
   VOLUME
===================================================== */

volume.addEventListener(
    "input",
    function () {

        audio.volume =
            volume.value;

    }
);


/* =====================================================
   PLAY BUTTON STATE
===================================================== */

audio.addEventListener(
    "play",
    function () {

        playBtn.textContent =
            "⏸";

    }
);

audio.addEventListener(
    "pause",
    function () {

        playBtn.textContent =
            "▶";

    }
);


/* =====================================================
   DISPLAY SONGS
===================================================== */

function displaySongs(list) {

    songList.innerHTML = "";

    list.forEach(
        function (song) {

            const originalIndex =
                songs.indexOf(song);

            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "song";

            item.innerHTML = `

                <div class="song-number">
                    ${originalIndex + 1}
                </div>

                <div class="song-info">

                    <div class="song-name">
                        ${song.title}
                    </div>

                    <div class="song-file">
                        ${song.artist}
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

                        loadSong(
                            originalIndex,
                            true
                        );

                    }
                );

            songList.appendChild(
                item
            );

        }
    );

    status.style.display =
        list.length
            ? "none"
            : "block";

}


/* =====================================================
   HIGHLIGHT CURRENT SONG
===================================================== */

function highlightSong() {

    const items =
        document.querySelectorAll(
            ".song"
        );

    items.forEach(
        function (item) {

            item.style.border =
                "none";

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

                    );

                }
            );

        displaySongs(
            filtered
        );

    }
);


/* =====================================================
   INITIALIZE
===================================================== */

displaySongs(
    songs
);

loadSong(
    0,
    false
);

status.textContent =
    "";

status.style.display =
    "none";
