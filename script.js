* {
    box-sizing: border-box;
}


body {

    margin: 0;

    background: #0d0d0d;

    color: white;

    font-family:
        Arial,
        Helvetica,
        sans-serif;

    padding-bottom: 190px;

}


/* HEADER */

header {

    height: 65px;

    background: #151515;

    display: flex;

    align-items: center;

    justify-content: space-between;

    padding: 0 20px;

    position: sticky;

    top: 0;

    z-index: 50;

    border-bottom:
        1px solid #292929;

}


.logo {

    font-size: 21px;

    font-weight: bold;

}


#menuBtn {

    background: none;

    border: none;

    color: white;

    font-size: 24px;

}


/* MAIN */

main {

    max-width: 900px;

    margin: auto;

    padding: 20px;

}


h2 {

    margin-top: 28px;

    font-size: 20px;

}


/* SEARCH */

.searchBox {

    margin-bottom: 20px;

}


#searchInput {

    width: 100%;

    padding: 15px 18px;

    border-radius: 30px;

    border: 1px solid #333;

    background: #1c1c1c;

    color: white;

    font-size: 16px;

    outline: none;

}


#searchInput:focus {

    border-color: #777;

}


/* PLAYLISTS */

.playlistContainer {

    display: flex;

    gap: 10px;

    overflow-x: auto;

    padding-bottom: 8px;

}


.playlistBtn {

    background: #222;

    color: white;

    border: none;

    border-radius: 25px;

    padding: 12px 18px;

    white-space: nowrap;

    cursor: pointer;

}


.playlistBtn:hover {

    background: #333;

}


/* SONG */

.song {

    display: flex;

    align-items: center;

    gap: 12px;

    padding: 10px;

    border-radius: 10px;

    margin-bottom: 5px;

}


.song:hover {

    background: #1b1b1b;

}


.songCover {

    width: 55px;

    height: 55px;

    border-radius: 7px;

    object-fit: cover;

}


.songInfo {

    flex: 1;

    min-width: 0;

}


.songTitle {

    font-weight: bold;

    white-space: nowrap;

    overflow: hidden;

    text-overflow: ellipsis;

}


.songArtist {

    color: #999;

    font-size: 14px;

    margin-top: 4px;

}


.songSource {

    display: inline-block;

    margin-top: 4px;

    font-size: 11px;

    color: #aaa;

}


.songButtons {

    display: flex;

    gap: 5px;

}


.songButtons button {

    border: none;

    background: #252525;

    color: white;

    border-radius: 50%;

    width: 36px;

    height: 36px;

    cursor: pointer;

}


.songButtons button:hover {

    background: #3a3a3a;

}


/* YOUTUBE */

.youtubeContainer {

    display: none;

    position: fixed;

    top: 75px;

    left: 50%;

    transform: translateX(-50%);

    width: 90%;

    max-width: 700px;

    background: #111;

    border: 1px solid #333;

    border-radius: 12px;

    overflow: hidden;

    z-index: 100;

}


#youtubePlayer {

    width: 100%;

    aspect-ratio: 16 / 9;

}


.closeYoutube {

    width: 100%;

    padding: 12px;

    border: none;

    background: #222;

    color: white;

    cursor: pointer;

}


/* PLAYER */

.player {

    position: fixed;

    bottom: 0;

    left: 0;

    right: 0;

    background: #171717;

    border-top: 1px solid #333;

    padding: 12px 20px;

    z-index: 80;

    box-shadow:
        0 -5px 20px rgba(0,0,0,.5);

}


.playerInfo {

    max-width: 700px;

    margin: auto;

    display: flex;

    align-items: center;

    gap: 12px;

}


#playerCover {

    width: 55px;

    height: 55px;

    object-fit: cover;

    border-radius: 7px;

}


.playerInfo h3 {

    margin: 0;

    font-size: 16px;

}


.playerInfo p {

    margin: 4px 0;

    color: #999;

    font-size: 13px;

}


#playerType {

    font-size: 11px;

    color: #777;

}


/* PROGRESS */

#progress {

    display: block;

    width: 100%;

    max-width: 700px;

    margin: 10px auto 0;

}


.time {

    max-width: 700px;

    margin: auto;

    display: flex;

    justify-content: space-between;

    font-size: 11px;

    color: #999;

}


/* CONTROLS */

.controls {

    display: flex;

    justify-content: center;

    align-items: center;

    gap: 15px;

    margin-top: 8px;

}


.controls button {

    background: none;

    border: none;

    color: white;

    font-size: 20px;

    cursor: pointer;

}


.playButton {

    width: 48px;

    height: 48px;

    border-radius: 50%;

    background: white !important;

    color: black !important;

    font-size: 22px !important;

}


/* VOLUME */

.volume {

    display: flex;

    align-items: center;

    justify-content: center;

    gap: 8px;

    margin-top: 5px;

}


#volume {

    width: 100px;

}


/* MOBILE */

@media (max-width: 600px) {

    main {

        padding: 15px;

    }


    .songButtons button {

        width: 33px;

        height: 33px;

    }


    .player {

        padding: 9px;

    }


    .controls {

        gap: 9px;

    }


    .youtubeContainer {

        width: 96%;

    }

}
