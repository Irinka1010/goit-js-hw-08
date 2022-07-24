import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';
console.log(player);

player.on('timeupdate', throttle(recordsEimePlayed, 1000));

function recordsEimePlayed({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
  console.log('rere');
}
