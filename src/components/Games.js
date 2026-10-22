import React from 'react';
import './Games.css';

const games = [
  {
    name: 'Tri Match: Tile Puzzle',
    tagline: 'Match tiles at your own pace — no timers, no pressure.',
    image: 'https://play-lh.googleusercontent.com/rW-sVz0zdCAe3WjyUtA3U6QK-xpdpGXj39XFBgrgdu7J5xRAufWPenramen492iSOVYmE1NmzjRlyMPxa4_VvA=s0-br30',
    playUrl: 'https://play.google.com/store/apps/details?id=com.funhive.trimatch.tile.puzzle.game',
  },
  {
    name: 'Loophole: Snake Maze Puzzle',
    tagline: 'Every maze has a way out. Find it.',
    image: 'https://play-lh.googleusercontent.com/jBE_R47hXww7ycUj6x1FXpzUkzatNIVq_8k809-bpVN3F8FeTOqTDcUtRd8nzUMKMJhkZYoMnt3alUmE7H9iQA=s0-br30',
    playUrl: 'https://play.google.com/store/apps/details?id=com.funhive.loophole.snake.puzzle',
  },
  {
    name: 'Arrow IQ: Tap Escape Puzzle',
    tagline: 'Tap arrows in the right order to clear the maze.',
    image: 'https://play-lh.googleusercontent.com/j3N0VTumEQL2wCyb_ZrueHRQ8VNc8IgmuQlwV-LSVqUjd48K_Ke4mrySIKqTTup1rV4vqNHvv_h2qpcyN7KksQ=s0-br30',
    playUrl: 'https://play.google.com/store/apps/details?id=com.funhive.arrowiq.logicpuzzle',
  },
  {
    name: 'Arcade Rush: 5 Endless Games',
    tagline: '5 arcade games in 1 app — race, dodge, run & survive!',
    image: 'https://play-lh.googleusercontent.com/Xpu_H2bz9PU0eWOQWguwatpuyjD8LUsyEbbJ3tVlIJ8PS3zGLVrIGwna9Tq_nt6LxquMC_H8O1flo7wN24-06g=s0-br30',
    playUrl: 'https://play.google.com/store/apps/details?id=com.funhivegames.arcademania',
  },
  {
    name: 'JamShift : Move & Clear',
    tagline: 'Tap, move and clear the traffic jam!',
    image: 'https://play-lh.googleusercontent.com/bt8ENk-N6pMBznFRJZdxiui1GFedVFmxOu0tekhlagZpbDViBP5olRvWKiKKlc_-T0M_766xe7b2W_Rtzh7MhNs=s0-br30',
    playUrl: 'https://play.google.com/store/apps/details?id=com.funhive.jamshift.car.escape',
  },
];

const Games = () => {
  return (
    <section id="games" className="games-section">
      <div className="container">
        <h2 className="games-title">Our <span>Games</span></h2>
        <p className="games-subtitle">
          Play our games on Google Play — tap any game to download it free.
        </p>
        <div className="games-grid">
          {games.map((game) => (
            <a
              key={game.name}
              className="game-card"
              href={game.playUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="game-card-image" src={game.image} alt={game.name} loading="lazy" />
              <div className="game-card-body">
                <h3>{game.name}</h3>
                <p>{game.tagline}</p>
                <span className="game-play-button">▶ Get it on Google Play</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Games;
