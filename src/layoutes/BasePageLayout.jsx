// eslint-disable-next-line react/prop-types
function BasePageLayout({ children }) {
  return (
    <div className="flex-1 max-w-[90%] md:max-w-[70%] mx-auto mt-8">
      {children}
    </div>
  );
}

export default BasePageLayout;
