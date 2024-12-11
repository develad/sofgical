/* eslint-disable react/prop-types */

import DonutButtons from './DonutButtons';

function Card({ donut }) {
  return (
    <div className="p-4 text-center mb-16">
      <h1 className="text-2xl font-bold mb-4">
        סוג סופגנייה:
        <br /> {donut.name}
      </h1>
      <p className="text-xl">
        קלוריות:{' '}
        <span className="font-bold text-yellow-300">{donut.calories}</span>
      </p>
      <img
        src={donut.image}
        className="h-32 w-32 object-cover mx-auto"
      />

      <DonutButtons donut={donut} />
    </div>
  );
}

export default Card;
