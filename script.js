/* =====================================================
   90s KIDS VIBE
   MP3 + YOUTUBE MUSIC PLAYER
===================================================== */


/* =====================================================
   YOUR SONG DATABASE

   type: "mp3"
   OR
   type: "youtube"
===================================================== */


const songs = [

    /* YOUR UPLOADED MP3 */

    {
        id: 1,

        title: "My MP3 Song",

        artist: "My Artist",

        playlist: "90s",

        type: "mp3",

        file: "music/song1.mp3",

        cover: "covers/song1.jpg"
    },


    /* YOUTUBE SONG */

    {
        id: 2,

        title: "YouTube Song",

        artist: "YouTube Artist",

        playlist: "90s",

        type: "youtube",

        youtubeId: "VIDEO_ID_HERE",

        cover: "https://img.youtube.com/vi/VIDEO_ID_HERE/hqdefault.jpg"
    },


    /* ANOTHER MP3 */

    {
        id: 3,

        title: "Another MP3",

        artist: "My Artist",

        playlist: "Romantic",

        type: "mp3",

        file: "music/song2.mp3",

        cover: "covers/song2.jpg"
    },


    /* ANOTHER YOUTUBE SONG */

    {
        id: 4,

        title: "Another YouTube Song",

        artist: "Artist",

        playlist: "Romantic",

        type: "youtube",

        youtubeId: "VIDEO_ID_HERE",

        cover: "https://img.youtube.com/vi/VIDEO_ID_HERE/hqdefault.jpg"
    }

];



/* =====================================================
   VARIABLES
===================================================== */


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


const playlistTitle =
    document.getElementById("playlistTitle");


const youtubeContainer =
    document.getElementById("youtubeContainer");


const closeYoutube =
    document.getElementById("closeYoutube");



let currentIndex = 0;


let currentPlaylist =
    [...songs];


let shuffle = false;


let repeat = false;


let youtubePlayer = null;


let youtubeReady = false;



/* =====================================================
   YOUTUBE API
===================================================== */


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
                            onYoutubeStateChange

                    }

                }
            );

    };



/* =====================================================
   DISPLAY SONGS
===================================================== */


function showSongs(list = currentPlaylist) {

    songList.innerHTML = "";


    if (list.length === 0) {

        songList.innerHTML =
            "<p>No songs found.</p>";

        return;

    }


    list.forEach(song => {

        const div =
            document.createElement("div");


        div.className =
            "song";


        const sourceText =
            song.type === "youtube"
                ? "▶ YouTube"
                : "🎵 MP3";


        const downloadButton =
            song.type === "mp3"
                ? `
                    <button
                        onclick="downloadSong(${song.id})">
                        ⬇
                    </button>
                  `
                : "";


        div.innerHTML = `

            <img
                class="songCover"
                src="${song.cover}"
                onerror="
                    this.src='https://placehold.co/100x100'
                "
            >


            <div class="songInfo">

                <div class="songTitle">
                    ${song.title}
                </div>


                <div class="songArtist">
                    ${song.artist}
                </div>


                <span class="songSource">
                    ${sourceText}
                </span>

            </div>


            <div class="songButtons">

                <button
                    onclick="
                        playSongById(${song.id})
                    ">
                    ▶
                </button>


                ${downloadButton}


                <button
                    onclick="
                        favoriteSong(${song.id})
                    ">
                    ⭐
                </button>

            </div>

        `;


        songList.appendChild(div);

    });

}



/* =====================================================
   PLAY SONG
===================================================== */


function playSongById(id) {

    const index =
        songs.findIndex(
            song => song.id === id
        );


    if (index === -1) return;


    currentIndex = index;


    loadSong();

}



/* =====================================================
   LOAD SONG
===================================================== */


function loadSong() {

    const song =
        songs[currentIndex];


    if (!song) return;


    playerTitle.textContent =
        song.title;


    playerArtist.textContent =
        song.artist;


    playerCover.src =
        song.cover;


    progress.value = 0;


    currentTime.textContent =
        "0:00";


    duration.textContent =
        "0:00";


    /* MP3 */

    if (song.type === "mp3") {

        youtubeContainer.style.display =
            "none";


        if (youtubePlayer &&
            youtubeReady) {

            youtubePlayer.stopVideo();

        }


        audio.src =
            song.file;


        audio.volume =
            volume.value;


        audio.play()
            .then(() => {

                playBtn.textContent =
                    "⏸";

            })
            .catch(() => {

                playBtn.textContent =
                    "▶";

            });


        playerType.textContent =
            "🎵 MP3";

    }


    /* YOUTUBE */

    else if (
        song.type === "youtube"
    ) {

        audio.pause();


        audio.src = "";


        youtubeContainer.style.display =
            "block";


        playerType.textContent =
            "▶ YouTube";


        if (
            youtubePlayer &&
            youtubeReady
        ) {

            youtubePlayer.loadVideoById(
                song.youtubeId
            );

        }

    }

}



/* =====================================================
   PLAY / PAUSE
===================================================== */


playBtn.addEventListener(
    "click",
    function () {

        const song =
            songs[currentIndex];


        if (!song) return;


        /* MP3 */

        if (song.type === "mp3") {

            if (audio.paused) {

                audio.play();

                playBtn.textContent =
                    "⏸";

            } else {

                audio.pause();

                playBtn.textContent =
                    "▶";

            }

        }


        /* YOUTUBE */

        else {

            if (
                youtubePlayer &&
                youtubeReady
            ) {

                const state =
                    youtubePlayer
                    .getPlayerState();


                if (
                    state ===
                    YT.PlayerState.PLAYING
                ) {

                    youtubePlayer.pauseVideo();

                    playBtn.textContent =
                        "▶";

                } else {

                    youtubePlayer.playVideo();

                    playBtn.textContent =
                        "⏸";

                }

            }

        }

    }
);



