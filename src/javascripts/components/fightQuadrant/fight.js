import utils from '../../helpers/utils';
import './fight.scss';
// import petData from '../../helpers/data/petData';

let strength = 100;

const buildFightQuadrant = () => {
  let domString = '<div class="battleTime">';

  domString += `<h3>Fight</h3>
    <h4>Current strength level: ${strength}</h4>
    <button id="runButton">Run Away (Bravely)</button>
    <button id="violenceButton">Act Of Violence</button>
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
