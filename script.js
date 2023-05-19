console.log("Spotify");

let songindex = 1;

let masterplay = document.getElementById("masterplay");
let mastername = document.getElementById("mastername");
let progressbar = document.getElementById("progressbar");
let audielement = new Audio(`songs/${songindex}.mp3`);
let gif = document.getElementById("gif");
let songitem = Array.from(document.getElementsByClassName("songlist2"));

let songs = [
  {
    songname: "Music",
    filepath: "songs/1.mp3",
    coverpath: "cover/1.jpg",
    timestamp: "03:26",
  },
  {
    songname: "Healer",
    filepath: "songs/2.mp3",
    coverpath: "cover/2.jpg",
    timestamp: "01:12",
  },
  {
    songname: "Revive",
    filepath: "songs/3.mp3",
    coverpath: "cover/3.jpg",
    timestamp: "19:27",
  },
  {
    songname: "Comeback",
    filepath: "songs/4.mp3",
    coverpath: "cover/4.jpg",
    timestamp: "02:27",
  },
  {
    songname: "Pain",
    filepath: "songs/5.mp3",
    coverpath: "cover/5.jpg",
    timestamp: "12:46",
  },
  {
    songname: "Work",
    filepath: "songs/6.mp3",
    coverpath: "cover/6.jpg",
    timestamp: "02:37",
  },
];

songitem.forEach((element, i) => {
  element.getElementsByTagName("img")[0].src = songs[i].coverpath;
  element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
  element.getElementsByClassName("timestamp2")[0].innerText =
    songs[i].timestamp;
});

let container = document.getElementsByClassName("fa-regular");

masterplay.addEventListener("click", () => {
  if (audielement.paused || audielement.currentTime <= 0) {
    audielement.play();
    masterplay.classList.remove("fa-play-circle");
    masterplay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
    container[songindex - 1].classList.remove("fa-play-circle");
    container[songindex - 1].classList.add("fa-pause-circle");
  } else {
    audielement.pause();
    masterplay.classList.add("fa-play-circle");
    masterplay.classList.remove("fa-pause-circle");
    gif.style.opacity = 0;
    container[songindex - 1].classList.add("fa-play-circle");
    container[songindex - 1].classList.remove("fa-pause-circle");
  }
});

audielement.addEventListener("timeupdate", () => {
  progress = parseInt((audielement.currentTime / audielement.duration) * 100);
  progressbar.value = progress;
});

progressbar.addEventListener("click", () => {
  audielement.currentTime = (progressbar.value * audielement.duration) / 100;
});

const makeplay = () => {
  Array.from(document.getElementsByClassName("songplaybutton")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songplaybutton")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeplay();
      songindex = parseInt(e.target.id);
      console.log(songindex);
      audielement.src = `songs/${songindex}.mp3`;
      mastername.innerText = songs[songindex - 1].songname;
      if (audielement.paused) {
        audielement.play();
        console.log(audielement);
        gif.style.opacity = 1;
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle");
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
      } else {
        audielement.pause();
        masterplay.classList.add("fa-play-circle");
        masterplay.classList.remove("fa-pause-circle");
        gif.style.opacity = 0;
        e.target.classList.add("fa-play-circle");
        e.target.classList.remove("fa-pause-circle");
      }
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songindex > 9) {
    songindex = 0;
  } else {
    songindex += 1;
  }
  mastername.innerText = songs[songindex - 1].songname;
  audielement.src = `songs/${songindex}.mp3`;
  audielement.currentTime = 0;
  audielement.play();
  gif.style.opacity = 1;

  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
document.getElementById("previous").addEventListener("click", () => {
  if (songindex <= 0) {
    songindex = 0;
  } else {
    songindex -= 1;
  }
  mastername.innerText = songs[songindex - 1].songname;
  audielement.src = `songs/${songindex}.mp3`;
  audielement.currentTime = 0;
  audielement.play();
  gif.style.opacity = 1;

  masterplay.classList.remove("fa-play-circle");
  masterplay.classList.add("fa-pause-circle");
});
