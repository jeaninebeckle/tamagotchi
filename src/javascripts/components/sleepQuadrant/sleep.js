import utils from '../../helpers/utils';
import './sleep.scss';

let energy = 50;

const buildSleepQuadrant = () => {
  let domString = '<div class="sleepyTime">';

  domString += `<h3>SLEEP</h3>
    <h4>Tommy's current energy level: ${energy}</h4>
    <button id="napButton"><i class="fas fa-battery-half"></i></button>
    <button id="sleepButton"><i class="fas fa-battery-full"></i></button>
    `;

  domString += '</div>';

  utils.printToDom('#sleep', domString);
};

const clickSleepButtonsEvent = (e) => {
  const buttonId = e.target.id;

  if (energy === 100) return;

  if (buttonId === 'napButton') {
    energy += 50;
  } else {
    energy += 60;
  }

  if (energy > 100) energy = 100;

  console.error(energy);
  buildSleepQuadrant();
};

$('body').on('click', '#napButton', clickSleepButtonsEvent);
$('body').on('click', '#sleepButton', clickSleepButtonsEvent);

export default { buildSleepQuadrant };
