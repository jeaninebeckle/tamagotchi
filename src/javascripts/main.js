import '../styles/main.scss';
import eat from './components/eatQuadrant/eat';
import fight from './components/fightQuadrant/fight';
import sleep from './components/sleepQuadrant/sleep';
import play from './components/playQuadrant/play';


const init = () => {
  eat.buildEatQuadrant();
  fight.buildFightQuadrant();
  sleep.buildSleepQuadrant();
  play.buildPlayQuadrant();
  // document.querySelector('#napButton').addEventListener('click', sleep.clickSleepButtonsEvent);
  // document.querySelector('#sleepButton').addEventListener('click', sleep.clickSleepButtonsEvent);
};

init();
