import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onRecordsEimePlayed, 1000));

function onRecordsEimePlayed(time) {
  console.log(time);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(time));
}
onSavedTime();
function onSavedTime() {
  const savedTimeVideo = localStorage.getItem(LOCALSTORAGE_KEY);
  const parcedsavedTimeVideo = JSON.parse(savedTimeVideo);

  if (savedTimeVideo) {
    player.setCurrentTime(parcedsavedTimeVideo.seconds);
  }
}
