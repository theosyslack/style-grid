import React from "react";
import "./StyleGrid.scss";

const EMPTY_GRID = [[], [], []];

function StyleBox({ percentage }) {
  const opacity = 1 - percentage;
  return (
    <div className="StyleGrid__box">
      <div className="StyleGrid__boxText">{percentage * 100}% </div>
      <div className="StyleGrid__boxScreen" style={{ opacity }} />
    </div>
  );
}

function StyleGrid({ title, backgroundColor = "black", grid = EMPTY_GRID }) {
  const y = ["large", "mid", "small"];
  const x = ["value", "blend", "growth"];
  const [largePercentages, midPercentages, smallPercentages] = grid;

  return (
    <div className="StyleGrid">
      <div className="StyleGrid__title">{title}</div>
      <div className="StyleGrid__container">
        <div className="StyleGrid__yLabels">
          <div className="StyleGrid__yLabel"> Large </div>
          <div className="StyleGrid__yLabel"> Mid </div>
          <div className="StyleGrid__yLabel"> Small </div>
        </div>
        <div className="StyleGrid__content" style={{ backgroundColor }}>
          <div className="StyleGrid__row">
            {largePercentages.map((percentage) => (
              <StyleBox percentage={percentage} />
            ))}
          </div>
          <div className="StyleGrid__row">
            {midPercentages.map((percentage) => (
              <StyleBox percentage={percentage} />
            ))}
          </div>
          <div className="StyleGrid__row">
            {smallPercentages.map((percentage) => (
              <StyleBox percentage={percentage} />
            ))}
          </div>
        </div>
        <div className="StyleGrid__xLabels">
          <span className="StyleGrid__xLabel"> Value </span>
          <span className="StyleGrid__xLabel"> Blend </span>
          <span className="StyleGrid__xLabel"> Growth </span>
        </div>
      </div>
    </div>
  );
}

export default StyleGrid;
