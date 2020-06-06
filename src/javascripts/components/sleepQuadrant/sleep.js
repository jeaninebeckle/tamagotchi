import utils from '../../helpers/utils';
import petData from '../../helpers/data/petData';
import './sleep.scss';


const buildSleepQuadrant = () => {
  const allPets = petData.getPets();
  let domString = '<div class="sleepyTime">';

  allPets.forEach((pet) => {
    domString += `<h3>${pet.name}</h3>
    <h4>Current energy level: ${pet.energy}</h4>
    <button id="napButton">Nap</button>
    <button id="sleepButton">Sleep</button>
    `;
  });

  domString += '</div>';

  utils.printToDom('#sleep', domString);
};

const clickSleepButtonsEvent = (e) => {
  const allPets = petData.getPets();
  const buttonId = e.target.id;

  if (allPets.energy === 100) return;

  if (buttonId === 'napButton') {
    allPets.energy += 50;
  } else {
    allPets.energy += 60;
  }

  if (allPets.energy > 100) allPets.energy = 100;

  console.error(buttonId);
  buildSleepQuadrant();
};

$('body').on('click', '#napButton', clickSleepButtonsEvent);
$('body').on('click', '#sleepButton', clickSleepButtonsEvent);

export default { buildSleepQuadrant };
