import utils from '../../helpers/utils';
// import petData from '../../helpers/data/petData';
import './play.scss';

let fun = 50;

const buildPlayQuadrant = () => {
  let domString = '<div class="playTime">';

  domString += `<h3>PLAY/h3>
    <h4>Tommy's current fun level: ${fun}</h4>
    <button id="superButton"><i class="far fa-laugh-beam"></i></button>
    <button id="kindaButton"><i class="far fa-smile"></i></button>
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
