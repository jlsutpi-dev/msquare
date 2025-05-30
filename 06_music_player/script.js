const playlistContainer =
  document.getElementsByClassName("playlistContainer")[0];

const audioTag = document.getElementsByClassName("audioTag")[0];

//   const
const mp3 = [
  {
    trackId: "music/track1.mp3",
    title: "No1 . ringtone",
  },
  {
    trackId: "music/track2.mp3",
    title: "No2 . ringtone",
  },
  {
    trackId: "music/track3.mp3",
    title: "No3 . ringtone",
  },
  {
    trackId: "music/track4.mp3",
    title: "No4 . ringtone",
  },
  {
    trackId: "music/track5.mp3",
    title: "No5 . ringtone",
  },
];

for (let i = 0; i < mp3.length; i++) {
  const tackDiv = document.createElement("div");
  tackDiv.addEventListener("click", () => {
    const trackId = mp3[i].trackId;
    audioTag.src = trackId;
    audioTag.play();
  });
  tackDiv.classList.add("trackItem");

  tackDiv.append(mp3[i].title);
  playlistContainer.appendChild(tackDiv);
}
