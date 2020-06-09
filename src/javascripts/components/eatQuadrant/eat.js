import utils from '../../helpers/utils';
import './eat.scss';

let full = 100;

const buildEatQuadrant = () => {
  let domString = '<div class="mealTime">';

  domString += `<h3>EAT</h3>
    <h4>Tommy's current hunger level: ${full}</h4>
    <button id="healthyButton"><i class="fas fa-carrot"></i></button>
    <button id="junkButton"><i class="fas fa-ice-cream"></i></button>
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
