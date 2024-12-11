/* eslint-disable react/prop-types */
function RoundedCornersButton({
  children,
  bg = 'bg-white',
  text = 'text-black',
  border = 'border-0',
}) {
  return (
    <button
      className={`w-60 p-2 rounded-lg flex items-center justify-center font-bold text-lg ${bg} ${text} ${border}`}
    >
      {children}
    </button>
  );
}

export default RoundedCornersButton;
