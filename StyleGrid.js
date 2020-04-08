import React from "react";
import "./StyleGrid.css";

const EMPTY_GRID = [[], [], []];

function StyleBox({ percentage }) {
  const opacity = 100 - (0.3 + (0.7 * percentage) / 100);
  return <div className="StyleGrid__box" style={{ opacity }} />;
}

function StyleGrid({ title, backgroundColor = "black", grid = EMPTY_GRID }) {
  const y = ["large", "mid", "small"];
  const x = ["value", "blend", "growth"];
  const [largePercentages, midPercentages, smallPercentages] = grid;

  return (
    <div className="StyleGrid" >
      <div className="StyleGrid__title">{title}</div>
      <div className="StyleGrid__container" style={{ backgroundColor }}>
        <div className="StyleGrid__row">
          <div className="StyleGrid__yLabel"> Large </div>
          {largePercentages.map((percentage) => (
            <StyleBox percentage={percentage} />
          ))}
        </div>
        <div className="StyleGrid__row">
          <div className="StyleGrid__yLabel"> Mid </div>
          {midPercentages.map((percentage) => (
            <StyleBox percentage={percentage} />
          ))}
        </div>
        <div className="StyleGrid__row">
          <div className="StyleGrid__yLabel"> Small </div>
          {smallPercentages.map((percentage) => (
            <StyleBox percentage={percentage} />
          ))}
        </div>
        <div className="StyleGrid__row">
          <span className="StyleGrid__xLabel"> Value </span>
          <span className="StyleGrid__xLabel"> Blend </span>
          <span className="StyleGrid__xLabel"> Growth </span>
        </div>
      </div>
    </div>
  );
}

export default StyleGrid;
