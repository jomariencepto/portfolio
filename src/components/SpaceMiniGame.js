import React, { useState } from 'react';

export default function SpaceMiniGame() {
  const [launched, setLaunched] = useState(false);
  const [score, setScore] = useState(0);
  const [fuel, setFuel] = useState(100);

  const launchRocket = () => {
    setLaunched(true);
    setScore((current) => current + 10);
    setFuel((current) => Math.max(0, current - 14));
  };

  const refuelRocket = () => {
    setLaunched(false);
    setFuel(100);
  };

  return (
    <div className="space-game" aria-label="Mini rocket game">
      <div className="space-game__sky">
        <div className="moon"></div>
        <div className="planet planet--one"></div>
        <div className="planet planet--two"></div>
        <div className="planet planet--ring"></div>
        <div className="collect-star collect-star--one"></div>
        <div className="collect-star collect-star--two"></div>
        <div className="collect-star collect-star--three"></div>

        <button
          type="button"
          onClick={launchRocket}
          className={`rocket-button ${launched ? 'rocket-button--launched' : ''}`}
          aria-label="Launch rocket"
        >
          <span className="rocket">
            <span className="rocket__nose"></span>
            <span className="rocket__window"></span>
            <span className="rocket__body"></span>
            <span className="rocket__fin rocket__fin--left"></span>
            <span className="rocket__fin rocket__fin--right"></span>
            <span className="rocket__flame"></span>
          </span>
        </button>
      </div>

      <div className="space-game__hud">
        <div>
          <p className="space-game__label">Rocket mini game</p>
          <p className="space-game__title">Click the rocket to collect orbit points</p>
        </div>
        <div className="space-game__stats">
          <span>{score} pts</span>
          <span>{fuel}% fuel</span>
        </div>
      </div>

      <div className="space-game__controls">
        <button type="button" onClick={launchRocket} disabled={fuel === 0}>
          Launch
        </button>
        <button type="button" onClick={refuelRocket}>
          Refuel
        </button>
      </div>
    </div>
  );
}
