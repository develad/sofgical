/* eslint-disable react/prop-types */

function CircleButton({
  children,
  bg = 'bg-black',
  text = 'text-white',
  animate = 'animate-none',
}) {
  return (
    <div
      className={`aspect-square cursor-pointer p-4 rounded-full flex items-center justify-center font-bold ${bg} ${text} border-4`}
    >
      <div className={`${animate}`}>{children}</div>
    </div>
  );
}

export default CircleButton;
