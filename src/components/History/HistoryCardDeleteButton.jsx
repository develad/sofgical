/* eslint-disable react/prop-types */
import { useAppContext } from '../../context/AppContext';

function HistoryCardDeleteButton({ item }) {
  const { createdAt, num, calories } = item;
  const { handleDeleteHistoryCard } = useAppContext();

  return (
    <button
      onClick={() => handleDeleteHistoryCard({ createdAt, calories, num })}
      className="w-5 h-5 bg-red-400 border-2 flex items-center justify-center text-xs text-black font-bold rounded-full"
    >
      <span className="flex items-center justify-center">X</span>
    </button>
  );
}

export default HistoryCardDeleteButton;
