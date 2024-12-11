/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useAppContext } from '../../context/AppContext';
import CircleButton from '../Buttons/CircleButton';
import { MaterialSymbolsAdd2 } from '../Ui/assets/Svgs';
import { numberFormatting } from '../../utils/formatting';

function DonutButtons({ donut }) {
  const { calories } = donut;
  const [donutsNumber, setDonutsNumber] = useState(1);
  const { handleAddToTotalCalories } = useAppContext();

  const totalCalories = donutsNumber * calories;

  const handlePlus = () => {
    setDonutsNumber(donutsNumber + 1);
  };
  const handleMinus = () => {
    if (donutsNumber <= 1) return;
    setDonutsNumber(donutsNumber - 1);
  };

  return (
    <div>
      <div className="w-full flex items-center justify-center gap-x-12 text-4xl mb-4">
        <button
          className="rounded-full h-9 w-9 text-black bg-white flex items-center justify-center pb-2"
          onClick={handlePlus}
        >
          +
        </button>
        <p>{donutsNumber}</p>
        <button
          className={`rounded-full h-9 w-9 text-black bg-white flex items-center justify-center pb-2 ${
            donutsNumber === 1 && 'opacity-20'
          }`}
          onClick={handleMinus}
        >
          -
        </button>
      </div>

      <p>סך הכול קלוריות:</p>
      <h2 className="text-7xl font-bold mt-4 text-red-400">
        {numberFormatting(totalCalories)}
      </h2>
      <div className="mt-8 w-full flex flex-col gap-4 items-center justify-between">
        <div
          onClick={() =>
            handleAddToTotalCalories({ totalCalories, donut, donutsNumber })
          }
        >
          <CircleButton
            bg="bg-slate-700"
            border="border-2"
            text="text-white"
            // animate="animate-bounce"
          >
            <MaterialSymbolsAdd2 className="fill-white w-11 h-11" />
          </CircleButton>
        </div>
      </div>
    </div>
  );
}

export default DonutButtons;
