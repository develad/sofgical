import { UiwGithub } from '../components/Ui/assets/Svgs';

// eslint-disable-next-line react/prop-types
function AppLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white ">
      {children}
      <footer
        dir="ltr"
        className="w-full bg-gray-900 p-2 mt-4"
      >
        <a
          className="w-fit mx-auto text-lg font-bold flex items-center justify-center gap-4 "
          href="https://github.com/develad"
          target="_blank"
        >
          Elad Bar &copy; {new Date().getFullYear()}
          <UiwGithub className="w-8 h-8 fill-white" />
        </a>
      </footer>
    </div>
  );
}

export default AppLayout;
