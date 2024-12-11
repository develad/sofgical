/* eslint-disable react/prop-types */
import { numberFormatting } from '../../utils/formatting';

function TotalCalories({ cal }) {
  return (
    <h2
      className={`mb-12 text-8xl font-bold ${
        cal === 0 ? 'text-green-300' : 'text-red-400'
      }`}
    >
      {numberFormatting(cal)}
    </h2>
  );
}

export default TotalCalories;