/* =====================================================
   NEXT SONG
===================================================== */


nextBtn.addEventListener(
    "click",
    nextSong
);


function nextSong() {

    if (shuffle) {

        currentIndex =
            Math.floor(
                Math.random() *
                songs.length
            );

    }

    else {

        currentIndex++;

        if (
            currentIndex >=
            songs.length
        ) {

            currentIndex = 0;

        }

    }


    loadSong();

}



/* =====================================================
   PREVIOUS
===================================================== */


previousBtn.addEventListener(
    "click",
    function () {

        currentIndex--;


        if (
            currentIndex < 0
        ) {

            currentIndex =
                songs.length - 1;

        }


        loadSong();

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
   REPEAT
===================================================== */


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



/* =====================================================
   MP3 TIME
===================================================== */


audio.addEventListener(
    "timeupdate",
    function () {

        if (
            !audio.duration
        ) return;


        progress.value =
            (
                audio.currentTime /
                audio.duration
            ) * 100;


        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

    }
);


audio.addEventListener(
    "loadedmetadata",
    function () {

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);



/* =====================================================
   MP3 PROGRESS
===================================================== */


progress.addEventListener(
    "input",
    function () {

        const song =
            songs[currentIndex];


        if (
            song &&
            song.type === "mp3" &&
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


        if (
            youtubePlayer &&
            youtubeReady
        ) {

            youtubePlayer.setVolume(
                volume.value * 100
            );

        }

    }
);



/* =====================================================
   MP3 ENDED
===================================================== */


audio.addEventListener(
    "ended",
    function () {

        if (repeat) {

            audio.currentTime =
                0;


            audio.play();

        }

        else {

            nextSong();

        }

    }
);



/* =====================================================
   YOUTUBE ENDED
===================================================== */


function onYoutubeStateChange(event) {

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



/* =====================================================
   SEARCH
===================================================== */


searchInput.addEventListener(
    "input",
    function () {

        const search =
            searchInput.value
            .toLowerCase()
            .trim();


        const filtered =
            currentPlaylist.filter(
                song =>

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



/* =====================================================
   PLAYLISTS
===================================================== */


document
    .querySelectorAll(
        ".playlistBtn"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                const playlist =
                    button.dataset.playlist;


                if (
                    playlist ===
                    "All"
                ) {

                    currentPlaylist =
                        [...songs];


                    playlistTitle.textContent =
                        "All Songs";

                }


                else if (
                    playlist ===
                    "Favorites"
                ) {

                    const favorites =
                        JSON.parse(
                            localStorage.getItem(
                                "favorites"
                            ) || "[]"
                        );


                    currentPlaylist =
                        songs.filter(
                            song =>
                                favorites.includes(
                                    song.id
                                )
                        );


                    playlistTitle.textContent =
                        "Favorites";

                }


                else {

                    currentPlaylist =
                        songs.filter(
                            song =>
                                song.playlist ===
                                playlist
                        );


                    playlistTitle.textContent =
                        playlist;

                }


                showSongs();

            }
        );

    });



/* =====================================================
   FAVORITES
===================================================== */


function favoriteSong(id) {

    let favorites =
        JSON.parse(
            localStorage.getItem(
                "favorites"
            ) || "[]"
        );


    if (
        favorites.includes(id)
    ) {

        favorites =
            favorites.filter(
                item =>
                    item !== id
            );

    }

    else {

        favorites.push(id);

    }


    localStorage.setItem(
        "favorites",
        JSON.stringify(
            favorites
        )
    );


    alert(
        "Favorites updated"
    );

}



/* =====================================================
   DOWNLOAD MP3
===================================================== */


async function downloadSong(id) {

    const song =
        songs.find(
            song =>
                song.id === id
        );


    if (
        !song ||
        song.type !== "mp3"
    ) return;


    try {

        const response =
            await fetch(
                song.file
            );


        if (!response.ok) {

            throw new Error(
                "Download failed"
            );

        }


        const blob =
            await response.blob();


        const url =
            URL.createObjectURL(
                blob
            );


        const link =
            document.createElement(
                "a"
            );


        link.href =
            url;


        link.download =
            song.title + ".mp3";


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        URL.revokeObjectURL(
            url
        );

    }


    catch (error) {

        alert(
            "Unable to download this MP3."
        );


        console.error(error);

    }

}



/* =====================================================
   TIME FORMAT
===================================================== */


function formatTime(seconds) {

    if (
        isNaN(seconds)
    ) {

        return "0:00";

    }


    const minutes =
        Math.floor(
            seconds / 60
        );


    const secs =
        Math.floor(
            seconds % 60
        );


    return (
        minutes +
        ":" +
        secs
            .toString()
            .padStart(
                2,
                "0"
            )
    );

}



/* =====================================================
   CLOSE YOUTUBE
===================================================== */


closeYoutube.addEventListener(
    "click",
    function () {

        youtubeContainer.style.display =
            "none";


        if (
            youtubePlayer &&
            youtubeReady
        ) {

            youtubePlayer.stopVideo();

        }

    }
);



/* =====================================================
   START
===================================================== */


showSongs();


if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        function () {

            navigator.serviceWorker.register(
                "./sw.js"
            );

        }
    );

}
