import utils from '../../helpers/utils';
// import petData from '../../helpers/data/petData';
import './sleep.scss';

let energy = 50;

const buildSleepQuadrant = () => {
  let domString = '<div class="sleepyTime">';

  domString += `<h3>Tommy</h3>
    <h4>Current energy level: ${energy}</h4>
    <button id="napButton">Nap</button>
    <button id="sleepButton">Sleep</button>
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
