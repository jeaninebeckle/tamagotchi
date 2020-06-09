import utils from '../../helpers/utils';
import './fight.scss';

let strength = 100;

const buildFightQuadrant = () => {
  let domString = '<div class="battleTime">';

  domString += `<h3>FIGHT</h3>
    <h4>Tommy's current strength level: ${strength}</h4>
    <button id="runButton"><i class="fas fa-running"></i></button>
    <button id="violenceButton"><i class="fas fa-hand-rock fa-rotate-90"></i></button>
    `;

  domString += '</div>';

  utils.printToDom('#fight', domString);
};

const clickRunButtonEvent = (e) => {
  e.preventDefault();
  strength = Math.min(strength + 1, 100);
  buildFightQuadrant();
};

const clickViolenceButtonEvent = (e) => {
  e.preventDefault();
  strength -= 10;
  if (strength < 0) strength = 0;
  buildFightQuadrant();
};

$('body').on('click', '#runButton', clickRunButtonEvent);
$('body').on('click', '#violenceButton', clickViolenceButtonEvent);

export default { buildFightQuadrant };
