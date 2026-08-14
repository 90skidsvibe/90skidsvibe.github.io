/* =========================================
   MUSIC DATABASE
========================================= */

const songs = [

    {
        id: 1,

        title: "Your Song 1",

        artist: "Your Artist",

        album: "My Album",

        playlist: "90s",

        file: "music/song1.mp3",

        cover: "covers/song1.jpg"
    },


    {
        id: 2,

        title: "Your Song 2",

        artist: "Your Artist",

        album: "My Album",

        playlist: "Romantic",

        file: "music/song2.mp3",

        cover: "covers/song2.jpg"
    },


    {
        id: 3,

        title: "Your Song 3",

        artist: "Your Artist",

        album: "My Album",

        playlist: "90s",

        file: "music/song3.mp3",

        cover: "covers/song3.jpg"
    }

];


/* =========================================
   PLAYER
========================================= */

const audio = document.getElementById("audio");

const playBtn = document.getElementById("playBtn");

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

const currentTime =
    document.getElementById("currentTime");

const duration =
    document.getElementById("duration");

const songList =
    document.getElementById("songList");

const searchInput =
    document.getElementById("searchInput");

const playlistTitle =
    document.getElementById("playlistTitle");


let currentIndex = 0;

let currentPlaylist = [...songs];

let shuffle = false;

let repeat = false;


/* =========================================
   SHOW SONGS
========================================= */

function showSongs(list = currentPlaylist) {

    songList.innerHTML = "";


    if (list.length === 0) {

        songList.innerHTML =
            "<p>No songs found.</p>";

        return;
    }


    list.forEach((song, index) => {

        const div =
            document.createElement("div");

        div.className = "song";


        div.innerHTML = `

            <img
                class="songCover"
                src="${song.cover}"
                onerror="this.src='https://placehold.co/100x100'"
            >

            <div class="songInfo">

                <div class="songTitle">
                    ${song.title}
                </div>

                <div class="songArtist">
                    ${song.artist}
                </div>

            </div>


            <div class="songButtons">

                <button
                    onclick="playSongById(${song.id})"
                >
                    ▶
                </button>


                <button
                    onclick="downloadSong(${song.id})"
                >
                    ⬇
                </button>


                <button
                    onclick="favoriteSong(${song.id})"
                >
                    ⭐
                </button>

            </div>

        `;


        songList.appendChild(div);

    });

}


/* =========================================
   PLAY SONG
========================================= */

function playSongById(id) {

    const index =
        songs.findIndex(song => song.id === id);

    if (index === -1) return;

    currentIndex = index;

    loadSong();

    audio.play();

}


/* =========================================
   LOAD SONG
========================================= */

function loadSong() {

    const song = songs[currentIndex];

    if (!song) return;


    audio.src = song.file;

    playerTitle.textContent =
        song.title;

    playerArtist.textContent =
        song.artist;

    playerCover.src =
        song.cover;


    audio.load();

    playBtn.textContent = "▶";

}


/* =========================================
   PLAY / PAUSE
========================================= */

playBtn.addEventListener(
    "click",
    function () {

        if (!audio.src) {

            loadSong();

        }


        if (audio.paused) {

            audio.play();

            playBtn.textContent = "⏸";

        } else {

            audio.pause();

            playBtn.textContent = "▶";

        }

    }
);


/* =========================================
   NEXT
========================================= */

nextBtn.addEventListener(
    "click",
    nextSong
);


function nextSong() {

    if (shuffle) {

        currentIndex =
            Math.floor(
                Math.random() * songs.length
            );

    } else {

        currentIndex++;

        if (currentIndex >= songs.length) {

            currentIndex = 0;

        }

    }


    loadSong();

    audio.play();

}


/* =========================================
   PREVIOUS
========================================= */

previousBtn.addEventListener(
    "click",
    function () {

        currentIndex--;

        if (currentIndex < 0) {

            currentIndex =
                songs.length - 1;

        }


        loadSong();

        audio.play();

    }
);


/* =========================================
   SHUFFLE
========================================= */

