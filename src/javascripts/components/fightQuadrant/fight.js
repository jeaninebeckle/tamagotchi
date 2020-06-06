import utils from '../../helpers/utils';
import './fight.scss';
import petData from '../../helpers/data/petData';

const buildFightQuadrant = () => {
  const allPets = petData.getPets();
  let domString = '<div class="battleTime">';

  allPets.forEach((pet) => {
    domString += `<h3>${pet.name}</h3>`;
  });

  domString += '</div>';


  utils.printToDom('#fight', domString);
};

export default { buildFightQuadrant };
