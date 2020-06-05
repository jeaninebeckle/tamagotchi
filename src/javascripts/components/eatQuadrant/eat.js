import utils from '../../helpers/utils';
import './eat.scss';
import petData from '../../helpers/data/petData';

const buildEatQuadrant = () => {
  const allPets = petData.getPets();
  let domString = '<div class="snackTime">';

  allPets.forEach((pet) => {
    domString += `<h3>${pet.name}</h3>`;
  });

  domString += '</div>';

  utils.printToDom('#eat', domString);
};

export default { buildEatQuadrant };