shuffleBtn.addEventListener(
    "click",
    function () {

        shuffle = !shuffle;

        shuffleBtn.style.opacity =
            shuffle ? "1" : "0.5";

    }
);


/* =========================================
   REPEAT
========================================= */

repeatBtn.addEventListener(
    "click",
    function () {

        repeat = !repeat;

        repeatBtn.style.opacity =
            repeat ? "1" : "0.5";

    }
);


/* =========================================
   SONG ENDED
========================================= */

audio.addEventListener(
    "ended",
    function () {

        if (repeat) {

            audio.currentTime = 0;

            audio.play();

        } else {

            nextSong();

        }

    }
);


/* =========================================
   PROGRESS
========================================= */

audio.addEventListener(
    "timeupdate",
    function () {

        if (!audio.duration) return;


        progress.value =
            (audio.currentTime /
             audio.duration) * 100;


        currentTime.textContent =
            formatTime(audio.currentTime);

    }
);


audio.addEventListener(
    "loadedmetadata",
    function () {

        duration.textContent =
            formatTime(audio.duration);

    }
);


progress.addEventListener(
    "input",
    function () {

        if (!audio.duration) return;


        audio.currentTime =
            (progress.value / 100) *
            audio.duration;

    }
);


/* =========================================
   VOLUME
========================================= */

volume.addEventListener(
    "input",
    function () {

        audio.volume =
            volume.value;

    }
);


/* =========================================
   TIME FORMAT
========================================= */

function formatTime(seconds) {

    if (isNaN(seconds)) {

        return "0:00";

    }


    const minutes =
        Math.floor(seconds / 60);


    const secs =
        Math.floor(seconds % 60);


    return (
        minutes +
        ":" +
        secs.toString().padStart(2, "0")
    );

}


/* =========================================
   SEARCH
========================================= */

searchInput.addEventListener(
    "input",
    function () {

        const search =
            searchInput.value
            .toLowerCase()
            .trim();


        const filtered =
            currentPlaylist.filter(song =>

                song.title
                .toLowerCase()
                .includes(search)

                ||

                song.artist
                .toLowerCase()
                .includes(search)

            );


        showSongs(filtered);

    }
);


/* =========================================
   PLAYLIST BUTTONS
========================================= */

document
    .querySelectorAll(".playlistBtn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const playlist =
                    button.dataset.playlist;


                if (playlist === "All") {

                    currentPlaylist =
                        [...songs];

                    playlistTitle.textContent =
                        "All Songs";

                }

                else if (playlist === "Favorites") {

                    const favorites =
                        JSON.parse(
                            localStorage.getItem(
                                "favorites"
                            ) || "[]"
                        );


                    currentPlaylist =
                        songs.filter(song =>
                            favorites.includes(song.id)
                        );


                    playlistTitle.textContent =
                        "Favorites";

                }

                else {

                    currentPlaylist =
                        songs.filter(song =>
                            song.playlist === playlist
                        );


                    playlistTitle.textContent =
                        playlist;

                }


                showSongs();

            }
        );

    });


/* =========================================
   FAVORITES
========================================= */

function favoriteSong(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem(
                "favorites"
            ) || "[]"
        );


    if (favorites.includes(id)) {

        favorites =
            favorites.filter(
                item => item !== id
            );

    } else {

        favorites.push(id);

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );


    alert("Favorites updated");

}


/* =========================================
   DOWNLOAD SONG
========================================= */

async function downloadSong(id) {

    const song =
        songs.find(
            song => song.id === id
        );


    if (!song) return;


    try {

        const response =
            await fetch(song.file);


        if (!response.ok) {

            throw new Error(
                "Download failed"
            );

        }


        const blob =
            await response.blob();


        const url =
            URL.createObjectURL(blob);


        const link =
            document.createElement("a");


        link.href = url;

        link.download =
            song.title + ".mp3";


        document.body.appendChild(link);

        link.click();

        link.remove();


        URL.revokeObjectURL(url);


    }

    catch (error) {

        alert(
            "Unable to download this song."
        );

        console.error(error);

    }

}


/* =========================================
   START
========================================= */

showSongs();

loadSong();
