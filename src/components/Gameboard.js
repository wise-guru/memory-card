import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import BMO from '../assets/BMO.webp';
import Bubblegum from '../assets/bubblegum.jpg';
import CinnamonBun from '../assets/cinnamonBun.jpg';
import Finn from '../assets/FinnHeadshot.webp';
import FlamePrincess from '../assets/flamePrincess.webp';
import Gunter from '../assets/gunter.webp';
import IceKing from '../assets/iceKing.webp';
import Jake from '../assets/jake.webp';
import LSP from '../assets/lsp.jpg';
import Marceline from '../assets/marceline.jpg';
import PeppermintButler from '../assets/peppermintButler.webp';
import TreeTrunks from '../assets/treeTrunks.webp';
import Cards from './Cards';
import '../App.css';

const Gameboard = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const maxScore = 12;
  const [comparison, setComparison] = useState([]);

  const characters = [
    { name: 'BMO', image: BMO, id: uniqid() },
    { name: 'Bubblegum', image: Bubblegum, id: uniqid() },
    { name: 'Cinnamon Bun', image: CinnamonBun, id: uniqid() },
    { name: 'Finn', image: Finn, id: uniqid() },
    { name: 'Flame Princess', image: FlamePrincess, id: uniqid() },
    { name: 'Gunter', image: Gunter, id: uniqid() },
    { name: 'Ice King', image: IceKing, id: uniqid() },
    { name: 'Jake', image: Jake, id: uniqid() },
    { name: 'Lumpy State Princess', image: LSP, id: uniqid() },
    { name: 'Marceline', image: Marceline, id: uniqid() },
    { name: 'Peppermint Butler', image: PeppermintButler, id: uniqid() },
    { name: 'Tree Trunks', image: TreeTrunks, id: uniqid() }
  ];

  const shuffleCharacters = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const incrementScore = (clickedCharacter) => {
    if (comparison.includes(clickedCharacter)) {
      setComparison([]);
      setCurrentScore(0);
    } else {
      setComparison([...comparison, clickedCharacter]);
      setCurrentScore(currentScore + 1);
    }
  };

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore, bestScore]);

  return (
    <div className="gameBoard">
      <section className="scoreBoard">
        <div className="score">
          Current score<div className="scoreNum">: {currentScore}</div>
        </div>
        <div className="score">
          Best score<div className="scoreNum">: {bestScore}</div>
        </div>
        <div className="score">
          Max score<div className="scoreNum">: {maxScore}</div>
        </div>
      </section>

      <section className="cardContainer">
        {shuffleCharacters(characters).map((character) => {
          return (
            <Cards
              key={character.id}
              image={character.image}
              name={character.name}
              incrementScore={(clickedCharacter) => {
                incrementScore(clickedCharacter);
              }}
            />
          );
        })}
      </section>
    </div>
  );
};

export default Gameboard;
