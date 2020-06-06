import utils from '../../helpers/utils';
// import petData from '../../helpers/data/petData';
import './play.scss';

let fun = 50;

const buildPlayQuadrant = () => {
  let domString = '<div class="playTime">';

  domString += `<h3>Play</h3>
    <h4>Current strength level: ${fun}</h4>
    <button id="superButton">Super Fun Time</button>
    <button id="kindaButton">Kinda Fun Time</button>
    `;

  domString += '</div>';

  utils.printToDom('#play', domString);
};

const clickSuperButtonEvent = (e) => {
  e.preventDefault();
  fun = Math.min(fun + 50, 100);
  buildPlayQuadrant();
};

const clickKindaButtonEvent = (e) => {
  e.preventDefault();
  fun = Math.min(fun + 2, 100);
  buildPlayQuadrant();
};

$('body').on('click', '#superButton', clickSuperButtonEvent);
$('body').on('click', '#kindaButton', clickKindaButtonEvent);

export default { buildPlayQuadrant };
