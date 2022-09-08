import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', throttle(saveTime, 1000));

function saveTime(evt) {
  let timePlayStop = evt.seconds;
  console.log(timePlayStop);

  localStorage.setItem('videoplayer-current-time', timePlayStop);
}

const saveTimeV = localStorage.getItem('videoplayer-current-time');

if (saveTime) {
  player.setCurrentTime(saveTimeV);
}

