import utils from '../../helpers/utils';
import './eat.scss';
// import petData from '../../helpers/data/petData';

let full = 100;

const buildEatQuadrant = () => {
  let domString = '<div class="mealTime">';

  domString += `<h3>Eat</h3>
    <h4>Current strength level: ${full}</h4>
    <button id="healthyButton">Healthy Food</button>
    <button id="junkButton">Junk Food</button>
    `;

  domString += '</div>';

  utils.printToDom('#eat', domString);
};

const clickHealthyButtonEvent = (e) => {
  e.preventDefault();
  full = Math.min(full + 10, 100);
  buildEatQuadrant();
};

const clickJunkButtonEvent = (e) => {
  e.preventDefault();
  full -= 3;
  if (full < 0) full = 0;
  buildEatQuadrant();
};

$('body').on('click', '#healthyButton', clickHealthyButtonEvent);
$('body').on('click', '#junkButton', clickJunkButtonEvent);

export default { buildEatQuadrant };
