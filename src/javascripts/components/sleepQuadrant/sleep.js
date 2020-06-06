import utils from '../../helpers/utils';
import petData from '../../helpers/data/petData';
import './sleep.scss';

const buildSleepQuadrant = () => {
  const allPets = petData.getPets();
  let domString = '<div class="sleepyTime">';

  allPets.forEach((pet) => {
    domString += `<h3>${pet.name}</h3>`;
  });

  domString += '</div>';

  utils.printToDom('#sleep', domString);
};

export default { buildSleepQuadrant };
