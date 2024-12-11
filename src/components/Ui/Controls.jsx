/* eslint-disable react/prop-types */
function Controls({ children }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {children}
    </div>
  );
}

export default Controls;
