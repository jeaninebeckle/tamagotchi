import utils from '../../helpers/utils';
import petData from '../../helpers/data/petData';
import './play.scss';

const buildPlayQuadrant = () => {
  const allPets = petData.getPets();
  let domString = '<div class="playTime">';

  allPets.forEach((pet) => {
    domString += `<h3>${pet.name}</h3>`;
  });

  domString += '</div>';


  utils.printToDom('#play', domString);
};

export default { buildPlayQuadrant };
